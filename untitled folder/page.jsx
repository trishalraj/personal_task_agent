"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const sendTask = async () => {
    const res = await fetch("/api/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });

    const data = await res.json();
    setResponse(data.status);
  };

  return (
    <main style={{ padding: 20 }}>
      <h2>Personal Task Agent</h2>

      <input
        placeholder="Remind me to submit assignment"
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <button onClick={sendTask}>Send</button>

      <p>{response}</p>
    </main>
  );
}
