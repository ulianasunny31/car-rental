import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const request = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

export const getAllCars = createAsyncThunk(
  'cars/getAll',
  async (filters = {}, { rejectWithValue }) => {
    try {
      const { data } = await request.get('/cars', { params: filters });
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
      console.log(data);

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
      const brands = await request.get('/brands');
      return brands;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
