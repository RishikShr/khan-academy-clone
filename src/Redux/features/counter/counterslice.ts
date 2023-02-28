import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit';
export interface  ISubject {
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

export interface IChapterListType {
  chapter:{
  ChapterName: string;
  ChapterProgress: number;
  }[]
}

const initialState: ISubject = {
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

const initialStateChapter :IChapterListType=
  {
    "chapter":[
    { "ChapterName": "set", "ChapterProgress": 0 },
  
      { "ChapterName": "Relations and functions", "ChapterProgress": 0 },
      { "ChapterName": "Trigonometric functions", "ChapterProgress": 0 },
      { "ChapterName": "Complex numbers", "ChapterProgress": 0 },
      { "ChapterName": "Linear inequalities", "ChapterProgress": 0 },
      { "ChapterName": "Permutations and combinations", "ChapterProgress": 0 }]
    }


export const subjectSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSubject: (state, action: PayloadAction<ISubject>) => {
      console.log(action.payload,"actionpayload");
      
      return action.payload;
    },
  },
  
});

// Action creators are generated for each case reducer function
export const { setSubject } = subjectSlice.actions;

 

export const chapterSlice = createSlice({
  name: "chapter",
  initialState:initialStateChapter,
  reducers: {
    setChapter: (state, action: PayloadAction<IChapterListType>) => {
      console.log(action.payload,"actionpayload");
      return action.payload;
    },
  },
});

export const { setChapter } = chapterSlice.actions;


