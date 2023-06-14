import Image from "next/image";

import TestimonialImage01 from "@/public/images/1.png";
import TestimonialImage02 from "@/public/images/2.png";
import TestimonialImage03 from "@/public/images/3.png";

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800 text-center ">
          {/* Section header */}
          <h1 className="h2 mb-8 text-yellow-400">Khám phá Fx Home</h1>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 lg:max-w-none place-items-center">
            {/* 1st testimonial */}
            <Image
              className="flex flex-col w-64 shadow-md shadow-black rounded-3xl"
              src={TestimonialImage01}
              alt="logo"
            />
            <Image
              className="flex flex-col w-64  shadow-md shadow-black rounded-3xl"
              src={TestimonialImage02}
              alt="logo"
            />
            <Image
              className="flex flex-col w-64  shadow-md shadow-black rounded-3xl"
              src={TestimonialImage03}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
