
const { GoogleGenAI } = require("@google/genai");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "طريقة الطلب غير مدعومة."
    });
  }

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

    let result;
    let lastError;

    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        result = await ai.interactions.create({
          model: "gemini-3.5-flash-lite",
          input: message,
          system_instruction:
            "أنت UniMate AI، مساعد دراسي لطلاب جامعة طيبة التكنولوجية. اشرح ببساطة ووضوح، وساعد الطلاب على الفهم وحل المسائل خطوة بخطوة. أجب بلغة الطالب، ولا تخترع معلومات غير مؤكدة."
        });

        break;
      } catch (error) {
        lastError = error;

        const status = error.status || error.statusCode;

        if (![429, 500, 503].includes(status) || attempt === 2) {
          throw error;
        }

        // انتظار قصير قبل المحاولة التالية
        await new Promise(resolve =>
          setTimeout(resolve, 1000 * (attempt + 1))
        );
      }
    }

    if (!result) {
      throw lastError || new Error("لم يصل رد من Gemini.");
    }

    const answer = result.output_text || "";

    if (!answer.trim()) {
      throw new Error("Gemini returned an empty response.");
    }

    return res.status(200).json({
      reply: answer
    });
  } catch (error) {
    console.error("UniMate AI full error:", error);

    const status = error.status || error.statusCode;

    if (status === 503 || status === 429) {
      return res.status(503).json({
        error: "المساعد مشغول حاليًا بسبب الضغط. استني شوية وجربي تاني."
      });
    }

    return res.status(500).json({
      error: "حصلت مشكلة أثناء تجهيز الرد. راجعي سجل الأخطاء في Vercel."
    });
  }
};
