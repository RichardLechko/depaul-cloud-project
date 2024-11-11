import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isSignedIn: boolean;
}

const initialState: UserState = {
  isSignedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn(state) {
      state.isSignedIn = true;
    },
    signOut(state) {
      state.isSignedIn = false;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export const selectIsSignedIn = (state: { user: UserState }) =>
  state.user.isSignedIn;

export default userSlice.reducer;
