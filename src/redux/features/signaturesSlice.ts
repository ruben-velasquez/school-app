import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Grade = {
  number: number;
};

export type Signature = {
  icon: string;
  name: string;
  grades: Grade[];
};

type SignaturesState = {
  value: Signature[];
  selectedSignature: number;
};

const initialState: SignaturesState = { value: [], selectedSignature: 0 };

export const signaturesSlice = createSlice({
  name: "signatures",
  initialState,
  reducers: {
    setSignatures: (state, action: PayloadAction<Signature[]>) => {
      state.value = action.payload;
    },
    addSignature: (state, action: PayloadAction<Signature>) => {
      state.value.push(action.payload);
    },
    removeSignature: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
    addGrade: (
      state,
      action: PayloadAction<{ index: number; grade: Grade }>,
    ) => {
      const { index, grade } = action.payload;
      state.value[index].grades.push(grade);
    },
    removeGrade: (
      state,
      action: PayloadAction<{ signatureIndex: number; gradeIndex: number }>,
    ) => {
      const { signatureIndex, gradeIndex } = action.payload;
      state.value[signatureIndex].grades.splice(gradeIndex, 1);
    },
    selectSignature: (state, action: PayloadAction<number>) => {
      state.selectedSignature = action.payload;
    },
  },
});

export const {
  setSignatures,
  addSignature,
  removeSignature,
  addGrade,
  removeGrade,
  selectSignature,
} = signaturesSlice.actions;

export default signaturesSlice.reducer;
