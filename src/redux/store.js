import { configureStore, createAction } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import localeReducer from "./locale";
import notesSliceReducer from "./notesSlice";
import balanceReducer from "./balanceSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

//данные  для лс

const persistConfig = {
  //любое название ключа"
  key: "balance",
  storage,
  //значение чего сберечь в ls?
  whitelist: ["value"],
};

//для каждого отдельно передаём редюсер
const persistedBalanceReducer = persistReducer(persistConfig, balanceReducer);

export const store = configureStore({
  reducer: {
    //замена  balance: balanceReducer,
    balance: persistedBalanceReducer,
    locale: localeReducer,
    notes: notesSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Обязательно!!! сделать копию stor
export const persistor = persistStore(store);

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
