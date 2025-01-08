import React from "react";
import Flower from "/assets/images/flower.jpg";

import { Link } from 'react-router-dom';

const Hero = () => {
    return (
      <section className="h-[880px] bg-no-repeat bg-cover bg-center py-24 items-center bg-yellow-50">
        <div className="container mx-auto flex justify-around">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="font-semibold flex items-center uppercase">
              <div className="w-10 h-[2px] bg-red-500 mr-3"></div>Cologne shop
            </div>
            <h1 className="text-[70px] leading-[1.1] font-light mb-4">
              Discover the perfect fragrance that suits your style and
              personality <br />
              <span className="font-semibold">Fragrance</span>
            </h1>
            <Link
              to={"/"}
              className="font-semibold self-start uppercase border-b-2 border-black"
            >
              Explore More
            </Link>
          </div>
          <div className="hidden lg:block">
            {/* <img
              src={Flower}
              alt=""
              className="w-[600px] h-auto"
            />*/}            
          </div>
        </div>
      </section>
    );
};

export default Hero