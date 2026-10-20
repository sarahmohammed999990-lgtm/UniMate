UniMate AI

AI-Powered Student Learning Platform

A centralized educational web platform designed to support university students through digital study tools and AI-powered assistance.

---

Table of Contents

Part One: English Documentation

1. "Abstract" (#1-abstract)
2. "Introduction" (#2-introduction)
3. "Problem Statement" (#3-problem-statement)
4. "Project Objectives" (#4-project-objectives)
5. "Target Audience" (#5-target-audience)
6. "System Features" (#6-system-features)
7. "Technologies Used" (#7-technologies-used)
8. "System Architecture" (#8-system-architecture)
9. "AI API Implementation" (#9-ai-api-implementation)
10. "Deployment Environment" (#10-deployment-environment)
11. "Security Considerations" (#11-security-considerations)
12. "Testing" (#12-testing)
13. "Limitations" (#13-limitations)
14. "Future Improvements" (#14-future-improvements)
15. "Conclusion" (#15-conclusion)
16. "References" (#16-references)

الجزء الثاني: التوثيق باللغة العربية

1. الملخص
2. المقدمة
3. مشكلة المشروع
4. أهداف المشروع
5. الفئة المستهدفة
6. خصائص النظام
7. التقنيات المستخدمة
8. البنية المعمارية للنظام
9. تنفيذ واجهة الذكاء الاصطناعي
10. بيئة النشر والاستضافة
11. اعتبارات الأمان
12. الاختبار
13. حدود المشروع
14. التطويرات المستقبلية
15. الخاتمة
16. المراجع

---

Part One: English Documentation

1. Abstract

UniMate AI is an AI-powered educational web platform designed to help university students organize their academic activities, access learning resources, and receive assistance with study-related questions. The platform aims to provide a centralized digital environment that supports a more organized and accessible learning experience.

2. Introduction

Technology plays an important role in modern education. Students often need tools to manage their academic responsibilities, access educational materials, and receive support while studying.

UniMate AI brings study-support features and an AI assistant together in one web platform, aiming to simplify academic organization and improve access to learning assistance.

3. Problem Statement

University students may face difficulties organizing academic tasks, finding useful learning resources, and receiving timely assistance. Using separate tools for these activities can make studying less organized.

UniMate AI aims to address these challenges by providing a centralized platform for academic organization and AI-assisted learning support.

4. Project Objectives

The main objectives of UniMate AI are to:

- Help students organize their academic activities.
- Facilitate access to educational resources.
- Provide AI-powered assistance for study-related questions.
- Support the organization of notes and tasks.
- Encourage communication and collaboration among students.
- Provide a user-friendly digital learning environment.

5. Target Audience

UniMate AI is primarily designed for university students who want to organize their studies, access educational materials, and receive academic assistance through digital tools.

6. System Features

6.1 Home Dashboard

Provides an entry point to the platform and helps users navigate its available sections.

6.2 Educational Resources

Supports access to learning materials and educational resources in a digital environment.

6.3 Student Community

Aims to encourage communication, knowledge sharing, and collaboration among students.

6.4 Notes and Tasks

Helps students record important information and organize academic responsibilities, where these functions are available.

6.5 Saved Items

Is intended to help students keep useful content for later access, depending on the current implementation.

6.6 AI Assistant

Allows students to submit questions and receive AI-generated responses. The assistant communicates with Google's Gemini API through a backend endpoint.

AI-generated responses should be reviewed for accuracy before being used in academic work.

7. Technologies Used

- HTML: Structures the web pages and their content.
- CSS: Controls the visual design and layout.
- JavaScript: Implements interactive features and frontend communication.
- Node.js: Provides the runtime environment for the backend code.
- Google Gemini API: Provides AI capabilities for the assistant.
- Vercel: Hosts the deployed application and supported backend functions.
- GitHub: Stores and manages the source code and documentation.

8. System Architecture

UniMate AI uses a client-server architecture consisting of a frontend and a backend API.

The frontend provides the user interface, while the backend processes incoming requests and communicates with the Gemini API.

AI Request Workflow

1. The student submits a question.
2. The frontend sends a POST request to "/api/chat".
3. The backend validates the request.
4. The backend retrieves the API key from an environment variable.
5. The backend sends the request to the Gemini API.
6. The response is returned to the frontend.
7. The answer is displayed to the student.

9. AI API Implementation

The AI assistant uses the "@google/generative-ai" JavaScript package to communicate with Google's Gemini service.

The backend endpoint handles incoming requests, validates their content, manages errors, and returns responses in a format the frontend can process.

The API key is stored in an environment variable named "GEMINI_API_KEY" rather than being written directly into the frontend code.

10. Deployment Environment

UniMate AI is deployed using Vercel. The deployment environment hosts the frontend and supported backend API functions.

GitHub is used to manage the source code and track project changes.

The deployment requires the correct dependencies and environment variables for the AI assistant to function.

11. Security Considerations

The project stores the AI API key in an environment variable to reduce the risk of exposing it in the frontend.

The backend checks incoming requests before processing them. However, a public AI endpoint may still be subject to excessive usage or abuse.

Potential future security improvements include:

- Request rate limiting.
- Usage and error monitoring.
- Appropriate access controls.
- Regular dependency updates.
- Protection of API keys and sensitive credentials.

12. Testing

The platform was tested to verify access through its deployment URL and to check whether the AI assistant could receive a question and return a response.

Further testing is recommended for error handling, performance, security, and compatibility across devices and browsers.

13. Limitations

AI response quality depends on the selected model, the submitted question, and the availability of the external service.

The platform may also be affected by API usage limits and deployment configuration. AI-generated information may contain errors and should be verified when necessary.

Some features may require further development and testing.

14. Future Improvements

Potential improvements include:

- Enhancing AI response quality and error handling.
- Adding rate limiting and stronger security controls.
- Expanding educational resources.
- Improving mobile responsiveness and accessibility.
- Developing additional student collaboration features.
- Adding automated testing and performance monitoring.

15. Conclusion

UniMate AI is an educational web platform designed to support university students through digital study tools and AI-powered assistance.

By bringing academic support and study organization into one environment, the project aims to make learning more accessible and organized while providing a foundation for future development.

16. References

. Google Gemini API Documentation: https://ai.google.dev/gemini-api/docs
. Vercel Documentation: https://vercel.com/docs
. Node.js Documentation: https://nodejs.org/docs
. MDN Web Docs: https://developer.mozilla.org/
. GitHub Documentation: https://docs.github.com/

---

الجزء الثاني: التوثيق باللغة العربية

1. الملخص

UniMate AI هي منصة تعليمية عبر الويب مدعومة بالذكاء الاصطناعي، تهدف إلى مساعدة طلاب الجامعة على تنظيم أنشطتهم الأكاديمية، والوصول إلى المصادر التعليمية، والحصول على المساعدة في الأسئلة المتعلقة بالدراسة. وتسعى المنصة إلى توفير بيئة رقمية موحدة تجعل التعلم أكثر تنظيمًا وسهولة.

2. المقدمة

تلعب التكنولوجيا دورًا مهمًا في التعليم الحديث. ويحتاج الطلاب غالبًا إلى أدوات تساعدهم على إدارة مسؤولياتهم الأكاديمية، والوصول إلى المواد التعليمية، والحصول على الدعم أثناء الدراسة.

تجمع UniMate AI بين خصائص الدعم الدراسي والمساعد الذكي داخل منصة واحدة عبر الويب، بهدف تسهيل تنظيم الدراسة وتحسين الوصول إلى المساعدة التعليمية.

3. مشكلة المشروع

قد يواجه طلاب الجامعة صعوبات في تنظيم المهام الأكاديمية، والعثور على المصادر التعليمية المفيدة، والحصول على المساعدة في الوقت المناسب. كما أن استخدام أدوات منفصلة لهذه الأنشطة قد يجعل الدراسة أقل تنظيمًا.

تهدف UniMate AI إلى مواجهة هذه التحديات من خلال توفير منصة موحدة لتنظيم الأنشطة الأكاديمية ودعم التعلم باستخدام الذكاء الاصطناعي.

4. أهداف المشروع

تتمثل الأهداف الرئيسية لمنصة UniMate AI فيما يلي:

- مساعدة الطلاب على تنظيم أنشطتهم الأكاديمية.
- تسهيل الوصول إلى المصادر التعليمية.
- توفير المساعدة باستخدام الذكاء الاصطناعي للأسئلة المتعلقة بالدراسة.
- دعم تنظيم الملاحظات والمهام.
- تشجيع التواصل والتعاون بين الطلاب.
- توفير بيئة تعليمية رقمية سهلة الاستخدام.

5. الفئة المستهدفة

صُممت UniMate AI بشكل أساسي لطلاب الجامعة الذين يرغبون في تنظيم دراستهم، والوصول إلى المواد التعليمية، والحصول على المساعدة الأكاديمية من خلال الأدوات الرقمية.

6. خصائص النظام

6.1 الصفحة الرئيسية

توفر نقطة البداية لاستخدام المنصة، وتساعد المستخدمين على التنقل بين الأقسام المتاحة.

6.2 المصادر التعليمية

تدعم الوصول إلى المواد والمصادر التعليمية داخل بيئة رقمية.

6.3 المجتمع الطلابي

يهدف إلى تشجيع التواصل وتبادل المعرفة والتعاون بين الطلاب.

6.4 الملاحظات والمهام

يساعد الطلاب على تسجيل المعلومات المهمة وتنظيم المسؤوليات الأكاديمية، وفقًا للوظائف المتاحة.

6.5 العناصر المحفوظة

تهدف إلى مساعدة الطلاب على الاحتفاظ بالمحتوى المفيد للوصول إليه لاحقًا، حسب التنفيذ الحالي للمنصة.

6.6 المساعد الذكي

يتيح للطلاب إرسال الأسئلة والحصول على إجابات مُنشأة باستخدام الذكاء الاصطناعي. ويتواصل المساعد مع واجهة Gemini API التابعة لشركة Google من خلال نقطة اتصال خلفية.

ينبغي مراجعة الإجابات للتأكد من دقتها قبل استخدامها في الأعمال الأكاديمية.

7. التقنيات المستخدمة

- HTML: لبناء صفحات الويب وتنظيم محتواها.
- CSS: للتحكم في التصميم والمظهر البصري.
- JavaScript: لتنفيذ الخصائص التفاعلية والتواصل بين أجزاء المنصة.
- Node.js: لتشغيل كود JavaScript الخاص بالجزء الخلفي.
- Google Gemini API: لتوفير إمكانات الذكاء الاصطناعي للمساعد.
- Vercel: لاستضافة التطبيق ووظائف API الخلفية المدعومة.
- GitHub: لحفظ الكود المصدري وإدارة ملفات المشروع.

8. البنية المعمارية للنظام

تعتمد UniMate AI على بنية العميل والخادم، وتتكون من واجهة أمامية وواجهة API خلفية.

توفر الواجهة الأمامية واجهة المستخدم، بينما يعالج الجزء الخلفي الطلبات الواردة ويتواصل مع Gemini API عند الحاجة.

آلية عمل المساعد الذكي

1. يرسل الطالب سؤالًا إلى المساعد الذكي.
2. ترسل الواجهة الأمامية طلب POST إلى "/api/chat".
3. يتحقق الجزء الخلفي من صحة الطلب.
4. يسترجع مفتاح API من متغير بيئة.
5. يرسل الطلب إلى Gemini API.
6. يعيد الإجابة إلى الواجهة الأمامية.
7. تظهر الإجابة للطالب.

9. تنفيذ واجهة الذكاء الاصطناعي

يستخدم المساعد الذكي حزمة JavaScript المسماة "@google/generative-ai" للتواصل مع خدمة Gemini التابعة لشركة Google.

تتولى نقطة الاتصال الخلفية استقبال الطلبات والتحقق منها ومعالجة الأخطاء وإرجاع الإجابات بتنسيق تستطيع الواجهة الأمامية التعامل معه.

يُخزَّن مفتاح API في متغير بيئة باسم "GEMINI_API_KEY" بدلًا من كتابته مباشرةً داخل كود الواجهة الأمامية.

10. بيئة النشر والاستضافة

تم نشر UniMate AI باستخدام منصة Vercel، التي تستضيف الواجهة الأمامية ووظائف API الخلفية المدعومة.

وتُستخدم GitHub لإدارة الكود المصدري وتتبع التغييرات في المشروع.

يتطلب النشر ضبط الاعتماديات ومتغيرات البيئة بالشكل الصحيح حتى يعمل المساعد الذكي.

11. اعتبارات الأمان

يخزن المشروع مفتاح API في متغير بيئة لتقليل خطر كشفه داخل الواجهة الأمامية.

كما يتحقق الجزء الخلفي من الطلبات الواردة قبل معالجتها. ومع ذلك، قد تتعرض نقطة اتصال الذكاء الاصطناعي العامة للاستخدام المفرط أو إساءة الاستخدام.

تشمل التحسينات الأمنية المستقبلية المحتملة:

- تحديد معدل الطلبات.
- مراقبة الاستهلاك والأخطاء.
- تطبيق ضوابط مناسبة للوصول.
- تحديث الاعتماديات البرمجية بانتظام.
- حماية مفاتيح API وبيانات الاعتماد الحساسة.

12. الاختبار

تم اختبار المنصة للتحقق من إمكانية الوصول إليها عبر رابط النشر، والتأكد من قدرة المساعد الذكي على استقبال سؤال وإرجاع إجابة.

ويُنصح بإجراء اختبارات إضافية لمعالجة الأخطاء والأداء والأمان والتوافق مع الأجهزة والمتصفحات المختلفة.

13. حدود المشروع

تعتمد جودة إجابات الذكاء الاصطناعي على النموذج المستخدم، وطبيعة السؤال المرسل، ومدى توافر الخدمة الخارجية.

وقد تتأثر المنصة أيضًا بحدود استخدام API وإعدادات النشر. وقد تحتوي المعلومات الناتجة عن الذكاء الاصطناعي على أخطاء، لذلك ينبغي التحقق منها عند الحاجة.

وقد تتطلب بعض الخصائص مزيدًا من التطوير والاختبار.

14. التطويرات المستقبلية

قد تشمل التطويرات المستقبلية ما يلي:

- تحسين جودة إجابات المساعد الذكي ومعالجة الأخطاء.
- إضافة تحديد معدل الطلبات وضوابط أمان أقوى.
- توسيع المصادر التعليمية.
- تحسين توافق المنصة مع الهواتف المحمولة وإمكانية الوصول.
- تطوير خصائص إضافية للتعاون بين الطلاب.
- إضافة اختبارات آلية ومراقبة الأداء.

15. الخاتمة

UniMate AI هي منصة تعليمية عبر الويب تهدف إلى دعم طلاب الجامعة من خلال الأدوات الرقمية والمساعدة المدعومة بالذكاء الاصطناعي.

ومن خلال الجمع بين الدعم الأكاديمي وتنظيم الدراسة داخل بيئة واحدة، يسعى المشروع إلى جعل التعلم أكثر سهولة وتنظيمًا، مع توفير أساس للتطوير المستقبلي.

16. المراجع

. توثيقGoogle Gemini API: https://ai.google.dev/gemini-api/docs

. توثيق Node.js: https://nodejs.org/docs

. توثيق GitHub: https://docs.github.com/

. توثيق MDN Web Docs: https://developer.mozilla.org/

. توثيق GitHub: https://docs.github.com/

---

اسم المشروع:  UniMate AI

نوع المشروع: منصة تعليمية عبر الويب مدعومة بالذكاء الاصطناعي

منصة النشر: Vercel

خدمة الذكاء الاصطناعي: Google Gemini API
