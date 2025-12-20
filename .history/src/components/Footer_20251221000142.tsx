import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0F59B9]    text-white mt-18.75">
      <div className="xl:max-w-360 mx-auto">
      <div className="  grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1">

        {/* Brand Info */}
        <div className="mt-6 ml-2 mr-2 xl:mt-0 xl:ml-0 xl:mr-0">
          <h2 className="text-[24px]  font-bold xl:mt-20 xl:ml-33.75 xl:mb-21.25 xl:w-29.5 h-6 mb-5 ">BuyBee</h2>
          <p className="text-[14px]  xl:w-71.25 leading-relaxed opacity-90 xl:ml-26.75 mb-5 xl:mb-5.5 ">
            BuyBee is your one-stop destination for all electronics, fashion,
            and lifestyle products. We connect quality sellers with smart
            buyers — fast, secure, and reliable shopping.
          </p>

          <h3 className="text-[24px] xl:ml-26.75 font-bold  mb-3">
            Check Our App on
          </h3>

          <div className="flex gap-3 xl:ml-26.75 mt-5 mb-8 xl:mb-0">
            <Image
              src="/Frame 888.png"
              alt="Google Play"
              width={120}
              height={40}
              className="cursor-pointer"
            />
            <Image
              src="/AppStore.png"
              alt="App Store"
              width={120}
              height={40}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="xl:w-63.75 xl:h-38.5  xl:mt-31.5 xl:ml-29.25 ml-2 xl:mb-0">
          <h3 className="text-[20px] font-semibold mb-5">Quick Links</h3>
          <ul className="ml-3 text-[14px] opacity-90">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Shop</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="xl:w-66 xl:mt-29.75 ml-2 mt-8 xl:mb-0">
          <h3 className="text-[20px] font-semibold mb-5">
            Customer Support
          </h3>
          <ul className="ml-3 text-[14px] opacity-90">
            <li className="hover:underline cursor-pointer">Help Center</li>
            <li className="hover:underline cursor-pointer">
              Shipping & Delivery
            </li>
            <li className="hover:underline cursor-pointer">
              Return & Refund Policy
            </li>
            <li className="hover:underline cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:underline cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="xl:w-73.25 xl:mt-29 ml-2 xl:ml-0  mt-10 xl:mt-0">
          <h3 className="text-[20px] font-semibold mb-5">
            Contact & Follow Us
          </h3>
          <ul className=" ml-3 text-[14px] opacity-90">
            <li>Email: support@buybee.com</li>
            <li>Phone: +8801XXXXXXXXX</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mb-10 -mt-4.5"></div>

      {/* Bottom Footer */}
      <div className="text-center py-6 text-[14px] pb-7 opacity-90">
        © 2025 BuyBee. All rights reserved.
      </div>
      </div>
      {/* Top Footer */}
      
    </footer>
  );
};

export default Footer;
