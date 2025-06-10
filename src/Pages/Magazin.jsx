import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/ebay.png";
import img2 from "../assets/yoox.png";
import img3 from "../assets/kitchen.png";
import img4 from "../assets/zara.png";
import img5 from "../assets/amazon.png";
import img6 from "../assets/mclntosh.png";
import img7 from "../assets/asos.png";
import img8 from "../assets/hm.jpg";
import img9 from "../assets/uni.jpg";
import img10 from "../assets/sen.jpg";
import img11 from "../assets/nike.jpg";
import img12 from "../assets/adidas.jpg";
import img13 from "../assets/best.jpg";
import img14 from "../assets/new.jpg";
import img15 from "../assets/bosch.jpg";
import img16 from "../assets/goodyear.jpg";
import img17 from "../assets/Le.jpg";
import img18 from "../assets/Swar.jpg";
import img19 from "../assets/goy.jpg";
import img20 from "../assets/Louis.jpg";
import img21 from "../assets/Gucci.jpg";
import img22 from "../assets/Prada.jpg";
import img23 from "../assets/Chanel.jpg";
import img24 from "../assets/Hermes.jpg";
import img25 from "../assets/Michael.jpg";
import Footer from "../Components/Footer/Footer";

const filters = [
  "Аксесуары",
  "Электроника и техника",
  "Одежда",
  "Авто и мототовары",
];

const shops = [
  // Одежда
  { name: "ASOS", logo: img7, category: "Одежда" },
  { name: "ZARA", logo: img4, category: "Одежда" },
  { name: "H&M", logo: img8, category: "Одежда" },
  { name: "Uniqlo", logo: img9, category: "Одежда" },
  { name: "SSENSE", logo: img10, category: "Одежда" },
  { name: "Nike", logo: img11, category: "Одежда" },
  { name: "Adidas", logo: img12, category: "Одежда" },
  { name: "YOOX", logo: img2, category: "Одежда" },

  // Электроника и техника
  { name: "Amazon", logo: img5, category: "Электроника и техника" },
  { name: "eBay", logo: img1, category: "Электроника и техника" },
  { name: "Best Buy", logo: img13, category: "Электроника и техника" },
  { name: "Newegg", logo: img14, category: "Электроника и техника" },

  // Авто и мототовары
  { name: "McIntosh", logo: img6, category: "Авто и мототовары" },
  { name: "Bosch", logo: img15, category: "Авто и мототовары" },
  { name: "Goodyear", logo: img16, category: "Авто и мототовары" },

  // Аксесуары (бутики сумок и пр.)
  { name: "KITCHEN AID", logo: img3, category: "Аксесуары" },
  { name: "Le Creuset", logo: img17, category: "Аксесуары" },
  { name: "Swarovski", logo: img18, category: "Аксесуары" },
  { name: "Goyard", logo: img19, category: "Аксесуары" },
  { name: "Louis Vuitton", logo: img20, category: "Аксесуары" },
  { name: "Gucci", logo: img21, category: "Аксесуары" },
  { name: "Prada", logo: img22, category: "Аксесуары" },
  { name: "Chanel", logo: img23, category: "Аксесуары" },
  { name: "Hermès", logo: img24, category: "Аксесуары" },
  { name: "Michael Kors", logo: img25, category: "Аксесуары" },
];

const ShopCard = ({ name, logo }) => (
  <div className="bg-white rounded-xl shadow p-6 text-center hover:scale-105 transition-transform duration-300 w-full max-w-xs mx-auto">
    <img
      src={logo}
      alt={`${name} logo`}
      className="mx-auto mb-4 object-contain h-8"
    />
    <div className="font-bold text-gray-800 text-lg">{name}</div>
    <div className="text-sm text-gray-600 mt-2">
      Доставка: <strong>до 7 дней</strong>
    </div>
    <div className="text-sm text-gray-600">
      Комиссия <strong>0,68%</strong>
    </div>
  </div>
);

const CatalogPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const activeFilter = params.get("filter");

  const filteredShops = activeFilter
    ? shops.filter((shop) => shop.category === activeFilter)
    : shops;

  const clearFilter = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className="bg-[#F2F2F2] min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-4 border-l-4 border-red-600 pl-3">
          Каталог магазинов
        </h1>

        {/* Фильтры */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-2 mb-6 overflow-x-auto scrollbar-hide">
          {filters.map((filter, i) => {
            const isActive = filter === activeFilter;
            const to = `/?filter=${encodeURIComponent(filter)}`;

            return (
              <Link
                key={i}
                to={to}
                className={`text-sm px-4 py-1 rounded-full whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {filter}
              </Link>
            );
          })}

          {activeFilter && (
            <button
              onClick={clearFilter}
              className="ml-auto text-sm text-gray-500 hover:underline"
            >
              Очистить фильтр
            </button>
          )}
        </div>

        {/* Карточки магазинов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredShops.length > 0 ? (
            filteredShops.map((shop, i) => (
              <ShopCard key={i} name={shop.name} logo={shop.logo} />
            ))
          ) : (
            <div className="text-gray-700 col-span-full text-center">
              Магазины не найдены
            </div>
          )}
        </div>
      </div>

      {/* Информационный блок доставки */}
      <section className="min-h-screen bg-gradient-to-r from-red-100 via-white to-blue-100 flex items-center justify-center px-4 py-10">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full text-center border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Доставка из любых магазинов мира
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Компания{" "}
            <span className="text-red-600 font-semibold">Uzbekistan24</span>{" "}
            осуществляет доставку из любого магазина, поставщика или
            производителя из любых стран, которые отправляют товары курьером в
            Узбекистан.
          </p>

          <p className="mt-8 text-gray-600 text-lg leading-relaxed">
            Также{" "}
            <span className="text-red-600 font-semibold">Uzbekistan24</span>{" "}
            предлагает доставку из любых стран напрямую в Узбекистан — быстро,
            удобно и выгодно.
          </p>

          <div className="mt-10">
            <Link to="/Deliver">
              <button className="px-6 py-3 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition">
                Подробнее о доставке
              </button>
            </Link>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default CatalogPage;
