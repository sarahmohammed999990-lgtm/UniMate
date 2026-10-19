
const { GoogleGenAI } = require("@google/genai");

module.exports = async (req, res) => {
  // السماح بطلبات POST فقط
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "طريقة الطلب غير مدعومة."
    });
  }

  try {
    // قراءة مفتاح Gemini من إعدادات Vercel
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "مفتاح Gemini غير مضبوط في إعدادات Vercel."
      });
    }

    // التحقق من السؤال
    const message = req.body?.message;

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "اكتبي سؤالك الأول."
      });
    }

    if (message.length > 10000) {
      return res.status(400).json({
        error: "السؤال طويل جدًا. اختصريه وجربي مرة أخرى."
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    // يمكن تغيير الموديل من إعدادات Vercel
    const model =
      process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";

    // إيقاف انتظار الطلب بعد 25 ثانية
    let timeoutId;

    try {
      const result = await Promise.race([
        ai.interactions.create({
          model,
          input: message.trim(),
          system_instruction:
            "أنت UniMate AI، مساعد دراسي لطلاب جامعة طيبة التكنولوجية. " +
            "أجب باللغة العربية الواضحة والبسيطة ما لم يطلب الطالب لغة أخرى. " +
            "اشرح المفاهيم خطوة بخطوة، وساعد الطالب على الفهم. " +
            "لا تخترع معلومات غير مؤكدة، وإذا لم تعرف الإجابة فقل ذلك بوضوح."
        }),

        new Promise((_, reject) => {
          timeoutId = setTimeout(() => {
            reject(new Error("AI_REQUEST_TIMEOUT"));
          }, 25000);
        })
      ]);

      const answer = result?.output_text;

      if (typeof answer !== "string" || !answer.trim()) {
        console.error("Gemini returned an empty response.");

        return res.status(502).json({
          error: "وصل رد فارغ من المساعد. جربي مرة أخرى."
        });
      }

      return res.status(200).json({
        reply: answer.trim()
      });

    } finally {
      clearTimeout(timeoutId);
    }

  } catch (error) {
    console.error("UniMate AI error:", error);

    if (error.message === "AI_REQUEST_TIMEOUT") {
      return res.status(504).json({
        error:
          "المساعد اتأخر في الرد. جربي مرة أخرى بعد قليل."
      });
    }

    const status = error.status || error.statusCode;

    if (status === 429) {
      return res.status(429).json({
        error:
          "الحصة المتاحة للمساعد انتهت مؤقتًا. " +
          "انتظري تجديد الحصة أو استخدمي موديلًا متاحًا لحسابك."
      });
    }

    if (status === 503 || status === 500) {
      return res.status(503).json({
        error:
          "خدمة الذكاء الاصطناعي مشغولة حاليًا. " +
          "جربي مرة أخرى لاحقًا."
      });
    }

    if (status === 400 || status === 404) {
      return res.status(502).json({
        error:
          "تعذر استخدام موديل الذكاء الاصطناعي المحدد. " +
          "راجعي اسم الموديل وإمكانية استخدامه في حساب Google AI."
      });
    }

    return res.status(500).json({
      error:
        "حصلت مشكلة أثناء تجهيز الرد. راجعي Runtime Logs في Vercel."
    });
  }
};
