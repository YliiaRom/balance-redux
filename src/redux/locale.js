import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "locale",
  initialState: {
    lang: "uk",
  },
  reducers: {
    changeLang: (state, action) => {
      return {
        ...state,
        lang: state.payload,
      };
    },
  },
});
export default slice.reducer;
export const { changeLang } = slice.actions;

// import { createAction } from "@reduxjs/toolkit";

// export const changeLang = createAction("locale/changeLang");

// const initialValue = {
//   lang: "uk",
// };
// export default function localeSliceReducer(state = initialValue, action) {
//   switch (action.type) {
//     case "locale/changeLang": {
//       return {
//         ...state,
//         lang: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// }
