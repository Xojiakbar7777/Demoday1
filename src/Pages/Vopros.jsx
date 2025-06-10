import React, { useState, useEffect } from "react";
import { ChevronDown, ThumbsUp, Search } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    category: "Доставка",
    question: "Как быстро Uzbekistan24 доставляет грузы?",
    answer: "Среднее время доставки составляет 2–5 рабочих дней в зависимости от направления и типа отправки."
  },
  {
    category: "Отслеживание",
    question: "Можно ли отслеживать мой груз онлайн?",
    answer: "Да, мы предоставляем полную систему онлайн-отслеживания через личный кабинет или по номеру накладной."
  },
  {
    category: "Грузы",
    question: "Какие типы грузов вы перевозите?",
    answer: "Мы работаем с документами, посылками, паллетами и крупногабаритными грузами — по всему Узбекистану и за его пределами."
  },
  {
    category: "Международная доставка",
    question: "Есть ли у вас международная доставка?",
    answer: "Да, Uzbekistan24 осуществляет международные перевозки в страны СНГ, Европу и Китай."
  },
  {
    category: "Поддержка",
    question: "Как связаться с поддержкой?",
    answer: "Вы можете написать нам на support@uzbekistan24.uz или позвонить по номеру +998 (71) 200-24-24."
  }
];

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const filteredFaqs = faqData.filter(
    (faq) =>
      (selectedCategory === "Все" || faq.category === selectedCategory) &&
      (faq.question.toLowerCase().includes(search.toLowerCase()) ||
        faq.answer.toLowerCase().includes(search.toLowerCase()))
  );

  const categories = ["Все", ...new Set(faqData.map((faq) => faq.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white px-4 md:px-16 lg:px-32 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-10" data-aos="fade-down">
          Вопросы и ответы
        </h1>

        <div className="text-center mb-10 text-gray-600 text-lg max-w-3xl mx-auto" data-aos="fade-up">
          Найдите нужный вам ответ или задайте свой вопрос службе поддержки Uzbekistan24.
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${selectedCategory === cat ? "bg-blue-600 text-white" : "bg-white border-gray-300 text-gray-700"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-8 max-w-md mx-auto" data-aos="fade-up">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Поиск по вопросам..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="space-y-6" data-aos="fade-up">
          {filteredFaqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6">
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${openFAQ === i ? "rotate-180" : "rotate-0"}`}
                />
              </button>
              {openFAQ === i && (
                <div className="mt-4 text-gray-600 text-base leading-relaxed space-y-3">
                  <p>{faq.answer}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <ThumbsUp className="w-4 h-4" />
                    <span>Полезный ответ</span>
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center text-gray-500 text-lg py-12">Вопросов не найдено.</div>
          )}
        </div>

        <div className="mt-20 bg-blue-50 p-8 rounded-xl shadow-md" data-aos="zoom-in">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Остались вопросы?</h2>
          <p className="text-gray-700 mb-6">Заполните форму, и наша команда свяжется с вами в ближайшее время.</p>
          <form className="space-y-4 max-w-xl">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <input
              type="email"
              placeholder="Email или телефон"
              className="w-full border border-gray-300 p-3 rounded-md"
            />
            <textarea
              placeholder="Ваш вопрос..."
              className="w-full border border-gray-300 p-3 rounded-md"
              rows={4}
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
