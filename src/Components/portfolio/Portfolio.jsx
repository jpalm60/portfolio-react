import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/AmazonPrime.png'
import IMG2 from '../../Assets/AggieFinal2.jpg'
import IMG3 from '../../Assets/soleismine.png'
import IMG4 from '../../Assets/portfolio2.jpg'
import IMG5 from '../../Assets/portfolio3.jpg'
import IMG6 from '../../Assets/portfolio5.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Prime-Points-2.0',
    github: 'https://github.com/cacwilliams7/prime-points-2.0',
    demo: 'https://github.com/cacwilliams7/prime-points-2.0/blob/master/src/index.html'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Aggie Coin',
    github: 'https://github.com/jpalm60/Aggie-Coin',
    demo: 'https://github.com/jpalm60/Aggie-Coin/tree/main/test'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Sneaker Wordpress Website',
    github: 'https://github.com/cacwilliams7/prime-points-2.0',
    demo: 'https://www.thesolemine.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Coming Soon!',
    github: 'https://github.com/cacwilliams7/prime-points-2.0',
    demo: 'https://github.com/cacwilliams7/prime-points-2.0/blob/master/src/index.html'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Coming Soon!',
    github: 'https://github.com/cacwilliams7/prime-points-2.0',
    demo: 'https://github.com/cacwilliams7/prime-points-2.0/blob/master/src/index.html'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Coming Soon!',
    github: 'https://github.com/cacwilliams7/prime-points-2.0',
    demo: 'https://github.com/cacwilliams7/prime-points-2.0/blob/master/src/index.html'
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
            )

          })
        }
      </div>
    </section>
  )
}

export default Portfolio