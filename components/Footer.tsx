import logo from "@/app/assests/images/logo.png";
import Image from "next/image";

const FooterPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center pt-12 text-black w-full h-full">
        <div className="flex-1">
          <div className=" mt-2">
            <Image alt="logo of wownex" src={logo} className="object-contain" />
          </div>
          <p className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-2xl">Contact Us </h1>
          <p className="flex flex-col text-black mt-8">
            <span>Call us 10Am-11Pm (Everyday)</span>
            <span>+8801710-696950</span>
            <span> info@wownex.com</span>
            <span>G3, Ground Floor, House# 307,</span>
            <span>Elephant Road, Pubali Bank Building,</span>
            <span>Dhaka-1205.</span>
          </p>
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-2xl">Information</h1>
          <p className="flex flex-col text-black mt-8">
            <span>Terms & Conditions</span>
            <span>Return & Refund Policy</span>
            <span>After-Sale Support</span>
            <span>Replacement Warranty</span>
            <span>Privacy Policy</span>
            <span>Shipping or Delivery</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
