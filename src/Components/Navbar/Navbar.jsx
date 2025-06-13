import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import SearchBar from "../Magazin/SearchBar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* Верхняя часть навбара */}
      <div className="flex justify-around items-center bg-white py-4 px-6">
        <div>
          <h1 className="text-[30px] font-bold flex items-center">
            <span className="text-red-600 flex items-center">
              <BiMailSend className="text-blue-700 text-[40px]" />UZBEK
            </span>
            ISTAN24.COM.UZ
          </h1>
          <p className="text-slate-400 text-[20px]">быстрая доставка</p>
        </div>

        <div>
          <p className="flex items-center gap-2.5 font-semibold">
            Наши месенджеры
            <BsTelegram className="text-blue-500 text-[20px]" />
            <AiOutlineInstagram className="text-blue-300 text-[20px]" />
          </p>
          <p className="flex items-center font-semibold">
            <AiOutlineMail className="text-blue-700 mr-2" />
            info@uzbekistan24.com.uz
          </p>
        </div>

        <div className="text-center font-semibold">
          <p>₽ 00,00</p>
          <p>€ 00,00</p>
        </div>

        <Link to="/Order">
          <button className="bg-red-600 text-white w-[165px] h-[48px] font-bold rounded-[8px] hover:bg-blue-700 transition duration-500">
            Оформить заказ
          </button>
        </Link>

        <nav className="flex gap-4">
          <Link to="/Login" className="text-[20px] font-bold">
            Вход
          </Link>
          <span className="text-[20px] font-bold">/</span>
          <Link to="/Vxod" className="text-[20px] font-bold">
            Регистрация
          </Link>
        </nav>
      </div>

      {/* Нижняя навигация */}
      <div className="bg-white border-t border-gray-200">
        <ul className="flex flex-wrap justify-around items-center mt-4 px-6 py-3 gap-4">
          <li>
            <Link to="/Kompany" className="font-bold hover:text-red-600 transition">
              О компании
            </Link>
          </li>
          <li>
            <Link to="/Magazin" className="font-bold hover:text-red-600 transition">
              Список магазинов
            </Link>
          </li>
          <li>
            <Link to="/Otziv" className="font-bold hover:text-red-600 transition">
              Отзывы
            </Link>
          </li>
          <li>
            <Link to="/Vopros" className="font-bold hover:text-red-600 transition">
              Вопрос-Ответ
            </Link>
          </li>
          <li>
            <Link to="/Calculyator" className="font-bold hover:text-red-600 transition">
              Калькулятор
            </Link>
          </li>
          <li>
            <Link to="/Contakti" className="font-bold hover:text-red-600 transition">
              Контакты
            </Link>
          </li>

          {/* Поиск */}
          <li className="flex-grow min-w-[200px]">
            <SearchBar />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
