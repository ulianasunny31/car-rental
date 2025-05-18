import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const request = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

export const getAllCars = createAsyncThunk(
  'cars/getAll',
  async ({ filters = {}, page = 1, limit = 8 }, { rejectWithValue }) => {
    try {
      const { data } = await request.get('/cars', {
        params: { page, limit, ...filters },
      });

      return data;
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
