import { useState, useRef, useEffect } from "react";
import "./ChatWidget.scss";

const API_URL = "/api/chat";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Prince's portfolio assistant. Ask me anything about his projects or skills!",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = {
      role: "user",
      content: input,
    };

    const updatedMessages = [...messages, userMsg];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const historyForAPI = updatedMessages.slice(1, -1).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMsg.content,
          history: historyForAPI,
        }),
      });

      console.log("HTTP Status:", res.status);

      const text = await res.text();

      console.log("API Response:", text);

      if (!res.ok) {
        throw new Error(text);
      }

      const data = JSON.parse(text);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "Something went wrong. Please try again.",
        },
      ]);
    } catch (err) {
      console.error("Fetch Error:", err);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `❌ ${err.message}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>&gt;_ ask-about-prince</span>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.role}`}>
                {msg.content}
              </div>
            ))}

            {loading && (
              <div className="chat-bubble assistant typing">Typing...</div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              disabled={loading}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button onClick={sendMessage} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}

      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "×" : "💬"}
      </button>
    </div>
  );
};

export default ChatWidget;
