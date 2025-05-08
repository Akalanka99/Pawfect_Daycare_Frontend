import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const PaymentPage = () => {
    const [orderID, setOrderID] = useState(null);
    const [isPaid, setIsPaid] = useState(false);
    const [error, setError] = useState(null);

    // Define booking details
    const bookingDetails = {
        service: "Pet Daycare - Full Day",
        date: "2025-04-10",
        amount: "20.00", // USD
    };

    // Create PayPal Order
    const createOrder = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/paypal/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: bookingDetails.amount }),
            });
            const data = await response.json();
            console.log("Order created:", data); // Add this to debug
            setOrderID(data.id); // Save Order ID for further processing
            return data.id; // Return the orderID here
        } catch (err) {
            console.error("Error creating order:", err);
            setError("Could not create order.");
        }
    };

    // Capture Payment after approval
    const onApprove = async (data) => {
        try {
            const response = await fetch(`http://localhost:8080/api/paypal/capture-payment/${data.orderID}`, {
                method: "POST",
            });
            const result = await response.json();
            
            if (result.status === "COMPLETED") {
                setIsPaid(true);
                alert("Payment successful! 🎉");
            } else {
                alert("Payment failed.");
            }
        } catch (err) {
            console.error("Error capturing payment:", err);
            setError("Payment could not be processed.");
        }
    };

    return (
        <PayPalScriptProvider options={{ "client-id": "ATgMKLV-WkANS2juK8nUIeBW941YrfDEfHHuuLUCuydzE7D8SNlisaNKkGwpoCsTMuUAVIsVJDetgXCP" }}>
            <div className="payment-container">
            <style>
        {`
          .payment-container {
            text-align: center;
            padding: 20px;
          }
          .paypal-container {
            text-align: center;
            margin-top: 20px;
          }
          .error {
            color: red;
            font-weight: bold;
          }
          .checkout-container {
            text-align: center;
            padding: 20px;
          }
        `}
      </style>
                <h1>Booking Payment</h1>

                {!isPaid ? (
                    <>
                        <h2>Booking Details</h2>
                        <p><strong>Service:</strong> {bookingDetails.service}</p>
                        <p><strong>Date:</strong> {bookingDetails.date}</p>
                        <p><strong>Amount:</strong> ${bookingDetails.amount} USD</p>

                        {error && <p className="error">{error}</p>}

                        <h2>Proceed to Payment</h2>
                        <PayPalButtons 
                            createOrder={createOrder}
                            onApprove={onApprove}
                            onError={(err) => setError("Payment error: " + err.message)}
                        />
                    </>
                ) : (
                    <h2>✅ Payment Successful! Thank you for your booking.</h2>
                )}
            </div>
        </PayPalScriptProvider>
    );
};

export default PaymentPage;
