import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Вход в аккаунт
        </h1>

        <div className="flex flex-col gap-4">
          <button className="w-full flex items-center justify-center gap-2 text-base border border-gray-300 rounded-md py-2 hover:bg-gray-50">
            <FcGoogle className="text-xl" />
            Войти через Google
          </button>

          <button className="w-full flex items-center justify-center gap-2 text-base border border-gray-300 rounded-md py-2 hover:bg-gray-50">
            <FaApple className="text-xl" />
            Войти через Apple ID
          </button>

          <div className="text-center text-sm text-gray-500 mt-6">
            Продолжая, вы соглашаетесь с нашими
            <a href="#" className="text-blue-600 hover:underline mx-1">
              Условиями использования
            </a>
            и
            <a href="#" className="text-blue-600 hover:underline mx-1">
              Политикой конфиденциальности
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
