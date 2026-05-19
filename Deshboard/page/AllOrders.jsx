import React from "react";

export default function AllOrderList() {
  return (
    <div className="flex bg-gray-100 min-h-screen">

    

      {/* Main */}
      <div className="flex-1 p-6">

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">

          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Total Sales</p>
            <h2 className="text-2xl font-bold">$189,374</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Total Transaction</p>
            <h2 className="text-2xl font-bold">4,138</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Order Disputes</p>
            <h2 className="text-2xl font-bold">76</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Order Refund</p>
            <h2 className="text-2xl font-bold">$2,495</h2>
          </div>

        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow p-4">

          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Product Transactions</h2>

            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded">Filter</button>
              <button className="px-3 py-1 border rounded">Customize</button>
              <button className="px-3 py-1 border rounded">Export</button>
            </div>
          </div>

          {/* Table */}
          <table className="w-full text-sm">

            <thead className="text-left bg-gray-100">
              <tr>
                <th className="p-3">Order ID</th>
                <th>Product</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-t">
                <td className="p-3">#12345</td>
                <td>iPhone 15</td>
                <td>13 Feb, 2026</td>
                <td>Rahim</td>
                <td>COD</td>
                <td>
                  <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded">
                    Pending
                  </span>
                </td>
                <td>$999</td>
              </tr>

              <tr className="border-t">
                <td className="p-3">#12346</td>
                <td>MacBook</td>
                <td>12 Feb, 2026</td>
                <td>Karim</td>
                <td>Card</td>
                <td>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                    Paid
                  </span>
                </td>
                <td>$1999</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}