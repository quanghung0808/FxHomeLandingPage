export const metadata = {
  title: "Sign In - Open PRO",
  description: "Page description",
};

import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Form */}
          <div className="max-w-sm mx-auto" style={{textAlign: "-webkit-center"}}>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Check_green_circle.svg/2048px-Check_green_circle.svg.png" width={200} height={200} alt="abc"/>
          </div>
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 text-lime-500">Thanh toán thành công</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
