import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const searchGame = createAsyncThunk(
  "search/searchGame",
  async (param, { rejectWithValue }) => {
    const options = {
      method: "GET",
      url: "https://steam-api7.p.rapidapi.com/search",
      params: {
        query: param,
        limit: 15,
      },
      headers: {
        "x-rapidapi-key": "e3230fb4e5mshae41db240f6bce2p1a9ff0jsn4d4718bef7e7",
        "x-rapidapi-host": "steam-api7.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      //   console.log(response, "yyyy");
      return response.data;
    } catch (error) {
      const err = error.response ? error.response.data : error.message;
    //   console.log(error, "error");
      return rejectWithValue(err);
    }
  }
);

const searchOptions = {
  name: "search",
  initialState: {
    param: "",
    result: [],
    hasSearched: false
  },
  reducers: {
    inputParam: (state, action) => {
      state.param = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchGame.pending, () => {
        toast.loading("Searching");
      })
      .addCase(searchGame.fulfilled, (state, action) => {
        toast.dismiss();
        // console.log(action, "fuffiled");
        state.result = action.payload.results;
        state.hasSearched = true
      })
      .addCase(searchGame.rejected, (_, action) => {
        toast.dismiss();
        // console.log(action, "errpo")
        toast.error(action.payload);
      });
  },
};

const searchSlice = createSlice(searchOptions);

export const { inputParam } = searchSlice.actions;
export default searchSlice.reducer;
