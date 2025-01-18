import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSeatsSelected } from "./slice";
import "./style.scss";
export default function Seat({ seat }) {
  const dispatch = useDispatch();
  const [isChoosing, setIsChoosing] = useState(false);

  return (
    <button 
      onClick={() => {
        setIsChoosing(!isChoosing);
        dispatch(setSeatsSelected(seat));
      }}
      disabled={seat.daDat}
      className={`seat ${seat.daDat ? "seatSold" : ""}${
        isChoosing ? "seatChoosing" : ""
      } bg-blue-500 text-white items-center shadow-black` }
    >
      {seat.soGhe}
    </button>
  );
}
