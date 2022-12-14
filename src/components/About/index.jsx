import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  let funcionAuxiliar = () =>
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

  useEffect(() => {
    funcionAuxiliar()
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'A',
                'c',
                'e',
                'r',
                'c',
                'a',
                ' ',
                'd',
                'e',
                ' ',
                'm',
                'í',
              ]}
              idx={15}
            />
          </h1>
          <p>
            Soy una persona muy comprometida con mi profesión y con la gente que
            me rodea. Soy un entusiasta de la tecnología, autodidacta por
            naturaleza y siempre queriendo explicar de forma sencilla lo
            difícil. Tengo un Background de Técnico en Computadoras y en Redes
            con 20 años de experiencia que me permite entender bien las
            necesidades del cliente final.
          </p>
          <p>
            🌿 Amante de las plantas, la naturaleza y disfrutar de la familia.
            💑
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#215732" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
