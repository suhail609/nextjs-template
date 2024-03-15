//REDUX-TOOLKIT
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";


interface userState {
    userData: any;
    listData: any;
}

const initialState: userState = {
    userData: null,
    listData: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state: userState, action: PayloadAction<userState>) => {
            return { ...state, userData: action.payload }
        },
        setList: (state: userState, action: PayloadAction<userState>) => {
            return { ...state, listData: action.payload }
        }
    }
});


export const { setUser, setList } = userSlice.actions;
export const selectUserData = (state: RootState) => state.user.userData;
export const selectUserList = (state: RootState) => state.user.listData;
export default userSlice.reducer;