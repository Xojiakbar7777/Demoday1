import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, Router, Routes } from 'react-router-dom'
const deliveryData = [
  {
    continent: "Европа",
    countries: [
      { name: "Германия", flag: "🇩🇪", deliveryTime: "5-7 дней" },
      { name: "Франция", flag: "🇫🇷", deliveryTime: "6-8 дней" },
      { name: "Италия", flag: "🇮🇹", deliveryTime: "6-9 дней" },
      { name: "Испания", flag: "🇪🇸", deliveryTime: "6-8 дней" },
      { name: "Великобритания", flag: "🇬🇧", deliveryTime: "7-9 дней" },
      { name: "Нидерланды", flag: "🇳🇱", deliveryTime: "5-7 дней" },
      { name: "Швеция", flag: "🇸🇪", deliveryTime: "6-9 дней" },
      { name: "Польша", flag: "🇵🇱", deliveryTime: "6-8 дней" },
      { name: "Россия", flag: "🇷🇺", deliveryTime: "7-10 дней" },
      { name: "Швейцария", flag: "🇨🇭", deliveryTime: "5-7 дней" },
    ],
  },
  {
    continent: "Азия",
    countries: [
      { name: "Китай", flag: "🇨🇳", deliveryTime: "7-10 дней" },
      { name: "Япония", flag: "🇯🇵", deliveryTime: "7-9 дней" },
      { name: "Южная Корея", flag: "🇰🇷", deliveryTime: "7-9 дней" },
      { name: "Индия", flag: "🇮🇳", deliveryTime: "8-12 дней" },
      { name: "Сингапур", flag: "🇸🇬", deliveryTime: "7-10 дней" },
      { name: "Таиланд", flag: "🇹🇭", deliveryTime: "8-12 дней" },
      { name: "Турция", flag: "🇹🇷", deliveryTime: "6-9 дней" },
      { name: "Объединённые Арабские Эмираты", flag: "🇦🇪", deliveryTime: "6-10 дней" },
    ],
  },
  {
    continent: "Америка",
    countries: [
      { name: "США", flag: "🇺🇸", deliveryTime: "8-12 дней" },
      { name: "Канада", flag: "🇨🇦", deliveryTime: "9-13 дней" },
      { name: "Бразилия", flag: "🇧🇷", deliveryTime: "10-15 дней" },
      { name: "Мексика", flag: "🇲🇽", deliveryTime: "9-14 дней" },
      { name: "Аргентина", flag: "🇦🇷", deliveryTime: "10-15 дней" },
      { name: "Чили", flag: "🇨🇱", deliveryTime: "10-15 дней" },
    ],
  },
  {
    continent: "Африка",
    countries: [
      { name: "ЮАР", flag: "🇿🇦", deliveryTime: "12-18 дней" },
      { name: "Египет", flag: "🇪🇬", deliveryTime: "10-15 дней" },
      { name: "Марокко", flag: "🇲🇦", deliveryTime: "11-16 дней" },
    ],
  },
  {
    continent: "Океания",
    countries: [
      { name: "Австралия", flag: "🇦🇺", deliveryTime: "12-18 дней" },
      { name: "Новая Зеландия", flag: "🇳🇿", deliveryTime: "12-18 дней" },
    ],
  },
];

const DeliveryPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 p-6">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-red-700 drop-shadow-md">
        Как работает доставка в Узбекистан
      </h1>

      <p className="max-w-4xl mx-auto mb-16 text-center text-gray-700 text-lg leading-relaxed">
        Наша компания обеспечивает доставку товаров из любого зарубежного магазина, поставщика или производителя
        прямо к вам домой в Узбекистан. Сроки доставки зависят от страны отправления, выбранной курьерской службы и
        таможенных процедур.
      </p>

      {deliveryData.map(({ continent, countries }) => (
        <section key={continent} className="mb-12 max-w-6xl mx-auto">
          <h2
            className="text-3xl font-semibold mb-6 border-b-4 border-red-600 pb-2 text-red-700"
            data-aos="fade-up"
          >
            {continent}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {countries.map(({ name, flag, deliveryTime }) => (
              <div
                key={name}
                className="bg-white rounded-xl shadow-lg p-6 text-center cursor-default hover:shadow-2xl transition-shadow"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="text-7xl mb-3">{flag}</div>
                <h3 className="text-xl font-bold mb-2 text-red-800">{name}</h3>
                <p className="text-gray-600 text-lg">
                  Срок доставки: <span className="font-semibold">{deliveryTime}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <footer className="mt-20 max-w-3xl mx-auto text-center text-gray-600 text-sm">
        <p>
          Обратите внимание, что сроки доставки могут меняться из-за сезонных нагрузок, таможенных процедур и работы
          курьерских служб. Мы всегда стараемся минимизировать сроки и обеспечить надёжность доставки.
        </p>
      </footer>

<Link to="/*"> <button
      className=" flex m-auto mt-9
        bg-gradient-to-r from-red-500 to-pink-600
        text-white
        font-semibold
        py-3 px-8
        rounded-full
        shadow-lg
        hover:from-pink-600 hover:to-red-500
        transition
        duration-300
        ease-in-out
        active:scale-95
        focus:outline-none
        focus:ring-4
        focus:ring-pink-300
      "
    >
      Заказать
    </button></Link>


    </div>
  );
};

export default DeliveryPage;
