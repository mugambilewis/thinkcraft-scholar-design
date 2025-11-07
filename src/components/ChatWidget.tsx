import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div>
      {/* Floating Button */}
      <div
  onClick={() => setIsOpen(!isOpen)}
  className="fixed bottom-6 right-6 z-[9999] bg-[#00B3A4] hover:bg-[#00a092] text-white p-4 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-105"
>

        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </div>

      {/* Chat Box */}
      {isOpen && (
  <div className="fixed bottom-20 right-6 z-[9999] w-80 bg-[#092C5D] text-white rounded-2xl shadow-2xl overflow-hidden">

          <div className="p-4 border-b border-[#00B3A4] flex justify-between items-center">
            <h2 className="font-semibold">Chat with us</h2>
            <Button onClick={() => setIsOpen(false)} className="text-[#00B3A4]">
              <X size={18} />
            </Button>
          </div>
          <div className="p-4 h-64 overflow-y-auto text-sm">
            <p className="text-gray-300">👋 Hi there! How can I help you today?</p>
          </div>
          <div className="p-3 border-t border-[#00B3A4] flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-sm rounded-full bg-white/10 text-white placeholder-gray-300 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              className="bg-[#00B3A4] px-3 py-2 rounded-full text-sm hover:bg-[#00a092]"
              onClick={() => setMessage("")}
            >
              Send
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
