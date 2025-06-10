import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const defaultTestimonials = [
  {
    name: "Иван Петров",
    position: "ООО 'ТехТранс'",
    feedback: "Отличный сервис! Грузы доставлены вовремя, всё прозрачно и без лишней волокиты.",
    rating: 5,
    category: "Скорость",
    reply: "Спасибо за доверие! Мы стараемся для вас."
  },
  {
    name: "Екатерина Смирнова",
    position: "ЗАО 'ПромИмпорт'",
    feedback: "Быстрая и надежная доставка. Очень удобно отслеживать заказы онлайн.",
    rating: 4,
    category: "Удобство",
    reply: "Рады, что вам удобно! Надеемся на дальнейшее сотрудничество."
  }
];

const getAvatarUrl = (name) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return `https://ui-avatars.com/api/?name=${initials}&background=random&bold=true`;
};

const TestimonialCard = ({ name, position, feedback, rating, reply }) => (
  <motion.div
    className="w-full md:w-1/3 p-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="rounded-2xl shadow-xl bg-white p-6 h-full">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={getAvatarUrl(name)}
          alt="avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-lg text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
      <div className="flex mb-2">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" />
        ))}
      </div>
      <p className="text-gray-700 italic mb-4">“{feedback}”</p>
      {reply && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-3 text-sm text-gray-700 rounded-md">
          ✉️ Ответ компании: {reply}
        </div>
      )}
    </div>
  </motion.div>
);

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({
    name: "",
    position: "",
    feedback: "",
    rating: 5,
    category: "Общее"
  });
  const [filter, setFilter] = useState("Все");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("testimonials");
    if (stored) setTestimonials(JSON.parse(stored));
    else setTestimonials(defaultTestimonials);
  }, []);

  useEffect(() => {
    localStorage.setItem("testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.feedback) return;
    setTestimonials((prev) => [form, ...prev]);
    setForm({ name: "", position: "", feedback: "", rating: 5, category: "Общее" });
  };

  const filtered = testimonials.filter((t) => {
    return (
      (filter === "Все" || t.category === filter) &&
      (t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.feedback.toLowerCase().includes(search.toLowerCase()))
    );
  });

  const averageRating =
    testimonials.reduce((acc, cur) => acc + cur.rating, 0) / testimonials.length || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-200 px-4 md:px-16 lg:px-32 py-10">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Отзывы наших клиентов
      </motion.h1>

      <div className="text-center mb-10">
        <p className="text-xl font-medium text-gray-700">Средняя оценка: ⭐ {averageRating.toFixed(1)} / 5</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {["Все", "Скорость", "Удобство", "Общее"].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-md border ${filter === cat ? "bg-blue-600 text-white" : "bg-white text-gray-800"}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mb-12 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Оставьте свой отзыв</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Ваше имя" className="w-full border border-gray-300 rounded-md p-2" required />
          <input type="text" name="position" value={form.position} onChange={handleChange} placeholder="Должность / Компания" className="w-full border border-gray-300 rounded-md p-2" />
          <textarea name="feedback" value={form.feedback} onChange={handleChange} placeholder="Ваш отзыв" className="w-full border border-gray-300 rounded-md p-2" rows="4" required />
          <select name="rating" value={form.rating} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2">
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          <select name="category" value={form.category} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2">
            {["Скорость", "Удобство", "Общее"].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">Отправить отзыв</button>
        </form>
      </div>

      <div className="mb-6 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Поиск по отзывам..."
          className="w-full p-3 rounded-lg border border-gray-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center items-stretch -mx-4 w-full max-w-7xl mx-auto">
        {filtered.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}
