import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Swal from 'sweetalert2'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  let funcionAuxiliar = () =>
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

  useEffect(() => {
    funcionAuxiliar()
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_0l541pm',
        'template_pjno36a',
        refForm.current,
        'OqLPBjtMYfx4yul-S'
      )
      .then(
        () => {
          Swal.fire('Good job!', 'Message succesfully sent!', 'success')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again!')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'á', 'c', 't', 'a', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Estoy interesado en oportunidades tanto en relación de dependencia
            como Freelance. Sin embargo, si tienes alguna consulta, no dudes en
            contactarme utilizando el siguiente formulario.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Nombre" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Asunto"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Mensaje"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="ENVIAR" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Juan Quino,
          <br />
          Argentina,
          <br />
          Juan José Castelli, Chaco <br />
          <span>quinojuan@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-25.9453164, -60.6235763]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-25.9453164, -60.6235763]}>
              <Popup>
                Juan Quino lives here, come over for a cup of coffee!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
