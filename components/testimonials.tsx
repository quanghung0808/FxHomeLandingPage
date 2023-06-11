import Image from 'next/image'

import TestimonialImage01 from '@/public/images/picture1.jpg'
import TestimonialImage02 from '@/public/images/picture2.jpg'
import TestimonialImage03 from '@/public/images/picture2.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
       

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <Image className="flex flex-col h-full" src={TestimonialImage01} alt="logo" />

            <Image className="flex flex-col h-full" src={TestimonialImage02} alt="logo" />
            <Image className="flex flex-col h-full" src={TestimonialImage03} alt="logo" />

          

          </div>

        </div>
      </div>
    </section>
  )
}
