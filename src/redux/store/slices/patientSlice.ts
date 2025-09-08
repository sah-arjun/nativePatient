import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PatientState {
  selectedPatient: any | null;
}

const initialState: PatientState = {
  selectedPatient: null,
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    selectPatient: (state, action: PayloadAction<any>) => {
      state.selectedPatient = action.payload;
    },
    clearSelectedPatient: (state) => {
      state.selectedPatient = null;
    },
  },
});

export const { selectPatient, clearSelectedPatient } = patientSlice.actions;
export default patientSlice.reducer;
