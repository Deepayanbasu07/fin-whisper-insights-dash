import { MessageSquare, User, Bot } from "lucide-react";
import React, { useRef, useState } from "react";
import { useTranscript } from "../TranscriptProvider";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function ChatBotCard() {
  const { pdfs, activeIndex } = useTranscript();
  const transcriptText = pdfs[activeIndex]?.text || "";
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keep chat always scrolled to bottom
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Clear chat when transcript changes
  React.useEffect(() => {
    setMessages([]);
    setInput("");
  }, [activeIndex]);

  async function sendQuestion() {
    if (!input.trim() || !transcriptText) return;
    setMessages((msgs) => [...msgs, { sender: "user", text: input }]);
    setLoading(true);

    try {
      // TODO: Replace with real backend call to /chat/
      // Simulate a delay with a fake "AI" answer
      const resp = await new Promise<{ answer: string }>(res =>
        setTimeout(() => res({ answer: "Simulated AI answer for: " + input }), 1500)
      );
      setMessages((msgs) => [...msgs, { sender: "bot", text: resp.answer }]);
    } catch (err) {
      setMessages((msgs) => [...msgs, { sender: "bot", text: "Sorry, there was an error with the AI analyst." }]);
    } finally {
      setLoading(false);
      setInput("");
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await sendQuestion();
  }

  return (
    <div className="rounded-2xl shadow-2xl bg-[rgba(32,26,53,0.65)] backdrop-blur-lg border border-[rgba(152,136,255,0.06)] p-7 min-h-[410px] glassmorph-card flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <MessageSquare className="w-6 h-6 text-fuchsia-300" />
        <h2 className="text-xl font-semibold text-white">AI Financial Q&amp;A Chatbot</h2>
      </div>
      <div className="flex-1 flex flex-col">
        {!transcriptText ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-2">
            <p className="text-fuchsia-100/70 text-base italic mb-2">Upload a transcript PDF and preview it before chatting with the AI analyst!</p>
          </div>
        ) : (
          <>
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto rounded-xl bg-[rgba(38,32,56,0.55)] border border-[rgba(156,163,175,0.08)] text-sm text-fuchsia-100/90 shadow-inner mb-3 px-2 py-1"
              style={{ minHeight: 120, maxHeight: 210 }}
            >
              {messages.length === 0 ? (
                <div className="text-fuchsia-100/70 italic flex items-center gap-2 h-full">
                  <Bot className="w-5 h-5 text-fuchsia-300" />
                  Ask about financial performance, sentiment, management guidance, and more...
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-2 rounded-xl shadow ${
                          msg.sender === "user"
                            ? "bg-gradient-to-r from-fuchsia-600/60 to-indigo-600/80 text-white ml-auto"
                            : "bg-[rgba(92,63,133,0.41)] text-fuchsia-100"
                        } flex items-center gap-2`}
                      >
                        {msg.sender === "user" ? (
                          <User className="w-4 h-4 text-indigo-200" />
                        ) : (
                          <Bot className="w-4 h-4 text-fuchsia-300" />
                        )}
                        <span>{msg.text}</span>
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="px-4 py-2 rounded-xl shadow bg-[rgba(92,63,133,0.28)] text-fuchsia-100 flex items-center gap-2">
                        <Bot className="w-4 h-4 text-fuchsia-300 animate-pulse" />
                        <span className="italic animate-pulse">AI analyst is thinking&hellip;</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-end gap-2">
              <Textarea
                className="resize-none flex-1 min-h-[44px] max-h-28 text-white bg-[rgba(40,30,60,0.78)] border-fuchsia-700 focus-visible:ring-fuchsia-400/80"
                placeholder="Ask a question about the transcript..."
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={loading}
                rows={2}
                style={{ fontSize: 15 }}
                onKeyDown={e => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendQuestion();
                  }
                }}
              />
              <Button
                type="submit"
                disabled={loading || !input.trim()}
                className="bg-gradient-to-r from-fuchsia-600/90 to-indigo-600/80 text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition min-w-20"
              >
                {loading ? "Sending..." : "Send"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
