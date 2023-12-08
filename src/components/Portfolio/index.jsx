import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // console.log(portfolioData)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  })

  // let funcionAuxiliar = () =>
  //   setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000);

  // useEffect(() => {
  //   funcionAuxiliar()
  // }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {
          portfolio.map(({ cover, title, description, url }, idx) => {
            return (
              <div className="image-box" key={idx}>
                <img 
                  src={cover} 
                  className="portfolio-image"
                  alt="portfolio" />
                  <div className="content">
                    <p className="title">{title}</p>
                    <h4 className='description'>{description}</h4>
                    <button
                    className="btn"
                    onClick={() => window.open(url)}
                    >View</button>
                  </div>
              </div>
            )
          })
        }
      </div>
    )
  }


  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
