require("dotenv").config();

const express = require("express");
const path = require("path");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

app.use(express.json({ limit: "1mb" }));

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.GEMINI_API_KEY;

app.use(express.static(__dirname));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    app: "UniMate",
    aiConfigured: Boolean(API_KEY),
  });
});

app.post("/api/chat", async (req, res) => {
  try {
    if (!API_KEY) {
      return res.status(500).json({
        error: "مفتاح Gemini غير موجود في إعدادات السيرفر.",
      });
    }

    const message = req.body?.message;

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "اكتبي سؤالك الأول.",
      });
    }

    if (message.length > 10000) {
      return res.status(400).json({
        error: "السؤال طويل جدًا. اختصريه وجربي تاني.",
      });
    }

    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction:
        "أنت UniMate AI، مساعد دراسي لطلاب جامعة طيبة التكنولوجية. اشرح المعلومات بطريقة واضحة وبسيطة، وساعد الطلاب على الفهم وحل المسائل خطوة بخطوة. أجب بلغة الطالب، ولا تخترع معلومات غير مؤكدة.",
    });

    const result = await model.generateContent(message);
    const answer = result.response.text();

    res.json({ answer });
  } catch (error) {
    console.error("UniMate AI error:", error.message);

    res.status(500).json({
      error: "حصلت مشكلة أثناء تجهيز الرد. جربي تاني بعد شوية.",
    });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`UniMate server is running on port ${PORT}`);
});