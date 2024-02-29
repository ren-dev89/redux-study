import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchUsersSuccess, fetchUsersFailure } from "./slice";

import axios from "axios";
// API USERS: https://jsonplaceholder.typicode.com/users/

function* fetchUsers() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users/"
    );
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export default all([takeLatest("user/fetchUsers", fetchUsers)]);
