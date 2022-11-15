import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  let funcionAuxiliar = () =>
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

  useEffect(() => {
    funcionAuxiliar()
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus, dignissimos officia labore officiis perferendis atque
          laboriosam iure nulla alias nesciunt voluptatibus magni obcaecati
          omnis, iste eos explicabo in! Adipisci, suscipit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus, dignissimos officia labore officiis perferendis atque
        </p>
        <p>
          laboriosam iure nulla alias nesciunt voluptatibus magni obcaecati
          omnis, iste eos explicabo in! Adipisci, suscipit?
        </p>
      </div>
    </div>
  )
}

export default About
