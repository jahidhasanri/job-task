import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0F59B9] xl:h-125.25  xl:max-w-360 mx-auto text-white mt-20">
      {/* Top Footer */}
      <div className="  grid gap-10 
                      xl:grid-cols-4 md:grid-cols-2 grid-cols-1">

        {/* Brand Info */}
        <div>
          <h2 className="text-[24px] font-bold xl:mt-20 xl:ml-33.75 xl:mb-21.25">BuyBee</h2>
          <p className="text-[14px] xl:w-71.25 leading-relaxed opacity-90 xl:ml-26.75 xl:mb-5.5 xl:mr-21.25">
            BuyBee is your one-stop destination for all electronics, fashion,
            and lifestyle products. We connect quality sellers with smart
            buyers — fast, secure, and reliable shopping.
          </p>

          <h3 className="text-[24px] xl:ml-26.75 font-bold  mb-3">
            Check Our App on
          </h3>

          <div className="flex gap-3 xl:ml-26.75 mt-4">
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
        <div>
          <h3 className="text-[20px] font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-[14px] opacity-90">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Shop</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
            <li className="hover:underline cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-[20px] font-semibold mb-5">
            Customer Support
          </h3>
          <ul className="space-y-3 text-[14px] opacity-90">
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
        <div>
          <h3 className="text-[20px] font-semibold mb-5">
            Contact & Follow Us
          </h3>
          <ul className="space-y-3 text-[14px] opacity-90">
            <li>Email: support@buybee.com</li>
            <li>Phone: +8801XXXXXXXXX</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20"></div>

      {/* Bottom Footer */}
      <div className="text-center py-6 text-[14px] opacity-90">
        © 2025 BuyBee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
