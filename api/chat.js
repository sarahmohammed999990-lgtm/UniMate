
const { GoogleGenAI } = require("@google/genai");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "طريقة الطلب غير مدعومة."
    });
  }

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "مفتاح Gemini غير مضبوط في إعدادات Vercel."
      });
    }

    const message = req.body?.message;

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "اكتبي سؤالك الأول."
      });
    }

    if (message.length > 10000) {
      return res.status(400).json({
        error: "السؤال طويل جدًا. اختصريه وجربي تاني."
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    let lastError;

    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const result = await ai.interactions.create({
          model: "gemini-3.8-flash",
          input: message,
          system_instruction:
            "أنت UniMate AI، مساعد دراسي لطلاب جامعة طيبة التكنولوجية. اشرح ببساطة ووضوح، وساعد الطلاب على الفهم وحل المسائل خطوة بخطوة. أجب بلغة الطالب، ولا تخترع معلومات غير مؤكدة."
        });

        const answer =
          result.output_text ||
          result.outputs?.map((item) => item.text || "").join("\n") ||
          "";

        if (!answer.trim()) {
          throw new Error("Gemini returned an empty response");
        }

        return res.status(200).json({ reply: answer });
      } catch (error) {
        lastError = error;

        const status = error.status || error.statusCode;

        if (status !== 503 && status !== 429 && status !== 500) {
          throw error;
        }

        if (attempt < 2) {
          await sleep(1000 * (attempt + 1));
        }
      }
    }

    throw lastError;
  } catch (error) {
    console.error("UniMate AI full error:", error);

    return res.status(500).json({
      error: "المساعد مشغول حاليًا. استني شوية وجربي تاني."
    });
  }
};
