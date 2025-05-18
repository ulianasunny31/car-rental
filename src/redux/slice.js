import { createSlice } from '@reduxjs/toolkit';
import { getAllCars, getBrands, getCarById } from './operations';

const initialState = {
  carList: [],
  favorite: [],
  filters: {},
  chosenCar: null,
  brands: [],
  totalPages: 0,
  page: 1,
  totalCars: 0,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    changeFilters(state, { payload }) {
      state.filters = payload;
      state.page = 1;
    },
    changePage(state) {
      state.page += 1;
    },
    addToFavs(state, { payload }) {
      const isAdded = state.favorite.find((car) => car.id === payload.id);
      if (!isAdded) {
        state.favorite.push(payload);
      }
    },
    resetFavs(state) {
      state.favorite = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        if (state.page === 1 || payload.page === 1) {
          state.carList = payload.cars;
        } else {
          state.carList = [...state.carList, ...payload.cars];
        }
        state.totalCars = payload.totalCars;
        state.totalPages = payload.totalPages;
      })
      .addCase(getCarById.fulfilled, (state, { payload }) => {
        state.chosenCar = payload;
      })
      .addCase(getBrands.fulfilled, (state, { payload }) => {
        state.brands = payload;
      });
  },
});

export const { changeFilters, changePage, addToFavs, resetFavs } =
  carsSlice.actions;

export const carsReducer = carsSlice.reducer;
