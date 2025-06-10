import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LogisticsCalculator = () => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    weight: '',
    dimensions: { length: '', width: '', height: '' },
    shipmentType: 'standard',
    insurance: false,
    expressDelivery: false
  });
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Initialize AOS when component mounts
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name in formData.dimensions) {
      setFormData({
        ...formData,
        dimensions: {
          ...formData.dimensions,
          [name]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const calculateShipping = (e) => {
    e.preventDefault();
    setIsCalculating(true);
    
    // Simulate API call
    setTimeout(() => {
      // Calculation logic
      const baseRate = 75;
      const weightRate = formData.weight ? parseFloat(formData.weight) * 2.3 : 0;
      const distanceRate = 150; // Would normally come from distance API
      const typeMultiplier = formData.shipmentType === 'express' ? 1.7 : 1;
      const insuranceCost = formData.insurance ? 35 : 0;
      const expressFee = formData.expressDelivery ? 85 : 0;
      
      const total = (baseRate + weightRate + distanceRate) * typeMultiplier + insuranceCost + expressFee;
      
      setResult({
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

  const resetForm = () => {
    setFormData({
      origin: '',
      destination: '',
      weight: '',
      dimensions: { length: '', width: '', height: '' },
      shipmentType: 'standard',
      insurance: false,
      expressDelivery: false
    });
    setResult(null);
  };

  return (
    <div 
      className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg"
      data-aos="fade-up"
    >
      {/* Calculator Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
          Калькулятор доставки UZBEKISTAN24
        </h2>
        <p className="text-gray-600">
         Получите мгновенную оценку ваших логистических потребностей
        </p>
      </div>
      
      {/* Calculator Form */}
      <form onSubmit={calculateShipping} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Origin */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Место происхождения</label>
            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleInputChange}
              placeholder="Город или почтовый индекс"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {/* Destination */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Место назначения</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              placeholder="Город или почтовый индекс"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {/* Weight */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Вес (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="0.00"
              min="0.1"
              step="0.1"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {/* Dimensions */}
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Размеры (cm)</label>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="number"
                name="length"
                value={formData.dimensions.length}
                onChange={handleInputChange}
                placeholder="Length"
                min="1"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                name="width"
                value={formData.dimensions.width}
                onChange={handleInputChange}
                placeholder="Width"
                min="1"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                name="height"
                value={formData.dimensions.height}
                onChange={handleInputChange}
                placeholder="Height"
                min="1"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          {/* Shipment Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Тип доставки</label>
            <select
              name="shipmentType"
              value={formData.shipmentType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="standard">Стандартный (10-15 дней)</option>
              <option value="express">Express (5-7 дней)</option>
            </select>
          </div>
          
          {/* Checkboxes */}
          <div className="space-y-3 md:col-span-2">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="insurance"
                checked={formData.insurance}
                onChange={handleInputChange}
                className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">Страхование груза (+$35)</span>
            </label>
            
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="expressDelivery"
                checked={formData.expressDelivery}
                onChange={handleInputChange}
                className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">Экспресс-доставка (+$85)</span>
            </label>
          </div>
        </div>
        
        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={resetForm}
            disabled={isCalculating}
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50"
          >
            Перезагрузить
          </button>
          <button
            type="submit"
            disabled={isCalculating}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCalculating ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Расчет...
              </span>
            ) : 'Рассчитать цену'}
          </button>
        </div>
      </form>
      
      {/* Results Section */}
      {result && (
        <div 
          className="bg-blue-50 p-6 rounded-xl border border-blue-100"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Расчет стоимости доставки</h3>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Базовая ставка:</span>
              <span className="font-medium">${result.baseRate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Весовой сбор ({formData.weight}kg):</span>
              <span className="font-medium">${result.weightRate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Расстояние Скорость:</span>
              <span className="font-medium">${result.distanceRate}</span>
            </div>
            {result.insuranceCost > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-600">Страхование:</span>
                <span className="font-medium text-green-600">+${result.insuranceCost}</span>
              </div>
            )}
            {result.expressFee > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-600">Экспресс-доставка:</span>
                <span className="font-medium text-green-600">+${result.expressFee}</span>
              </div>
            )}
            <div className="border-t border-gray-200 my-2"></div>
            <div className="flex justify-between">
              <span className="text-gray-800 font-semibold">Общая стоимость:</span>
              <span className="text-blue-800 font-bold text-xl">${result.total}</span>
            </div>
          </div>
          <button 
            onClick={() => window.print()}
            className="w-full py-2 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
           Распечатать смету
          </button>
        </div>
      )}
    </div>
  );
};

export default LogisticsCalculator;