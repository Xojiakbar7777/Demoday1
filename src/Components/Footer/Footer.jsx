import { BsInstagram, BsFacebook, BsFillTelephoneFill, BsStopwatch } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-7 ">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row flex-wrap gap-10   justify-between">
        {/* Логотип и копирайт */}
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-2xl font-bold flex items-center">
            <span className="text-red-600 flex items-center ">
              <BiMailSend className="text-blue-700 text-3xl " />UZBEK</span>ISTAN24.COM.UZ
          </h1>
          <p className="text-slate-400 text-sm mt-2">быстрая доставка</p>
          <p className="text-slate-400 mt-6 text-sm">
            Copyright © 2022 Poland24.com.ua.<br />
            Все права защищены.
          </p>
        </div>

        {/* Навигация */}
        <div className="flex-1 min-w-[150px]">
          <h2 className="font-bold text-lg mb-2">Навигация</h2>
          <ul className="space-y-1 text-sm">
            <li><Link to="" className="hover:text-yellow-400">Список магазину</Link></li>
            <li><Link to="" className="hover:text-yellow-400">О компании</Link></li>
            <li><Link to="" className="hover:text-yellow-400">Отзывы</Link></li>
            <li><Link to="" className="hover:text-yellow-400">Вопрос ответ</Link></li>
            <li><Link to="" className="hover:text-yellow-400">Калькулятор</Link></li>
            <li><Link to="" className="hover:text-yellow-400">Контакты</Link></li>
          </ul>
        </div>

        {/* FAQ и прочее */}
        <div className="flex-1 min-w-[180px]">
          <ul className="space-y-2 text-sm">
            <li><Link to="" className="hover:text-yellow-400">FAQ</Link></li>
            <li><Link to="" className="hover:text-yellow-400">Товар на складе в Узбекистане</Link></li>
            <li><Link to="" className="hover:text-yellow-400">Правила магазина</Link></li>
          </ul>
        </div>

        {/* Соцсети */}
        <div className="flex-1 min-w-[180px]">
          <h2 className="text-lg font-bold mb-2">Мы в соцсетях:</h2>
          <div className="flex gap-4 text-2xl">
            <BsFacebook className="hover:text-yellow-400 text-blue-700" />
            <AiOutlineTwitter className="hover:text-yellow-400 text-blue-400" />
            <BsInstagram className="hover:text-yellow-400 text-purple-400" />
          </div>
        </div>

        {/* Контакты */}
        <div className="flex-1 min-w-[250px] space-y-3 text-sm">
          <h2 className="text-lg font-bold">Контакты</h2>
          <p className="flex items-center gap-2 text-slate-300">
            <CiLocationOn className="text-white text-xl" />
            улица Амира Темура, 108А, Ташкент
          </p>
          <p className="flex items-center gap-2 text-slate-300">
            <BsStopwatch className="text-white text-xl" />
            Время работы с 10:00 до 19:00
          </p>
          <p className="flex items-center gap-2 text-slate-300">
            <BsFillTelephoneFill className="text-white text-xl" />
            +998 97 777 01 59
          </p>
          <p className="flex items-center gap-2 text-slate-300">
            <CgMail className="text-white text-xl" />
            info@uzbekistan24.com.uz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
