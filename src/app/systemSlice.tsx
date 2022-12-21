const { createSlice } = require("@reduxjs/toolkit");

const systemSlice = createSlice({
  name: 'system',
  initialState: {
    current: {},
  },
  reducers: {},
  extraReducers: {}
});

const { reducer: systemReducer } = systemSlice;
export default systemReducer;