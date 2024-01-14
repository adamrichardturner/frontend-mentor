import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

interface Advice {
  id: number
  advice: string
}

const Generator: FC = () => {
  const [advice, setAdvice] = useState<Advice | null>(null)

  const getAdvice = async () => {
    try {
      const res = await fetch('https://api.adviceslip.com/advice')
      if (!res.ok) {
        throw new Error('Network response was not ok ' + res.statusText)
      }
      const data = await res.json()
      return data.slip
    } catch (err) {
      console.error(err)
    }
  }

  const handleClick = async () => {
    const adviceData = await getAdvice()
    if (adviceData) {
      setAdvice(adviceData)
    }
  }

  useEffect(() => {
    const updateAdvice = async () => {
      const adviceData = await getAdvice()
      if (adviceData) {
        setAdvice(adviceData)
      }
    }
    updateAdvice()
  }, [])

  return (
    <section className="rounded-lg relative max-w-2xl space-y-6 bg-neutral-dark-grayish-blue w-full md:w-1/3 pt-8 pl-8 pr-8 pb-0 flex flex-col items-center place-content-evenly text-center">
      {advice ? (
        <>
          <h3 className="text-primary-neon-green uppercase font-semibold font-manrope text-sm">
            Advice #{advice.id}
          </h3>
          <h1 className="text-primary-light-cyan font-bold text-2xl pt-0 mt-0">
            {advice.advice}
          </h1>
        </>
      ) : (
        <h3 className="text-primary-light-cyan font-bold text-2xl pt-0 mt-0">
          Loading...
        </h3>
      )}
      <div>
        <div className="block md:hidden relative w-full h-12 imageContainer">
          <Image
            src="/images/pattern-divider-mobile.svg"
            alt="Pattern Divider Mobile"
            fill
            priority
            style={{
              width: '100%'
            }}
          />
        </div>

        <div className="hidden md:block relative w-full imageContainer">
          <Image
            src="/images/pattern-divider-desktop.svg"
            alt="Pattern Divider Desktop"
            fill
            priority
            style={{
              width: '100%'
            }}
          />
        </div>
      </div>

      <div
        className="hover:shadow-md hover:shadow-primary-neon-green mt-0 m-0 p-0 top-6 bg-primary-neon-green cursor-pointer w-12 h-12 flex items-center justify-center rounded-full relative"
        onClick={handleClick}
      >
        <Image
          src="/images/icon-dice.svg"
          alt="Dice Button"
          width={20}
          height={20}
        />
      </div>
    </section>
  )
}

export default Generator
