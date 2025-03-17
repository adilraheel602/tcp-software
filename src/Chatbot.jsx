import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      {/* Chat Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        Chat
      </button>

      {/* Chat Popup Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 bg-white shadow-lg rounded-lg p-4 w-80">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-semibold">Select a Chat Option</h3>
            <button
              className="text-gray-500 hover:text-gray-800 text-xl"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Chat opens in a pop-up window. If your browser has a popup-blocker,
            allow popups for this site.
          </p>
          <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Chat with Sales
          </button>
          <button className="w-full mt-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Chat with Support
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
