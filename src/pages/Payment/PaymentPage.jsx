import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate, useLocation } from "react-router-dom";
import jsPDF from "jspdf";

const PaymentPage = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { totalCost, bookingDetails, numberOfCages } = location.state || {};

  const onApprove = async () => {
    try {
      setIsPaid(true);
      alert("Payment successful! 🎉");
    } catch (err) {
      console.error("Error capturing payment:", err);
      setError("Payment could not be processed.");
    }
  };

  const downloadInvoice = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Booking Invoice", 20, 20);
    doc.setFontSize(12);
    doc.text(`Start Date: ${bookingDetails.startDate || "N/A"}`, 20, 40);
    doc.text(`End Date: ${bookingDetails.endDate || "N/A"}`, 20, 50);
    doc.text(`Number of Cages: ${numberOfCages || 0}`, 20, 60);
    doc.text(`Total Cost: $${totalCost || 0} USD`, 20, 70);
    doc.save("invoice.pdf");
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
            Booking Payment Invoice
          </h1>
          {!isPaid ? (
            <>
              {/* Booking Invoice Section */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Booking Details
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <p className="text-gray-700">
                    <strong>Start Date:</strong>{" "}
                    {bookingDetails.startDate || "N/A"}
                  </p>
                  <p className="text-gray-700">
                    <strong>End Date:</strong> {bookingDetails.endDate || "N/A"}
                  </p>
                  <p className="text-gray-700">
                    <strong>Number of Cages:</strong> {numberOfCages || 0}
                  </p>
                  <p className="text-gray-700">
                    <strong>Total Cost:</strong> ${totalCost || 0} USD
                  </p>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <p className="text-red-500 text-center mb-4">{error}</p>
              )}

              {/* PayPal Buttons Section */}
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Proceed to Payment
              </h2>
              <div className="flex justify-center">
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: totalCost?.toString() || "0",
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then(() => {
                      onApprove();
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
            <>
              <h2 className="text-2xl font-bold text-green-600 text-center mb-6">
                ✅ Payment Successful! Thank you for your booking.
              </h2>
              <button
                onClick={downloadInvoice}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Download Invoice as PDF
              </button>
            </>
          )}
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default PaymentPage;
