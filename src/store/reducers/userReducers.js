import { createSlice } from "@reduxjs/toolkit";

const userInitialState = { userInfo: null };

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        setUserInfo(state, action) {
            state.userInfo = action.payload;
        },
        resetUserInfo(state) {
            state.userInfo = null;
        },
    },
});

const { actions: userActions, reducer: userReducer } = userSlice;

export { userActions, userReducer };
