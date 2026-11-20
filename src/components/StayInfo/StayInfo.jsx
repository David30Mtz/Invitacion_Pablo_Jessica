import { motion } from "motion/react"
import {
  BedDouble,
  Bus,
  Clock3,
  Hotel,
  Navigation,
} from "lucide-react"

import "./StayInfo.css"

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Hotel+Las+Hadas+by+Brisas,+Manzanillo,+Colima,+28867,+M%C3%A9xico"

const items = [
  {
    icon: Hotel,
    title: "Estancia del hotel",
    text: (
      <>
        Las Hadas
        <br />
        10, 11 y 12 de diciembre de 2027
      </>
    ),
  },
  {
    icon: BedDouble,
    title: "Habitación base doble",
    text: (
      <>
        Adultos: $8,890.00
        <br />
        Menores de 7 a 12 años: $2,940.00
      </>
    ),
  },
  {
    icon: Bus,
    title: "Transporte redondo",
    text: (
      <>
        León - Manzanillo
        <br />
        Manzanillo - León
      </>
    ),
  },
  {
    icon: Clock3,
    title: "Check-in / Check-out",
    text: (
      <>
        Check-in: 15:00 h
        <br />
        Check-out: 12:00 h
      </>
    ),
  },
]

function StayInfo() {
  return (
    <section className="stay-info">
      <motion.header
        className="stay-info__header"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <p className="stay-info__eyebrow">
          Hospedaje
        </p>

        <h2>
          Tu estancia en Las Hadas
        </h2>

        <p className="stay-info__description">
          Para quienes nos acompañarán durante el fin de semana,
          aquí están los datos importantes del hospedaje.
        </p>
      </motion.header>

      <div className="stay-info__grid">
        {items.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.article
              key={item.title}
              className="stay-info__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
            >
              <div className="stay-info__icon">
                <Icon
                  size={20}
                  strokeWidth={1.6}
                />
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>
            </motion.article>
          )
        })}
      </div>

      <motion.a
        className="stay-info__button"
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.9,
        }}
      >
        <Navigation size={16} />
        Ver hotel en Maps
      </motion.a>
    </section>
  )
}

export default StayInfo