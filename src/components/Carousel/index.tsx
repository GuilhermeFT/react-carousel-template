/* eslint-disable indent */
/* eslint-disable multiline-ternary */
import { ReactNode, useState } from 'react'

import styles from './styles.module.scss'

interface CarouselProps {
  children: ReactNode[] | ReactNode
}
export function Carousel({ children }: CarouselProps) {
  const numberOfChildren = children.length
  const [currentChild, setCurrentChild] = useState(0)

  function handleToPrevious() {
    if (currentChild === 0) {
      setCurrentChild(numberOfChildren - 1)
    } else {
      setCurrentChild(currentChild - 1)
    }
  }
  function handleToNext() {
    if (currentChild === numberOfChildren - 1) {
      setCurrentChild(0)
    } else {
      setCurrentChild(currentChild + 1)
    }
  }
  return (
    <div className={styles.container}>
      {numberOfChildren > 1 ? (
        <button
          aria-label="Voltar para o banner anterior"
          onClick={handleToPrevious}
        >
          <svg viewBox="0 0 451.847 451.847">
            <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" />
          </svg>
        </button>
      ) : null}

      {numberOfChildren > 1
        ? children.map((child, index) =>
            index === currentChild ? child : null
          )
        : children}

      {numberOfChildren > 1 ? (
        <button
          aria-label="Avançar para o banner posterior"
          onClick={handleToNext}
        >
          <svg viewBox="0 0 451.847 451.847">
            <path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z" />
          </svg>
        </button>
      ) : null}
    </div>
  )
}
