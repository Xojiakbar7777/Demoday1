
// src/components/ShopCard.jsx
import React from 'react';

export default function ShopCard({ shop }) {
  return (
    <div className="bg-white rounded shadow p-4 w-64 h-64 flex flex-col justify-between">
      <img src={shop.logo} alt={shop.name} className="w-32 h-32 mx-auto" />
      <div>
        <p className="font-bold">{shop.name}</p>
        <p>Доставка: {shop.deliveryTime}</p>
        <p>Комиссия: {shop.commission}%</p>
      </div>
    </div>
  );
}