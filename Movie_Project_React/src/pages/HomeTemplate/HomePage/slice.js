import { createSlice } from "@reduxjs/toolkit";
import data from "./danhSachGhe.json";
import { list } from "postcss";

const initialState = {
  listSeats: data,
  listSeatsSelected: [],
};
const findIndexSeat = (list, numberSeat) => {
  return list.findIndex((seat) => seat.soGhe === numberSeat);
};

const bookingTicketSlice = createSlice({
  name: "bookingTicketSlice",
  initialState,
  reducers: {
    setSeatsSelected: (state, action) => {
      console.log("🔥 ~ setSeat ~ action:", action);
      const {payload} = action;
      console.log(payload);
      
      const index = findIndexSeat(state.listSeatsSelected, payload.soGhe);
      const listSeatsSelectedClone = [...state.listSeatsSelected];
      console.log(index);
      
      if (index !== -1) {
        //remove seat
        listSeatsSelectedClone.splice(index, 1);
      } else {
        listSeatsSelectedClone.push(payload);
      }
      state.listSeatsSelected = listSeatsSelectedClone
    },
    
  },
});

export const { setSeatsSelected } = bookingTicketSlice.actions;
export default bookingTicketSlice.reducer;
