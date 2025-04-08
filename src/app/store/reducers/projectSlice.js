import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StoreService from "../../../shared/api/service";

export const fetchProjectData = createAsyncThunk(
  "project/fetchProjectData",
  async () => {
    const response = await StoreService.getProjectData();
    return response.data;
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjectData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProjectData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default projectSlice.reducer;
