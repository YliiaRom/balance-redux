import { createSlice } from "@reduxjs/toolkit";

// createSlice(reducer, actions)
//ф-ція що создає Слайс -createSlice({
// 1- ім'я слайсу                     name: "xxx"
// 2- початкове значення слайсу       initialState: {}
//3- різні редюсери -Об'ект           redusers: { A: {}, B:{}, C:{}}
//                                   })

const slice = createSlice({
  name: "balance",
  initialState: {
    value: 100,
  },
  reducers: {
    deposit: (state, action) => {
      // return {
      //   ...state,
      //   value: state.value + action.payload,
      // };
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      // return {
      //   ...state,
      //   value: state.value - action.payload,
      // };
      state.value -= action.payload;
    },
  },
});
console.log(slice);
export default slice.reducer;
//createSlice під капотом з усих редюсєрів зробить 1 редюсєр

export const { deposit, withdraw } = slice.actions;
//об'ект створює генератори єкшенів -
// в type- запише: name/назва властівості(f)

// export const deposit = createAction("balance/deposit");
// export const withdraw = createAction("balance/withdraw");

// const initialState = {
//   value: 100,
// };
// export default function balanceSliceReducer(state = initialState, action) {
//   console.log(`state/action - `, state, action);
//   switch (action.type) {
//     case "balance/deposit": {
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };
//     }
//     case "balance/withdraw": {
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };
//     }

//     default:
//       return state;
//   }
// }
