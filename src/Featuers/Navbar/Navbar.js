import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserCartSlector } from "../Cart/CartSlice";
import SearchProduct from "../Products/Components/SearchProduct";
import { CiShop } from "react-icons/ci";

import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

import { useState } from "react";
import { PopupUser } from "../Icons/NavIcons";
import ProductCatogery from "../Products/Components/ProductCatogery";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { ServiceProvideCatogry } from "../Products/ProductsSlice";

// import { FaAngleDown } from "react-icons/fa";
export default function Navbar() {
  const cartLength = useSelector(UserCartSlector);
  const [hover, sethover] = useState(false);
  const images = useSelector(ServiceProvideCatogry);
  const handleMouseEnter = () => {
    sethover(true);
  };

  const handleMouseLeave = () => {
    sethover(false);
  };
  return (
    <div className="overflow-x-hidden">
      <div className="  bg-[#e9e6e6]">
        <div className="Frame4  w-full h-24  gap-6 sm:gap-12   items-center  justify-between  flex">
          <div className=" w-full sm:w-12 md:w-20  pl-1 md:ml-6">
            <img
              className=" "
              alt="Image2"
              src="https://cdn.pixabay.com/photo/2021/07/21/14/51/logo-6483207_1280.png"
            />
          </div>
          <SearchProduct />
          {/* //Login */}
          <div className=" flex  justify-between    w-full px-10 md:px-5 sm:px-0  sm:pr-3  mx-auto  items-center">
            <div className=" hidden   md:inline-flex items-center space-x-2">
              <FaRegUserCircle className="w-15 h-12 " />
              <p className="hidden lg:inline">Login</p>
            </div>
            {/* Cart*/}
            <div className="relative  hidden  cursor-pointer     md:inline-flex text-center  items-center font-['Inter'] space-x-2">
              <div className="absolute bottom-7 w-6 h-6  font-medium text-xl hover:w-10  animate-bounce hover:h-10 bg-yellow-400 rounded-full  left-4">
                {cartLength && cartLength.length}{" "}
              </div>

              <FaShoppingCart className="hover:w-10  hover:h-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300   w-15 h-12" />
              <Link to="/Cart">
                {" "}
                <p className="hidden lg:inline  ">Cart</p>
              </Link>
            </div>
            {/* Seller*/}
            <div className="hidden     md:inline-flex  items-center space-x-2  invisible sm:invisible  md:visible">
              <CiShop className="w-15 h-12    " />
              <p className="hidden lg:inline font-['Inter']">Become a seller</p>
            </div>
            {/* //Dot */}
            <div className="font-['Inter']  text-xl ">
              <BsThreeDotsVertical
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-15 h-12"
              />

              <div
                className={`absolute    ${
                  hover ? "visible " : "invisible "
                } hover:visible  top-14 right-4  text-gray-700 px-2 py-1 rounded-md shadow-md`}
              >
                {PopupUser.map((item, index) => (
                  <>
                    <Link to={`${item.Link}`}>
                      <div class="Group6 w-64 h-9 bg-white relative">
                        <div class="Frame w-6 h-6 px-1 py-1 left-[13px] top-[6px] absolute justify-center items-center inline-flex">
                          {item.Icon}
                        </div>
                        <div class="UserProfile left-[49px] top-[11px] absolute text-black text-xs font-normal font-['Inter']">
                          {item.Title}
                        </div>
                      </div>
                    </Link>
                  </>
                ))}
                <div class="Group6  w-64 h-9 bg-white  relative">
                  <Link to="/Cart">
                    <div class="Frame w-6 h-6 px-1 py-1 left-[13px] top-[6px] absolute justify-center items-center inline-flex">
                      <FaShoppingCart className="" />
                    </div>
                    <div class="UserProfile left-[49px] top-[11px] absolute text-black text-xs font-normal font-['Inter']">
                      Cart
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ///App */}
      <ProductCatogery />

      <Swiper
        className="mySwiper"
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {images &&
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                {/* Image */}
                <img
                  alt=""
                  className="w-full h-40 md:h-56 lg:h-64 bg-cover"
                  src={image.ImageSrc}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
