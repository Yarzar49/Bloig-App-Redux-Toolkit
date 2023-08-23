import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Thura Win",
  },
  {
    id: "1",
    name: "Ying Mo Hom",
  },
  {
    id: "2",
    name: "Yarzar Tin Shwe",
  },
 
];
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    
  },
});

export const selectedAllUsers = (state) => state.users;

export default userSlice.reducer;
