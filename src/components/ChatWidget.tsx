import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "👋 Hi there! How can I help you today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = { role: "user", content: message };
    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      const systemPrompt = `You are a helpful AI assistant for ThinkCraft Scholar & Design Solutions.

BUSINESS INFORMATION:
- Company: ThinkCraft Scholar & Design Solutions
- Main Services: Academic projects, CAD models, websites, UI designs, technical documentation
- Goal: Help students and professionals transform concepts into complete, high-quality work
- Tagline: Empowering Students. Supporting Professionals.

YOUR ROLE:
- Be friendly, professional, and helpful
- Answer questions about our services
- Guide visitors toward getting academic help or exploring professional services
- Keep responses concise (2-3 sentences unless more detail is needed)

SERVICES WE OFFER:
- CAD & Engineering Design: Precision 2D drawings and 3D models for students and professionals
- Website & UI Design: Clean, responsive, user-centered websites and portfolios
- Academic & Project Assistance: From proposals to full reports with clarity and structure
- Assignment Help & Tutoring: Personalized academic support for international students
- Documentation & Formatting: Professional formatting in APA, IEEE, MLA, Chicago, and more

ABOUT US:
ThinkCraft Scholar & Design Solutions is a multidisciplinary team passionate about design, learning, and innovation. We combine academic insight, technical skill, and creative design to craft meaningful solutions for students, researchers, and professionals.

CONTACT:
WhatsApp: +1 (415) 418-5227
Ready to get started? Contact us and we'll guide you through every step!

Remember: Always be helpful and encourage visitors to reach out for assistance!`;

      const conversationHistory = messages.slice(1).map(msg => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }]
      }));

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAcgB9Fh61QmuwzdFO4Ug2GAFKUUuSOrhg`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: systemPrompt }]
            },
            contents: [
              ...conversationHistory,
              {
                role: "user",
                parts: [{ text: userMessage.content }]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 800,
              topP: 0.95,
            }
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error Details:", errorData);
        throw new Error(`API error: ${response.status} - ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      console.log("API Response:", data);
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        const assistantMessage = {
          role: "assistant",
          content: data.candidates[0].content.parts[0].text
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Sorry, I'm having trouble connecting right now. Please try again or contact us directly for assistance. 📧"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div>
      {/* Floating Button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] bg-gradient-to-br from-[#00B3A4] to-[#00a092] hover:shadow-2xl text-white p-4 rounded-full shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[9999] w-96 bg-gradient-to-b from-[#092C5D] to-[#061e3f] text-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-[#00B3A4]/30">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#00B3A4] to-[#00d4c3] flex justify-between items-center">
            <div>
              <h2 className="font-bold text-lg">ThinkCraft Specialist</h2>
              <p className="text-xs text-white/80">Got a question? We're online and ready to help ✨</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 h-96 overflow-y-auto text-sm space-y-3 bg-[#092C5D]/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${
                  msg.role === "assistant"
                    ? "text-gray-100 bg-white/10 backdrop-blur-sm rounded-2xl rounded-tl-sm p-3 border border-white/10"
                    : "text-white bg-gradient-to-br from-[#00B3A4] to-[#00a092] rounded-2xl rounded-tr-sm p-3 ml-auto w-fit max-w-[85%] shadow-md"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="text-gray-300 text-xs bg-white/5 rounded-2xl rounded-tl-sm p-3 w-fit backdrop-blur-sm border border-white/10">
                <span className="inline-flex gap-1">
                  <span className="animate-bounce">●</span>
                  <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>●</span>
                  <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>●</span>
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-[#061e3f] border-t border-[#00B3A4]/30 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2.5 text-sm rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B3A4] border border-white/10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={isLoading}
            />
            <button
              className="bg-gradient-to-br from-[#00B3A4] to-[#00a092] p-2.5 rounded-full text-sm hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              onClick={sendMessage}
              disabled={isLoading || !message.trim()}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;