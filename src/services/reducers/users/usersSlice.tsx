import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Ken Phetmany" },
  { id: "1,", name: "Kevin Tran" },
  { id: "2", name: "James Nguyen" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
