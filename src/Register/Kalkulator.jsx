import React, { useState } from "react";

export default function DeliveryCalculator() {
  const [price, setPrice] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [includeVAT, setIncludeVAT] = useState(false);
  const [total, setTotal] = useState(0);

  const handleCalculate = () => {
    let commissionRate = 0;

    if (includeVAT) {
      commissionRate = 0.19;
    } else if (price >= 250) {
      commissionRate = 0.13;
    } else {
      commissionRate = 0.16;
    }

    const totalSum = (Number(price) + Number(delivery)) * (1 + commissionRate);
    setTotal(totalSum.toFixed(2));
  };

  return (
    <div className="flex items-center justify-center p-2 sm:p-4 lg:p-6 xl:p-8">
      <div className="bg-red-600 rounded-lg p-4 sm:p-6 md:p-8 text-white w-full max-w-2xl lg:max-w-4xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Левая часть (описание) */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">
              Рассчитай стоимость доставки товаров из Польши
            </h2>
            <ul className="text-xs sm:text-sm space-y-1 sm:space-y-2 list-disc list-inside">
              <li>Минимальная стоимость для товаров с фатурой VAT от 250zl: <strong>13%</strong></li>
              <li>Для товаров до 250zl (с VAT или без): <strong>16%</strong></li>
              <li>Для товаров без фатуры VAT: <strong>19%</strong></li>
            </ul>
          </div>

          {/* Правая часть (форма) */}
          <div className="space-y-3 sm:space-y-4">
            {/* Поле "Цена" */}
            <div className="space-y-1">
              <label className="block text-sm sm:text-base font-medium">Цена* (zl)</label>
              <div className="flex items-center border bg-white rounded overflow-hidden">
                <input
                  type="number"
                  className="w-full p-2 text-black focus:outline-none text-sm sm:text-base"
                  placeholder="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <span className="bg-white text-red-600 px-2 sm:px-3 whitespace-nowrap">zl</span>
              </div>
            </div>

            {/* Поле "Доставка" */}
            <div className="space-y-1">
              <label className="block text-sm sm:text-base font-medium">Доставка* (zl)</label>
              <div className="flex items-center border bg-white rounded overflow-hidden">
                <input
                  type="number"
                  className="w-full p-2 text-black focus:outline-none text-sm sm:text-base"
                  placeholder="0"
                  value={delivery}
                  onChange={(e) => setDelivery(e.target.value)}
                />
                <span className="bg-white text-red-600 px-2 sm:px-3 whitespace-nowrap">zl</span>
              </div>
            </div>

            {/* Кнопка расчета */}
            <button
              className="bg-black text-white w-full sm:w-[180px] font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 active:scale-95"
              onClick={handleCalculate}
            >
              РАССЧИТАТЬ
            </button>

            {/* Результаты */}
            <div className="text-xs sm:text-sm space-y-1">
              <div>
                <strong>Сумма в zl:</strong> <span className="text-base sm:text-lg md:text-xl font-bold ml-1">{total}</span>
              </div>
              <div>
                <strong>Сумма в $:</strong> <span className="text-base sm:text-lg md:text-xl font-bold ml-1">{total.toString().replace(".", ",")}</span>
              </div>
            </div>

            {/* Чекбокс VAT */}
            <div className="flex items-start space-x-2 mt-2">
              <input
                type="checkbox"
                className="mt-0.5 sm:mt-1 w-4 h-4 cursor-pointer"
                checked={includeVAT}
                onChange={() => setIncludeVAT(!includeVAT)}
              />
              <label className="text-xs sm:text-sm leading-snug">
                Товар без фатуры VAT (добавляется 19% комиссии)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}