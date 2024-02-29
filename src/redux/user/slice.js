import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  users: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          address: null,
        },
      };
    },

    logoutUser: state => {
      return { ...state, user: null };
    },

    addAddress: (state, action) => {
      if (!state.user || !action.payload.location || !action.payload.number) {
        return { ...state };
      }

      return {
        ...state,
        user: {
          ...state.user,
          address: {
            location: action.payload.location,
            number: action.payload.number,
          },
        },
      };
    },

    removeAddress: state => {
      if (!state.user) {
        return { ...state };
      }

      return {
        ...state,
        user: {
          ...state.user,
          address: null,
        },
      };
    },

    fetchUsers: state => {
      state.loading = true;
    },

    fetchUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },

    fetchUsersFailure: (state, action) => {
      console.error(action.payload);
      state.loading = false;
    },
  },
});

export const {
  createUser,
  logoutUser,
  addAddress,
  removeAddress,
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure
} = userSlice.actions;

export default userSlice.reducer;
