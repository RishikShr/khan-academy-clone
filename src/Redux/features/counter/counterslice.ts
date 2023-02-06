import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Subject {
  class: string;
  subject: string;
  chapters: {
    annotation: string;
    name: string;
    points_to_earn: number;
    id: string;
    topics: {
      annotation: string;
      name: string;
      points_to_earn: number;
      id: string;
    }[];
  }[];
}

const initialState: Subject = {
  class: "11",
  subject: "maths",
  chapters: [
    {
      annotation: "Chapter1",
      name: "Set",
      points_to_earn: 1000,
      id: "klmansfkj",
      topics: [
        {
          annotation: "",
          name: "Introduction to Set",
          points_to_earn: 100,
          id: "xyz",
        },
        {
          annotation: "",
          name: "Application of Set",

          points_to_earn: 150,
          id: "abc",
        },
      ],
    },
  ],
};

export const subjectSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSubject: (state, action: PayloadAction<Subject>) => {
      console.log(action.payload,"actionpayloas");
      
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSubject } = subjectSlice.actions;

export default subjectSlice.reducer;
