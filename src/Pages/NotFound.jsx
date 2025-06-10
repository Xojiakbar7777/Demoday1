import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl mt-4 text-gray-700">Страница не найдена</p>
      <p className="text-md text-gray-500 mt-2">
       Сервер времмено недоступен
      </p>

      {/* Кнопка */}
      <Link to="/Kompany">
        <button
          className="
            mt-8
            px-8 py-4
            bg-gradient-to-r from-red-500 via-red-600 to-red-700
            text-white text-lg font-bold uppercase tracking-wide
            rounded-full shadow-lg
            transition duration-300 ease-in-out
            hover:from-red-600 hover:via-red-700 hover:to-red-800
            hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-red-300
          "
        >
          Возвращаться в главную страницу
        </button>
      </Link>
    </div>
  );
}
