import { motion } from "motion/react"
import {
  CalendarDays,
  Clock3,
  MapPin,
  Navigation,
  Sparkles,
} from "lucide-react"

import "./EventInfo.css"

const events = [
  {
    type: "Ceremonia",
    date: "Sábado, 11 de diciembre de 2027",
    time: "3:30 PM",
    place: "Templo Nuestra Señora del Rosario en Salagua",
    address:
      "Gral. Lázaro Cárdenas 150, Salagua Centro, 28869 Manzanillo, Col.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Templo+Nuestra+Señora+del+Rosario+en+Salagua,+Gral.+Lázaro+Cárdenas+150,+Salagua+Centro,+28869+Manzanillo,+Col.",
    icon: Sparkles,
  },
  {
    type: "Celebración",
    date: "Sábado, 11 de diciembre de 2027",
    time: "7:00 PM",
    place: "Hotel Las Hadas by Brisas",
    address:
      "Manzanillo, Colima, 28867, México",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Hotel+Las+Hadas+by+Brisas,+Manzanillo,+Colima,+28867,+México",
    icon: MapPin,
  },
]

function EventCard({ event, index }) {
  const Icon = event.icon

  return (
    <motion.article
      className="event-card"
      initial={{
        opacity: 0,
        y: 55,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="event-card__glow" />

      <div className="event-card__icon">
        <Icon size={23} strokeWidth={1.4} />
      </div>

      <p className="event-card__eyebrow">
        {event.type}
      </p>

      <h3>{event.place}</h3>

      <div className="event-card__divider">
        <span />
        <div>✦</div>
        <span />
      </div>

      <div className="event-card__details">
        <div className="event-card__detail">
          <CalendarDays size={18} strokeWidth={1.5} />
          <span>{event.date}</span>
        </div>

        <div className="event-card__detail">
          <Clock3 size={18} strokeWidth={1.5} />
          <span>{event.time}</span>
        </div>

        <div className="event-card__detail">
          <MapPin size={18} strokeWidth={1.5} />
          <span>{event.address}</span>
        </div>
      </div>

      <a
        className="event-card__button"
        href={event.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Navigation size={16} />
        Ver ubicación
      </a>
    </motion.article>
  )
}

function EventInfo() {
  return (
    <section className="event-info">
      <div className="event-info__ambient event-info__ambient--one" />
      <div className="event-info__ambient event-info__ambient--two" />

      <motion.header
        className="event-info__header"
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.6,
        }}
        transition={{
          duration: 1,
        }}
      >
        <p className="event-info__eyebrow">
          Guarda la fecha
        </p>

        <h2>Detalles del evento</h2>

        <div className="event-info__line">
          <span />
          <div>♥</div>
          <span />
        </div>

        <p className="event-info__description">
          Nos encantará compartir contigo cada momento de este día tan especial.
        </p>
      </motion.header>

      <div className="event-info__cards">
        {events.map((event, index) => (
          <EventCard
            key={event.type}
            event={event}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default EventInfo