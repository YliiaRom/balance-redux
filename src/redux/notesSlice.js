import { createAction } from "@reduxjs/toolkit";

const initialValue = {
  item: ["js", "react", "css", "html"],
};
export const changeNotes = createAction("notes/changeNotes");

export default function notesSliceReducer(state = initialValue, action) {
  switch (action.type) {
    case "notes/changeNotes": {
      return {
        ...state,
        item: [...state.item, action.payload],
      };
    }
    default:
      return state;
  }
}
