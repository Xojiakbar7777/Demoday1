import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, 
  FaTruck, FaGlobe, FaHeadset, FaCalculator,
  FaShippingFast, FaBoxOpen, FaWeightHanging, FaRulerCombined
} from 'react-icons/fa';

const ContactsPage = () => {
  // Состояния для калькулятора
  const [calcData, setCalcData] = useState({
    origin: 'Ташкент',
    destination: '',
    weight: '',
    dimensions: { length: '', width: '', height: '' },
    shipmentType: 'standard',
    insurance: false,
    expressDelivery: false
  });
  const [calcResult, setCalcResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Инициализация AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  // Обработчик изменений калькулятора
  const handleCalcChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name in calcData.dimensions) {
      setCalcData({
        ...calcData,
        dimensions: {
          ...calcData.dimensions,
          [name]: value
        }
      });
    } else {
      setCalcData({
        ...calcData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  // Расчет стоимости доставки
  const calculateShipping = (e) => {
    e.preventDefault();
    setIsCalculating(true);
    
    // Имитация API запроса
    setTimeout(() => {
      const baseRate = 75;
      const weightRate = calcData.weight ? parseFloat(calcData.weight) * 2.3 : 0;
      const distanceRate = 150;
      const typeMultiplier = calcData.shipmentType === 'express' ? 1.7 : 1;
      const insuranceCost = calcData.insurance ? 35 : 0;
      const expressFee = calcData.expressDelivery ? 85 : 0;
      
      const total = (baseRate + weightRate + distanceRate) * typeMultiplier + insuranceCost + expressFee;
      
      setCalcResult({
        baseRate,
        weightRate,
        distanceRate,
        typeMultiplier,
        insuranceCost,
        expressFee,
        total: total.toFixed(2)
      });
      setIsCalculating(false);
    }, 800);
  };

  return (
    <div className=" bg-gray-50 max-w-screen-lg mx-auto">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            data-aos="fade-down"
          >
            Uzbekistan24 Logistics
          </h1>
          <p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Комплексные логистические решения для вашего бизнеса
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Calculator Section */}
        <div 
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
          data-aos="fade-up"
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <FaCalculator className="text-blue-600 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Калькулятор доставки</h2>
            </div>
            
            <form onSubmit={calculateShipping} className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Origin/Destination */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Откуда</label>
                  <input
                    type="text"
                    name="origin"
                    value={calcData.origin}
                    onChange={handleCalcChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Куда</label>
                  <input
                    type="text"
                    name="destination"
                    value={calcData.destination}
                    onChange={handleCalcChange}
                    placeholder="Город назначения"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Weight/Dimensions */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Вес (кг)</label>
                  <input
                    type="number"
                    name="weight"
                    value={calcData.weight}
                    onChange={handleCalcChange}
                    placeholder="0.00"
                    min="0.1"
                    step="0.1"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Габариты (см)</label>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="number"
                      name="length"
                      value={calcData.dimensions.length}
                      onChange={handleCalcChange}
                      placeholder="Длина"
                      min="1"
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="number"
                      name="width"
                      value={calcData.dimensions.width}
                      onChange={handleCalcChange}
                      placeholder="Ширина"
                      min="1"
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="number"
                      name="height"
                      value={calcData.dimensions.height}
                      onChange={handleCalcChange}
                      placeholder="Высота"
                      min="1"
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Тип доставки</label>
                  <select
                    name="shipmentType"
                    value={calcData.shipmentType}
                    onChange={handleCalcChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="standard">Стандартная (10-15 дней)</option>
                    <option value="express">Экспресс (5-7 дней)</option>
                  </select>
                </div>
                <div className="space-y-3 flex items-end">
                  <div className="space-y-2 w-full">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="insurance"
                        checked={calcData.insurance}
                        onChange={handleCalcChange}
                        className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700 text-sm">Страхование груза</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="expressDelivery"
                        checked={calcData.expressDelivery}
                        onChange={handleCalcChange}
                        className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700 text-sm">Срочная доставка</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isCalculating}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {isCalculating ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Расчет...
                    </>
                  ) : (
                    <>
                      <FaCalculator className="mr-2" />
                      Рассчитать
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Results */}
            {calcResult && (
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Результаты расчета</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Базовая стоимость:</span>
                    <span className="font-medium">${calcResult.baseRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">За вес ({calcData.weight} кг):</span>
                    <span className="font-medium">${calcResult.weightRate}</span>
                  </div>
                  {calcResult.insuranceCost > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Страховка:</span>
                      <span className="font-medium text-green-600">+${calcResult.insuranceCost}</span>
                    </div>
                  )}
                  {calcResult.expressFee > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Срочная доставка:</span>
                      <span className="font-medium text-green-600">+${calcResult.expressFee}</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex justify-between">
                    <span className="text-gray-800 font-semibold">Итого:</span>
                    <span className="text-blue-800 font-bold text-lg">${calcResult.total}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Details */}
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            data-aos="fade-right"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <FaHeadset className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Контакты</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaPhone className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Телефоны</h3>
                    <p className="text-gray-600">+998 71 123 45 67</p>
                    <p className="text-gray-600">+998 90 123 45 67 (круглосуточно)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaEnvelope className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@uzbekistan24.uz</p>
                    <p className="text-gray-600">support@uzbekistan24.uz</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Адрес</h3>
                    <p className="text-gray-600">г. Ташкент, Мирабадский район</p>
                    <p className="text-gray-600">ул. Амира Темура, 108</p>
                    <p className="text-gray-600 mt-2">Офис работает: Пн-Пт 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            data-aos="fade-left"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <FaEnvelope className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Напишите нам</h2>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение *</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <FaEnvelope className="mr-2" />
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div 
          className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden"
          data-aos="fade-up"
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Мы на карте</h2>
            </div>
            <div className="h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
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

        {/* Services Overview */}
        <div 
          className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden"
          data-aos="fade-up"
        >
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-6">
              <FaTruck className="text-blue-600 text-2xl mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Наши услуги</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center mb-2">
                  <FaShippingFast className="text-blue-600 mr-2" />
                  <h3 className="font-semibold">Международные перевозки</h3>
                </div>
                <p className="text-gray-600 text-sm">Доставка грузов по всему миру с полным сопровождением</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center mb-2">
                  <FaBoxOpen className="text-blue-600 mr-2" />
                  <h3 className="font-semibold">Складская логистика</h3>
                </div>
                <p className="text-gray-600 text-sm">Хранение и обработка грузов на современных складах</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center mb-2">
                  <FaGlobe className="text-blue-600 mr-2" />
                  <h3 className="font-semibold">Таможенное оформление</h3>
                </div>
                <p className="text-gray-600 text-sm">Профессиональное сопровождение таможенных процедур</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center mb-2">
                  <FaWeightHanging className="text-blue-600 mr-2" />
                  <h3 className="font-semibold">Грузоперевозки по Узбекистану</h3>
                </div>
                <p className="text-gray-600 text-sm">Быстрая и надежная доставка по всей стране</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center mb-2">
                  <FaRulerCombined className="text-blue-600 mr-2" />
                  <h3 className="font-semibold">Сборные грузы</h3>
                </div>
                <p className="text-gray-600 text-sm">Экономичные решения для малых партий товаров</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center mb-2">
                  <FaHeadset className="text-blue-600 mr-2" />
                  <h3 className="font-semibold">Логистический консалтинг</h3>
                </div>
                <p className="text-gray-600 text-sm">Оптимизация ваших цепочек поставок</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;