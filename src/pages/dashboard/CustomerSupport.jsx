import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function CustomerSupport() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all"); // 'all', 'unread'

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const endpoint =
          filter === "unread"
            ? "http://34.121.231.195:8080/api/messages/unread"
            : "http://34.121.231.195:8080/api/messages/getmessages";

        const response = await axios.get(endpoint);
        setMessages(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching messages:", error);
        setError("Failed to fetch messages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [filter]);

  const markAsRead = async (messageId) => {
    try {
      await axios.put(`http://34.121.231.195:8080/api/messages/${messageId}/read`);
      setMessages(
        messages.map((msg) =>
          msg.id === messageId ? { ...msg, read: true } : msg
        )
      );
    } catch (error) {
      console.error("Error marking message as read:", error);
    }
  };

  if (loading)
    return <div className="text-center mt-10">Loading messages...</div>;
  if (error)
    return <div className="text-red-500 text-center mt-10">{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Customer Messages</h1>

      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            value="all"
            checked={filter === "all"}
            onChange={() => {
              setSelectedMessage(null);
              setFilter("all");
            }}
            className="mr-2"
          />
          All Messages
        </label>
        <label>
          <input
            type="radio"
            value="unread"
            checked={filter === "unread"}
            onChange={() => {
              setFilter("unread");
              setSelectedMessage(null); // Reset selected message when filtering
            }}
            className="mr-2"
          />
          Unread Messages
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Message List */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Inbox</h2>
          {messages.length === 0 ? (
            <p className="text-gray-500">No messages found.</p>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 mb-4 rounded-lg cursor-pointer ${
                  !message.read ? "bg-blue-100" : "bg-gray-100"
                }`}
                onClick={() => {
                  setSelectedMessage(message);
                  if (!message.read) markAsRead(message.id);
                }}
              >
                <div className="flex justify-between">
                  <h3 className="font-bold">{message.name}</h3>
                  <span className="text-sm text-gray-500">
                    {new Date(message.createdAt).toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-600 truncate">{message.messageText}</p>
              </div>
            ))
          )}
        </div>

        {/* Message Details */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Message Details</h2>
          {selectedMessage ? (
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold">Name:</label>
                <p>{selectedMessage.name}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold">Email:</label>
                <p>{selectedMessage.email}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold">
                  Message:
                </label>
                <p>{selectedMessage.messageText}</p>
              </div>
              <div>
                <label className="block text-gray-700 font-bold">
                  Sent At:
                </label>
                <p>{new Date(selectedMessage.createdAt).toLocaleString()}</p>
              </div>

              {/* Reply Form */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Reply to Customer
                </h3>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const replyMessage = e.target.replyMessage.value;
                    try {
                      await axios.post(
                        "http://34.121.231.195:8080/api/messages/reply",
                        {
                          email: selectedMessage.email,
                          message: replyMessage,
                        }
                      );
                      //alert("Reply sent successfully!");
                      toast.success("Reply email sent succesfully!");
                      e.target.reset();
                    } catch (error) {
                      console.error("Error sending reply:", error);
                      toast.error("Failed to send reply. Please try again.");
                      //alert("Failed to send reply. Please try again.");
                    }
                  }}
                >
                  <textarea
                    name="replyMessage"
                    rows="4"
                    className="w-full border rounded-lg p-2 mb-4"
                    placeholder="Type your reply here..."
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                  >
                    Send Reply
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Select a message to view details</p>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default CustomerSupport;
