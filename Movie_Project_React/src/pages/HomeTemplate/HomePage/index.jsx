// import { data } from "react-router-dom";
import Seat from "./Seat";
import { useSelector } from "react-redux";
// import { list } from "postcss";
import "./style.scss";

export default function HomePage() {
  const props = useSelector((state) => state.bookingTicketReducer);
  const { listSeats, listSeatsSelected } = props;

  const renderRowIndex = () => {
    const data = listSeats[0];
    return (
      <div className="space-x-16">
        <span></span>
        {data.danhSachGhe.map((item) => {
          return (
            <span key={item.soGhe} className="text-center text-red-600">
              {item.soGhe}
            </span>
          );
        })}
      </div>
    );
  };

  const renderListSeat = () => {
    return listSeats.map((row, index) => {
      if (index === 0) return;
      return (
        <div key={row.hang} className="space-x-9 space-y-9">
          <span className="text-center text-yellow-300 ">{row.hang}</span>
          {row.danhSachGhe.map((seat) => {
            return <Seat key={seat.soGhe} seat={seat} />;
          })}
        </div>
      );
    });
  };

  const totalPrice = () => {
    return listSeatsSelected.reduce((total, seat) => (total += seat.gia), 0);
  };

  return (
    <div className="container mx-auto ">
      <h1 className="text-center mb-8 text-4xl font-bold text-yellow-400 mt-8">
        Booking Seats Online
      </h1>
      <div className="flex">
        <div className="w-4/4 items-center">
          {/* Screen */}
          <div className="bg-orange-500 text-center py-1 rounded-t-lg text-white font-bold">
            Màn hình
          </div>
          {/* Render số thứ tự ghế */}
          {renderRowIndex()}

          {renderListSeat()}
        </div>
        <div className="w-1/4">
          <h1 className="text-center py-1 rounded-t-lg font-bold">
            Danh Sách Ghế Đang Chọn
          </h1>
          {/* Hiển thị danh sách ghế đã chọn */}
          <div className="relative overflow-x-auto">
            <table className="text-center w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
              {/* Thead chỉ hiển thị một lần */}
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Ghế
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Giá
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Render các ghế đã chọn */}
                {listSeatsSelected.map((seat) => (
                  <tr
                    key={seat.soGhe}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {seat.soGhe}
                    </th>
                    <td className="px-6 py-4">{seat.gia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Hiển thị tổng tiền */}
          <div className="text-center mt-4 font-bold text-lg">
            Total: {totalPrice()} VND
          </div>
        </div>
      </div>
    </div>
  );
}
