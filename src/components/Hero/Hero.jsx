import { motion } from "motion/react"
import { ChevronDown, Heart } from "lucide-react"

import "./Hero.css"

function Hero() {
  return (
    <motion.main
      className="hero"
      initial={{
        opacity: 0,
        scale: 1.08,
        filter: "blur(14px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="hero__background" />
      <div className="hero__overlay" />
      <div className="hero__grain" />

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.5,
        }}
      >
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Nuestra historia continúa frente al mar
        </motion.p>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, letterSpacing: "0.5rem" }}
          animate={{ opacity: 1, letterSpacing: "0.08rem" }}
          transition={{
            duration: 1.5,
            delay: 0.8,
          }}
        >
          Pablo
          <span>&</span>
          Jessica
        </motion.h1>

        <p className="hero__fullnames">
          Pablo Carranza Cruz · Jessica Noemí Muñoz Balderas
        </p>

        <motion.div
          className="hero__heart"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 130,
            delay: 1.4,
          }}
        >
          <Heart size={22} strokeWidth={1.3} />
        </motion.div>

        <motion.p
          className="hero__message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          Después de tantos momentos compartidos, queremos celebrar contigo
          el comienzo de una nueva etapa en nuestras vidas.
        </motion.p>

        <motion.div
          className="hero__event"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
        >
          <p>11 de diciembre de 2027</p>
          <span />
          <p>Manzanillo, Colima</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
      >
        <span>Descubre nuestra historia</span>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </motion.main>
  )
}

export default Hero
