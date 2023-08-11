import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../api/apiConfig";

export const fetchProperty = createAsyncThunk(
  "api/fetchProperty",
  async (data, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await instance.get(
        "058dbada-3f7f-46c6-83d2-a3c5575b2c6a",
        data
      );
      return fulfillWithValue(response.data);
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);
export const loginUser = createAsyncThunk(
  "api/loginUser",
  async (data, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await instance.post(
        "0b140ce8-5cf9-414f-bbda-06965e6d728d",
        data
      );
      return fulfillWithValue(response);
    } catch (error) {
      throw rejectWithValue(error);
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
  loginData: null,
};

const authSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    resetData: (state) => {
      state.data = "";
      state.loading = "";
      state.error = "";
      state.loginData = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProperty.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProperty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        sessionStorage.setItem("auth", action?.payload?.data?.auth);
        sessionStorage.setItem("userName", "testLogin");
        state.loginData = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { resetData } = authSlice.actions;
export default authSlice.reducer;
