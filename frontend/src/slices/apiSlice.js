import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

import { logout } from './authSlice'; // Logout action import kiya hai

// JWT aur Cookie expire hone par 401 responses ko intercept karne ke liye custom baseQuery

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

async function baseQueryWithAuth(args, api, extra) {
  const result = await baseQuery(args, api, extra);
  // Agar 401 unauthorized aaye toh user ko logout kar do
  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }
  return result;
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth, // Custom baseQuery attach kiya hai
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}),
});
