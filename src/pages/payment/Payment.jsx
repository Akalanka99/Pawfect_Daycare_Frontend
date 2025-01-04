import React, { useState } from "react";

const PaymentPage = () => {
  const [totalPayment, setTotalPayment] = useState(12000);
  const [paymentMethod, setPaymentMethod] = useState("Credit/Debit Card");

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center">

      {/* Main Content */}
      <main className="w-full max-w-4xl bg-white shadow-md mt-8 rounded-lg p-8 text-black">
      <h1 className="text-3xl font-bold text-center mb-8">Profile</h1>
        <section>
          <h2 className="text-xl font-semibold mb-4">For Dog</h2>
          <div className="bg-blue-100 p-4 rounded-md">
            <p>Price per Day: <span className="font-bold">LKR 2500</span></p>
            <p>Price per Week: <span className="font-bold">LKR 15000</span></p>
            <p>Price per Month: <span className="font-bold">LKR 55000</span></p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">For Cat</h2>
          <div className="bg-blue-100 p-4 rounded-md">
            <p>Price per Day: <span className="font-bold">LKR 2000</span></p>
            <p>Price per Week: <span className="font-bold">LKR 12000</span></p>
            <p>Price per Month: <span className="font-bold">LKR 45000</span></p>
          </div>
        </section>

        <p className="mt-8 text-sm text-gray-600">
          * Prices may change depending on the level of care, size, and any additional services.
        </p>

        <hr className="my-8" />

        <div className="text-right">
          <p className="text-lg font-semibold">Total Payment Due: <span className="text-blue-600">LKR {totalPayment}</span></p>
        </div>

        <form className="mt-8">
          <label className="block font-medium mb-2">Payment Method:</label>
          <select
            className="w-full border rounded-md p-2 mb-4"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option>Credit/Debit Card</option>
            <option>PayPal</option>
            <option>Bank Transfer</option>
          </select>

          {paymentMethod === "Credit/Debit Card" && (
            <>
              <label className="block font-medium mb-2">Cardholder Name:</label>
              <input type="text" className="w-full border rounded-md p-2 mb-4" />

              <label className="block font-medium mb-2">Card Number:</label>
              <input type="text" className="w-full border rounded-md p-2 mb-4" />

              <label className="block font-medium mb-2">Expiration Date:</label>
              <input type="text" className="w-full border rounded-md p-2 mb-4" placeholder="MM/YY" />

              <label className="block font-medium mb-2">CVV:</label>
              <input type="text" className="w-full border rounded-md p-2 mb-4" />
            </>
          )}

          {paymentMethod === "Bank Transfer" && (
            <div>
              <label className="block font-medium mb-2">Bank Account Number:</label>
              <input type="text" className="w-full border rounded-md p-2 mb-4" />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
          >
            Pay Now
          </button>
        </form>

        <p className="mt-4 text-center text-green-600">Thank You! Your Payment Was Successful.</p>
      </main>

      {/* Footer */}
      <footer className="w-full bg-blue-900 text-white py-4 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p>© 2025 PAWFECT. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PaymentPage;
