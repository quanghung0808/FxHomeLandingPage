export const metadata = {
  title: 'Fx Home',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Zigzag/>
    </>
  )
}
