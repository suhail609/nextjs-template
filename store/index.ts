//REDUX-TOOLKIT
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
//SLICES
import userReducer from "./user/userSlice";


const rootReducer = combineReducers({
    user: userReducer
});


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            serializableCheck: false
        })
    )
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;