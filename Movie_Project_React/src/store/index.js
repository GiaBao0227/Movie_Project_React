import { configureStore } from "@reduxjs/toolkit";
import bookingTicketReducer from "./../pages/HomeTemplate/HomePage/slice";

export const store = configureStore({
  reducer: {
    bookingTicketReducer,
  },
});
