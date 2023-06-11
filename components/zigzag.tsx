import Image from "next/image";

import FeatImage01 from "@/public/images/chplay.png";
// import FeatImage02 from "@/public/images/features-03-image-02.png";
// import FeatImage03 from "@/public/images/features-03-image-03.png";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-yellow-600 bg-yellow-200 rounded-full mb-4">
              Dùng thử miễn phí
            </div>
            <h1 className="h2 mb-4 text-yellow-400">Tải về ngay</h1>
          </div>

          <a href="/#">
            <Image  style={{border: "solid 2px black"}}
              className="max-w-full mx-auto md:max-w-none h-auto"
              src={FeatImage01}
              width={500}
              height={405}
              alt="Features 01"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
