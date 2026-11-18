import { motion } from "motion/react"

import "./Story.css"

const moments = [
  {
    year: "2021",
    title: "Todo comenzó",
    text: "Un 09 de junio del 2021 comenzó la historia de amor más bonita. Una conversación sencilla terminó convirtiéndose en el inicio de algo que ninguno de los dos esperaba.",
    image: "/images/story1.png",
  },
  {
    year: "Aventura",
    title: "Nuestra primera aventura juntos",
    text: "Descubrimos que viajar juntos era otra forma de conocernos, reírnos y crear recuerdos.",
    image: "/images/story2.png",
  },
  {
    year: "Compromiso",
    title: "El gran sí",
    text: "Entre nervios, emociones y muchas sonrisas, decidimos comenzar una nueva etapa juntos.",
    image: "/images/story3.png",
  },
]

function StoryCard({ moment, index }) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      className={`story-card ${isEven ? "story-card--left" : "story-card--right"}`}
      initial={{
        opacity: 0,
        x: isEven ? -70 : 70,
        rotate: isEven ? -2 : 2,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        rotate: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="story-card__photo"
        whileHover={{
          y: -8,
          rotate: isEven ? -1.5 : 1.5,
        }}
        transition={{
          duration: 0.35,
        }}
      >
        <img src={moment.image} alt={moment.title} />

        <span className="story-card__year">{moment.year}</span>
      </motion.div>

      <div className="story-card__content">
        <span className="story-card__number">0{index + 1}</span>

        <h3>{moment.title}</h3>

        <div className="story-card__line" />

        <p>{moment.text}</p>
      </div>
    </motion.article>
  )
}

function Story() {
  return (
    <section className="story">
      <div className="story__background-text">Historia</div>

      <motion.header
        className="story__header"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.6,
        }}
        transition={{
          duration: 1,
        }}
      >
        <p>Nuestros mejores momentos</p>

        <h2>Nuestra historia</h2>

        <div className="story__divider">
          <span />
          <div>✦</div>
          <span />
        </div>

        <p className="story__description">
          Algunos recuerdos que nos trajeron hasta este momento.
        </p>
      </motion.header>

      <div className="story__timeline">
        <div className="story__timeline-line" />

        {moments.map((moment, index) => (
          <StoryCard key={moment.title} moment={moment} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Story
