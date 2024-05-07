import call from "@/app/assests/images/call.png";
import whatsApp from "@/app/assests/images/whatsApp.png";

import Image from "next/image";

const ContactHeading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-white py-8 px-2">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-12 lg:gap-16">
        <div className="flex justify-center items-center gap-2">
          <Image alt="call-us" src={call} />
          <h1 className="font-bold text-2xl lg:text-4xl text-black">Call Us</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image alt="call-us" src={whatsApp} />
          <h1 className="font-bold text-2xl lg:text-4xl text-black">
            Chat on WhatsApp
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactHeading;
