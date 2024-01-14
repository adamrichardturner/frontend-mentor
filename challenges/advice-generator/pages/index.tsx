import { Manrope } from 'next/font/google'
import Generator from '@/components/Generator'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '800']
})

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-4 bg-neutral-dark-blue ${manrope.className}`}
    >
      <Generator />
    </main>
  )
}
