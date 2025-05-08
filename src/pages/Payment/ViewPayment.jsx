import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ViewPayment = ({ bookingDetails }) => {
  if (!bookingDetails) {
    return <p>No booking details available.</p>;
  }

  const generateInvoice = () => {
    if (
      !bookingDetails.ownerName ||
      !bookingDetails.service ||
      !bookingDetails.amount
    ) {
      alert("Incomplete booking details. Cannot generate invoice.");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("PawFect Daycare Invoice", 14, 15);
    doc.setFontSize(12);
    doc.text(`Invoice Date: ${new Date().toLocaleDateString()}`, 14, 25);

    doc.autoTable({
      startY: 35,
      head: [["Field", "Details"]],
      body: [
        ["Owner", bookingDetails.ownerName],
        ["Service", bookingDetails.service],
        ["Amount", `$${bookingDetails.amount}`],
      ],
    });

    doc.setFontSize(10);
    doc.text(
      "Thank you for choosing PawFect Daycare!",
      14,
      doc.autoTable.previous.finalY + 10
    );
    doc.save(`Invoice_${bookingDetails.ownerName}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Pawfect Payment Details
        </h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Booking Summary
          </h2>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <p className="text-gray-700">
              <strong>Owner:</strong> {bookingDetails.ownerName}
            </p>
            <p className="text-gray-700">
              <strong>Service:</strong> {bookingDetails.service}
            </p>
            <p className="text-gray-700">
              <strong>Amount:</strong> ${bookingDetails.amount}
            </p>
          </div>
        </div>
        <button
          onClick={generateInvoice}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Download Invoice
        </button>
      </div>
    </div>
  );
};

export default ViewPayment;
