import { ToastModel } from "src/models/configModel";

const { createSlice } = require("@reduxjs/toolkit");

const initialSystems: ToastModel = {
  isOpen: false,
  message: "",
  type: "success"
};

const systemSlice = createSlice({
  name: 'system',
  initialState: initialSystems,
  reducers: {
    updateToast: (state: ToastModel, action: any) => {
      state.isOpen = action.payload.isOpen;
      state.message = action.payload.message;
      state.type = action.payload.type;
    }
  }
});

const { actions, reducer } = systemSlice;
export const { updateToast } = actions;
export default reducer;