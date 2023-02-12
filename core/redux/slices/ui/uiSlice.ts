/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

type UIType = {
  modalRegister: boolean;
  modalLogin: boolean;
  modalLogout: boolean;
  showSidebar: boolean;
  toast: {
    show: boolean;
    text: string;
  };
};
const initialState: UIType = {
  modalRegister: false,
  modalLogin: false,
  modalLogout: false,
  showSidebar: false,
  toast: {
    show: false,
    text: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setModalRegister: (state) => {
      state.modalRegister = true;
    },
    setModalLogin: (state) => {
      state.modalLogin = true;
    },
    setModalLogout: (state) => {
      state.modalLogout = true;
    },
    closeModal: (state) => {
      state.modalLogin = false;
      state.modalLogout = false;
    },
    setShowSidebar: (state, action) => {
      state.showSidebar = action.payload;
    },
    setToast: (state, action) => {
      state.toast.show = true;
      state.toast.text = action.payload;
    },
    removeToast: (state) => {
      state.toast.show = false;
      state.toast.text = "";
    },
  },
});
export const {
  setModalRegister,
  setModalLogin,
  setModalLogout,
  removeToast,
  setToast,
  closeModal,
  setShowSidebar,
} = uiSlice.actions;
export default uiSlice.reducer;
