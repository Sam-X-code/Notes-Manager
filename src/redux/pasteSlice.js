import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,

  reducers: {
    // ADD
    addToPastes: (state, action) => {
      const paste = action.payload;

      state.pastes.push(paste);

      localStorage.setItem("pastes",JSON.stringify(state.pastes));

      toast.success("Paste Saved Successfully!");
    },

    // UPDATE
    updateToPastes: (state, action) => {
      const updatedPaste = action.payload;

      const index = state.pastes.findIndex(
        (item) => item._id === updatedPaste._id
      );

      if (index >= 0) {
        state.pastes[index] = updatedPaste;

        localStorage.setItem(
          "pastes",
          JSON.stringify(state.pastes)
        );

        toast.success("Paste Updated Successfully!");
      }
    },

    // DELETE
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;

      const index = state.pastes.findIndex(
        (paste) => paste._id === pasteId
      );

      if (index >= 0) {
        state.pastes.splice(index, 1);

        localStorage.setItem(
          "pastes",
          JSON.stringify(state.pastes)
        );

      toast.success("Paste Deleted Successfully!");
    }
},

    // RESET
    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All Pastes Cleared!");
    },

  },
});

export const {addToPastes,updateToPastes,resetAllPastes,removeFromPastes,} = pasteSlice.actions;

export default pasteSlice.reducer;