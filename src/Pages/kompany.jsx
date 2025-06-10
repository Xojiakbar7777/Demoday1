import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../assets/coins.png';
import img2 from '../assets/bag.png';
import img3 from '../assets/truck.png';
import img4 from '../assets/barcode.png';
import img5 from '../assets/clock.png';
import img6 from '../assets/Map.png';
import img7 from '../assets/video.mp4';
import img8 from '../assets/amazon.png';
import img9 from '../assets/ebay.png';
import img10 from '../assets/yoox.png';
import img11 from '../assets/kitchen.png';
import img12 from '../assets/zara.png';

import DeliveryCalculator from '../Register/Kalkulator';
import { Link } from 'react-router-dom';

export default function DeliverySection() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const cards = [
    { text: 'Комиссия 6.38%', img: img1 },
    { text: 'Минимальная предоплата 30%', img: img2 },
    { text: 'Доставка товара 5-10 дней', img: img3 },
    { text: 'Заказы до 500€ без пошлин', img: img4 },
    { text: 'Оплата кредитными средствами', img: img5 },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-white via-gray-50 to-white py-16 px-6 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Левая часть */}
        <div className="lg:w-1/2 space-y-8" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Быстрая доставка товаров из разных стран в Узбекистан
          </h1>
          <p className="text-gray-600 text-lg">
            Оцени новый уровень сервиса и скорости доставки
          </p>

          <form className="flex flex-col sm:flex-row items-center gap-4 bg-white border border-gray-300 shadow-md p-4 rounded-xl max-w-md">
            <input
              type="text"
              placeholder="Вставить ссылку на товар"
              className="flex-1 w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Заказать
            </button>
          </form>
        </div>

        {/* Правая часть с карточками */}
        <div className="lg:w-1/2 w-full overflow-x-auto" data-aos="fade-left">
          <div className="flex gap-6 w-max py-4 px-2">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="min-w-[180px] bg-red-600 text-white rounded-3xl shadow-xl p-6 flex flex-col items-center justify-between hover:scale-105 transition-transform cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
              >
                <img
                  src={card.img}
                  alt="icon"
                  className="w-24 h-24 object-contain mb-4"
                />
                <p className="text-sm font-semibold text-center leading-tight">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Как это работает --- */}
      <div className="mt-60 pt-6 max-w-7xl mx-auto px-6 lg:px-0" data-aos="fade-up">
        <div className="border-l-8 border-red-700 h-[48px] w-fit pl-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Как это работает
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { step: '01', title: 'Вы выбираете товар', desc: 'Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов.' },
            { step: '02', title: 'Предоставлйте ссылку', desc: 'Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов.' },
            { step: '03', title: 'Внести предоплату', desc: 'Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов.' },
            { step: '04', title: 'Выкупаем товар и везем в Узбекистан', desc: 'Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов.' },
            { step: '05', title: 'Оплатить остаток', desc: 'Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов.' },
            { step: '06', title: 'Получите товар', desc: 'Каждый веб-разработчик знает, что такое текст-«рыба». Текст этот, несмотря на название, не имеет никакого отношения к обитателям водоемов.' },
          ].map(({ step, title, desc }) => (
            <div
              key={step}
              className="w-[212px] h-[350px] bg-white p-5 rounded-lg shadow-lg flex flex-col"
              data-aos="fade-up"
              data-aos-delay={parseInt(step) * 100}
            >
              <h1 className="text-rose-400 text-[68px] font-extrabold">{step}</h1>
              <h2 className="font-bold text-lg mt-[-20px] mb-3">{title}</h2>
              <p className="text-gray-600 text-sm flex-grow">{desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link to="">
            <button className="w-[174px] h-[72px] bg-black rounded-lg font-extrabold text-[24px] hover:bg-red-600 text-white transition duration-500">
              Заказать
            </button>
          </Link>
        </div>
      </div>

      {/* --- О нас --- */}
      <div className="mt-[100px] max-w-7xl mx-auto px-6 lg:px-0 flex flex-col lg:flex-row gap-12 items-center" data-aos="fade-up">
        <div className="lg:w-1/2 space-y-6">
          <div className="border-l-8 border-red-700 h-[78px] w-fit pl-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">О нас</h1>
            <h2 className="text-gray-700 mt-2">15 лет опыт производства. Знаем все доставке</h2>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mt-16">
            Компания Poland24 осуществляет доставку из любого магазина/поставщика/производителя стран Евросоюза, которые осуществляют доставку товара курьером в Польшу.
          </p>
          <button className="w-[128px] h-[48px] border-2 rounded-lg border-slate-400 mt-8 font-bold text-black hover:bg-red-600 hover:text-white transition duration-500">
            Подробнее
          </button>
        </div>

        <div className="lg:w-1/2">
          <video src={img7} controls className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Калькулятор доставки */}
      <div className="mt-24 max-w-7xl mx-auto px-6 lg:px-0" data-aos="fade-up">
        <DeliveryCalculator />
      </div>

      {/* --- Мы доставляем из --- */}
      <div
        className="h-[1000px] bg-fixed bg-center bg-cover flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${img6})` }}
        data-aos="fade-in"
      >
        <div className="border-l-8 border-red-700 h-[78px] w-fit pl-4 mt-36 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight bg-white bg-opacity-75 px-4 rounded">
            Мы доставляем из
          </h1>
        </div>

        <div className="flex flex-wrap gap-20 justify-center max-w-5xl bg-white bg-opacity-70 rounded-lg p-10">
          <div>
            {[
              { country: 'Польша', price: 'от 0,00 USD', highlight: false },
              { country: 'Германия', price: 'от 0,00 USD', highlight: true },
              { country: 'Франция', price: 'от 0,00 USD', highlight: false },
              { country: 'Италия', price: 'от 0,00 USD', highlight: true },
              { country: 'Испания', price: 'от 0,00 USD', highlight: false },
              { country: 'Португалия', price: 'от 0,00 USD', highlight: false },
              { country: 'Турция', price: 'от 0,00 USD', highlight: false },
              { country: 'Россия', price: 'от 0,00 USD', highlight: false },
              { country: 'Греция', price: 'от 0,00 USD', highlight: false },
            ].map(({ country, price, highlight }) => (
              <h1
                key={country}
                className={`flex font-bold gap-1.5 text-[25px] mt-5 ${highlight ? 'text-red-700' : 'text-black'}`}
              >
                {country} <span className={`${highlight ? 'text-black' : ''}`}>{price}</span>
              </h1>
            ))}
          </div>

          <div>
            {[
              { country: 'Китай', price: 'от 0,00 USD', highlight: true },
              { country: 'Япония', price: 'от 0,00 USD', highlight: false },
              { country: 'Россия', price: 'от 0,00 USD', highlight: false },
              { country: 'Иран', price: 'от 0,00 USD', highlight: false },
              { country: 'Вьетнам', price: 'от 0,00 USD', highlight: false },
              { country: 'Таиланд', price: 'от 0,00 USD', highlight: false },
              { country: 'Тайвань', price: 'от 0,00 USD', highlight: false },
              { country: 'Индия', price: 'от 0,00 USD', highlight: false },
              { country: 'Пакистан', price: 'от 0,00 USD', highlight: false },
            ].map(({ country, price, highlight }) => (
              <h1
                key={country}
                className={`flex font-bold gap-1.5 text-[25px] mt-5 ${highlight ? 'text-red-700' : 'text-black'}`}
              >
                {country} <span className={`${highlight ? 'text-black' : ''}`}>{price}</span>
              </h1>
            ))}
          </div>
        </div>
      </div>

      {/* --- Каталог магазинов --- */}
      <div className="mt-40 max-w-7xl mx-auto px-6 lg:px-0" data-aos="fade-up">
        <div className="border-l-8 border-red-700 h-[78px] w-fit pl-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Каталог магазинов
          </h1>
        </div>

        <div className="flex flex-wrap gap-10 justify-center">
          {[img8, img9, img10, img11, img12].map((logo, idx) => (
            <div
              key={idx}
              className="w-[240px] h-[95px] flex items-center justify-center rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              data-aos="flip-left"
              data-aos-delay={idx * 150}
            >
              <img src={logo} alt="store logo" className="object-contain max-h-full" />
            </div>
          ))}
        </div>
      </div>


{/* --- Каталог магазинов --- */}
<div className="mt-40 max-w-7xl mx-auto px-6 lg:px-0" data-aos="fade-up">
  

  

  <div className="flex justify-center mt-10">
    <Link to="/Magazin"><button className="w-[200px] h-[50px] bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition duration-300">
      Посмотреть все магазины
    </button></Link>
  </div>
</div>


    </section>
  );
}
