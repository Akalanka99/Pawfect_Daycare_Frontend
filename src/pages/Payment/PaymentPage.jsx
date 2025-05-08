import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentPage = () => {
  const [orderID, setOrderID] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalCost, bookingDetails } = location.state || {};

  const createOrder = async () => {
    if (!bookingDetails) {
      setError("Booking details are missing.");
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:8080/api/paypal/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: totalCost }),
        }
      );
      const data = await response.json();
      console.log("Create Order Response:", data); // Debugging line
      if (data.id) {
        setOrderID(data.id);
        return data.id;
      } else {
        throw new Error("Order ID not returned.");
      }
    } catch (err) {
      console.error("Error creating order:", err);
      setError("Could not create order.");
    }
  };

  const onApprove = async (data) => {
    try {
      const approvedOrderID = data.orderID || orderID; // Use the orderID from data or state
      const response = await fetch(
        `http://localhost:8080/api/paypal/capture-payment/${approvedOrderID}`,
        {
          method: "POST",
        }
      );
      const result = await response.json();
      console.log("Payment capture response:", result);

      if (result.status === "COMPLETED") {
        setIsPaid(true);
        alert("Payment successful! 🎉");
        navigate("/bookinghistory");
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (err) {
      console.error("Error capturing payment:", err);
      setError("Payment could not be processed.");
    }
  };

  if (!bookingDetails) {
    return <p>Loading booking details...</p>;
  }

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ATgMKLV-WkANS2juK8nUIeBW941YrfDEfHHuuLUCuydzE7D8SNlisaNKkGwpoCsTMuUAVIsVJDetgXCP",
      }}
    >
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Booking Payment
          </h1>
          {!isPaid ? (
            <>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Booking Details
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <p className="text-gray-700">
                    <strong>Owner:</strong> {bookingDetails.ownerName}
                  </p>
                  <p className="text-gray-700">
                    <strong>Service:</strong> {bookingDetails.petCategory}
                  </p>
                  <p className="text-gray-700">
                    <strong>Total Cost:</strong> ${totalCost} USD
                  </p>
                </div>
              </div>
              {error && (
                <p className="text-red-500 text-center mb-4">{error}</p>
              )}
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Proceed to Payment
              </h2>
              <div className="flex justify-center">
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return fetch(
                      "http://localhost:8080/api/paypal/create-order",
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ amount: totalCost }),
                      }
                    )
                      .then((response) => response.json())
                      .then((data) => {
                        console.log("Create Order Response:", data);
                        if (data.id) {
                          setOrderID(data.id);
                          return data.id; // Return the order ID directly here
                        } else {
                          throw new Error("Order ID not returned.");
                        }
                      })
                      .catch((err) => {
                        console.error("Error creating order:", err);
                        setError("Could not create order.");
                      });
                  }}
                  onApprove={(data, actions) => {
                    return fetch(
                      `http://localhost:8080/api/paypal/capture-payment/${data.orderID}`,
                      {
                        method: "POST",
                      }
                    )
                      .then((response) => response.json())
                      .then((result) => {
                        console.log("Payment capture response:", result);
                        if (result.status === "COMPLETED") {
                          setIsPaid(true);
                          alert("Payment successful! 🎉");
                          navigate("/bookinghistory");
                        } else {
                          alert("Payment failed. Please try again.");
                        }
                      })
                      .catch((err) => {
                        console.error("Error capturing payment:", err);
                        setError("Payment could not be processed.");
                      });
                  }}
                  onError={(err) => {
                    console.error("Payment error:", err);
                    setError("Payment error: " + err.message);
                  }}
                />
              </div>
            </>
          ) : (
            <h2 className="text-2xl font-bold text-green-600 text-center">
              ✅ Payment Successful! Thank you for your booking.
            </h2>
          )}
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default PaymentPage;
