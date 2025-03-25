import { configureStore, createAction } from "@reduxjs/toolkit";

const initialState = {
  balance: {
    values: 123,
  },
  locale: {
    lang: "uk",
  },
};

const rootReducer = (state = initialState, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "balance/deposit": {
      return {
        ...state,
        balance: {
          values: state.balance.values + action.payload,
        },
      };
    }
    case "balance/withdraw": {
      return {
        ...state,
        balance: {
          values: state.balance.values - action.payload,
        },
      };
    }
    case "locale/changeLang": {
      return {
        ...state,
        locale: {
          lang: action.payload,
        },
      };
    }

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});

export const deposit = createAction("balance/deposit");
export const withdraw = createAction("balance/withdraw");
export const changeLang = createAction("locale/changeLang");

// Один раз на додаток створити store та редюсер

// Оголосити компонент(и)
// Підписати компонент(и) на дані в store через useSelector
// Оголосити екшен за допомогою createAction
// Відправити екшен із компонента через useDispatch
// Обробити екшен в редюсері

//--1
// https://redux-toolkit.js.org/
// https://react-redux.js.org/

// import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = (state = { value: 0 }) => {
//   return state;
// };
// export const store = configureStore({
//   reducer: rootReducer,
// });

//---2
// action:-A
// const deposit = {
//   type: "balance/deposit",
//   payload: 10,
// };

// фабрика -f-B
// const deposit = (value) => {
//   return { type: "balance/deposit", payload: value };
// };
// deposit(20)
//
// -C
// import {createAction } from "@reduxjs/toolkit";
// const deposit = createAction("balance/deposit");

// deposit(20)

//---3
//текущее не меняем - создаём новое
// const initialState = {
//   balance: {
//     values: 123,
//   },
// };
// const rootReducer = (state = initialState, action) => {

// const rootReducer = (state = initialState, action) => {
//   console.log(state);
//   console.log(action);
//   switch (action.type) {
//     case "balance/deposit": {
//       return {
//         ...state,
//         balance: {
//           values: state.balance.values + action.payload,
//         },
//       };
//     }
//     case "balance/withdraw": {
//       return state;
//     }
//     default:
//       return state;
//   }
// };
