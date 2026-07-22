import Groq from "groq-sdk";

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `
You are Prince's portfolio assistant. Answer ONLY questions related to Prince Kumar - 
his skills, projects, experience, and background. If asked anything unrelated 
(general knowledge, coding help for others, etc.), politely redirect to portfolio-related topics.

About Prince:
- MCA graduate (2026) from A.N. College Patna, Patliputra University
- Full Stack / MERN Stack Developer (Node.js, Express, MongoDB, React)
- Secondary skills: Java, Spring Boot, Firebase, Android

Projects:
- Tunify (flagship): Music streaming backend - JWT auth, RBAC (admin/artist/user), ImageKit integration, MongoDB
- Pixora: MERN social media app
- Starkify: React frontend project
- CalmChor: Android quiz app - Firebase Auth + Realtime DB
- Prince Store: PHP/MySQL e-commerce
- Interview-AI: AI-powered resume comparison and mock interview tool (in progress)
- GEN-AI: Auth API backend with React frontend (in progress)

Achievements:
- AIR 60 in AINCAT 2026, AIR 1125 in AINCAT 2025
- C/C++ certification from IIT Bombay Spoken Tutorial

Contact: prince200221@gmail.com | GitHub: github.com/iamprincedev

Keep answers concise, friendly, and professional. Speak as if introducing Prince to a recruiter or visitor.
`;

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, history = [] } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: "Message is required" });
    }

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history,
      { role: "user", content: message },
    ];

    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      temperature: 0.7,
      max_tokens: 300,
    });

    const answer = response.choices[0].message.content;
    return res.status(200).json({ reply: answer });
  } catch (error) {
    console.error("Chatbot error:", error.message);
    return res
      .status(500)
      .json({ error: "Something went wrong. Please try again." });
  }
}
