import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Регистрация
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ваше имя"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Пароль"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Зарегистрироваться
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">или</div>

        <div className="flex flex-col gap-4">
          <button className="w-full flex items-center justify-center gap-2 text-base border border-gray-300 rounded-md py-2 hover:bg-gray-50">
            <FcGoogle className="text-xl" /> Зарегистрироваться через Google
          </button>

          <button className="w-full flex items-center justify-center gap-2 text-base border border-gray-300 rounded-md py-2 hover:bg-gray-50">
            <FaApple className="text-xl" /> Зарегистрироваться через Apple ID
          </button>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          Уже есть аккаунт?
          <Link to="/login" className="text-blue-600 hover:underline ml-1">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}