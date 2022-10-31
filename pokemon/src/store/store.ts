import {
  Action,
  configureStore,
  ThunkAction,
  combineReducers,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
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
import storage from "../util/storage";
import { pokemonReducer } from "./slice/pokemon-slice";
import { allGenderReducer } from "./slice/gender-all-slice";
import { allColorReducer } from "./slice/color-all-slice";
import { filterAllReducer } from "./slice/filter-gender-color";
import { pagFilterReducer } from "./slice/pag-filter-slice";
//import { filterReducer } from "./slice/filter-gender-color";

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  allGender: allGenderReducer,
  allColor: allColorReducer,
  filterAll: filterAllReducer,
  pagFilter: pagFilterReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

const initStore = () => {
  return store;
};

export type AppStore = ReturnType<typeof initStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
