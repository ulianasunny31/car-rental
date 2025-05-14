import { createSlice } from '@reduxjs/toolkit';
import { getAllCars, getBrands, getCarById } from './operations';

const initialState = {
  carList: [],
  favorite: [],
  filters: {},
  chosenCar: null,
  brands: [],
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    changeFilters(state, { payload }) {
      state.filters = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.carList = payload;
      })
      .addCase(getCarById.fulfilled, (state, { payload }) => {
        state.chosenCar = payload;
      })
      .addCase(getBrands.fulfilled, (state, { payload }) => {
        state.brands = payload;
      });
  },
});

export const { changeFilters } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
