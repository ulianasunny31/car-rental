import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const request = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

export const getAllCars = createAsyncThunk(
  'cars/getAll',
  async (filters = {}, { rejectWithValue }) => {
    console.log(filters);

    try {
      const { data } = await request.get('/cars', { params: filters });
      console.log(data.cars);

      return data.cars;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCarById = createAsyncThunk(
  'cars/getOne',
  async (carId, { rejectWithValue }) => {
    try {
      const { data } = await request.get(`/cars/${carId}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getBrands = createAsyncThunk(
  'cars/getBrands',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await request.get('/brands');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
