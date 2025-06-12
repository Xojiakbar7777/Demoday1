import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaTruck, FaGlobe, FaHeadset } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
            data-aos="fade-down"
          >
            Свяжитесь с Uzbekistan24 Logistics
          </h1>
          <p 
            className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Ваш надежный партнер в международных и внутренних грузоперевозках
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div 
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-right"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 md:mb-6">Контактная информация</h2>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                    <FaPhone className="text-blue-600 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Телефоны</h3>
                    <p className="text-gray-600 text-sm sm:text-base">+998 97 777 01 59</p>
                    <p className="text-gray-600 text-sm sm:text-base">+998 99 829 12 80 (24/7 поддержка)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                    <FaEnvelope className="text-blue-600 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Email</h3>
                    <p className="text-gray-600 text-sm sm:text-base">info@uzbekistan24.uz</p>
                    <p className="text-gray-600 text-sm sm:text-base">support@uzbekistan24.uz</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-blue-600 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Адрес</h3>
                    <p className="text-gray-600 text-sm sm:text-base">г. Ташкент, Мирабадский район</p>
                    <p className="text-gray-600 text-sm sm:text-base">ул. Амира Темура, 108</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                    <FaClock className="text-blue-600 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Часы работы</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-600 text-sm sm:text-base">Сб: 9:00 - 14:00</p>
                    <p className="text-gray-600 text-sm sm:text-base">Круглосуточная поддержка для клиентов</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div 
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 md:mb-6">Наши услуги</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center text-sm sm:text-base">
                  <FaTruck className="text-blue-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>Международные перевозки</span>
                </div>
                <div className="flex items-center text-sm sm:text-base">
                  <FaTruck className="text-blue-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>Таможенное оформление</span>
                </div>
                <div className="flex items-center text-sm sm:text-base">
                  <FaTruck className="text-blue-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>Складская логистика</span>
                </div>
                <div className="flex items-center text-sm sm:text-base">
                  <FaTruck className="text-blue-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>Мультимодальные перевозки</span>
                </div>
                <div className="flex items-center text-sm sm:text-base">
                  <FaTruck className="text-blue-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>Грузовое страхование</span>
                </div>
                <div className="flex items-center text-sm sm:text-base">
                  <FaTruck className="text-blue-500 mr-2 sm:mr-3 flex-shrink-0" />
                  <span>Экспедирование грузов</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-left"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 md:mb-6">Напишите нам</h2>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="example@mail.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+998 __ ___ __ __"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Тема *
                </label>
                <select
                  id="subject"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Выберите тему</option>
                  <option value="delivery">Запрос на перевозку</option>
                  <option value="quote">Запрос цены</option>
                  <option value="tracking">Отслеживание груза</option>
                  <option value="other">Другой вопрос</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Опишите ваш запрос..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-4 rounded-lg transition duration-300 text-sm sm:text-base"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div 
          className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <FaGlobe className="text-blue-600 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800">Глобальная сеть</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Партнеры в 35 странах мира обеспечивают бесперебойные международные перевозки
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <FaTruck className="text-blue-600 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800">Собственный автопарк</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Более 150 единиц современной техники для перевозки любых типов грузов
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <FaHeadset className="text-blue-600 text-xl sm:text-2xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-gray-800">Поддержка 24/7</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Круглосуточная служба поддержки клиентов на 3 языках: узбекский, русский, английский
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div 
          className="mt-12 md:mt-16 bg-white p-5 sm:p-6 rounded-xl shadow-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4 md:mb-6">Наше местоположение</h2>
          <div className="h-64 sm:h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.254365187567!2d69.27972531542598!3d41.3293829792699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534175ed31%3A0x52a8f9d9414a2ad8!2z0JDQvNC40YDQvtC00L7QvSDQk9C10YDQvtCw0L3QsA!5e0!3m2!1sru!2s!4v1620000000000!5m2!1sru!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;