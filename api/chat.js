
const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "طريقة الطلب غير مدعومة."
    });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("UniMate AI: GEMINI_API_KEY is missing");

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

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
      systemInstruction:
        "أنت UniMate AI، مساعد دراسي لطلاب جامعة طيبة التكنولوجية. اشرح المعلومات ببساطة ووضوح، وساعد الطلاب على الفهم وحل المسائل خطوة بخطوة. أجب بلغة الطالب، ولا تخترع معلومات غير مؤكدة."
    });

    const result = await model.generateContent(message);
    const answer = result.response.text();

    return res.status(200).json({
      reply: answer
    });
  } catch (error) {
    console.error("UniMate AI full error:", error);

    return res.status(500).json({
      error: "حصلت مشكلة أثناء تجهيز الرد. راجعي سجل الأخطاء في Vercel."
    });
  }
};
