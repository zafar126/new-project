import React, { useState } from "react";
import Title from "../component/Title";
import { assets, dashboardDummyData } from "../assets/assets";

const Dashboard = () => {
  const [dashboardData] = useState(dashboardDummyData);

  return (
    <div className="p-4">
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operation"
      />

      {/* Summary Cards */}
      <div className="flex flex-wrap gap-4 my-8">
        {/* Total Bookings */}
        <div className="flex items-center bg-primary/5 border border-primary/10 rounded-lg p-4 flex-1 min-w-[250px]">
          <img
            src={assets.totalBookingIcon}
            alt="Total Bookings"
            className="hidden sm:block h-10"
          />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Bookings</p>
            <p className="text-neutral-400">{dashboardData.totalBookings}</p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="flex items-center bg-primary/5 border border-primary/10 rounded-lg p-4 flex-1 min-w-[250px]">
          <img
            src={assets.totalRevenueIcon}
            alt="Total Revenue"
            className="hidden sm:block h-10"
          />
          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">Total Revenue</p>
            <p className="text-neutral-400">${dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>

      {/* Recent Booking */}
      <h2 className="text-xl text-blue-950/70 font-medium mb-5">
        Recent Booking
      </h2>

      <div className="w-full max-w-5xl border border-gray-300 rounded-lg max-h-80 overflow-y-auto overflow-x-auto">
        <table className="w-full text-left min-w-[600px]">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">
                User Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium hidden sm:table-cell">
                Room Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Total Amount
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Payment Status
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="py-3 px-4 text-gray-700">
                  {item.user.username}
                </td>
                <td className="py-3 px-4 text-gray-700 hidden sm:table-cell">
                  {item.room.roomType}
                </td>
                <td className="py-3 px-4 text-gray-700 text-center">
                  ${item.totalPrice}
                </td>
                <td className="py-3 px-4 text-center">
                  <button
                    className={`py-1 px-3 text-xs rounded-full ${
                      item.isPaid
                        ? "bg-green-500 text-white"
                        : "bg-amber-200 text-yellow-600"
                    }`}
                  >
                    {item.isPaid ? "Completed" : "Pending"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
