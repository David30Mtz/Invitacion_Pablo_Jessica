import { useState } from "react"
import { motion } from "motion/react"
import { HeartHandshake, Send } from "lucide-react"

import "./Rsvp.css"

const options = [
  "Sí, ahí estaré",
  "No podré asistir pero los llevo en mi corazón",
]

function Rsvp() {
  const [nombre, setNombre] = useState("")
  const [respuesta, setRespuesta] = useState("")
  const [error, setError] = useState("")

  const confirmarAsistencia = () => {
    if (!nombre.trim()) {
      setError("Por favor escribe tu nombre.")
      return
    }

    if (!respuesta) {
      setError("Por favor selecciona una opción.")
      return
    }

    setError("")

    const telefono = "524776128719"

    const mensaje = `
Hola, somos invitados de la boda de Pablo & Jessica 💍

Mi nombre es: ${nombre}

Confirmación:
${respuesta}

¡Gracias! 🤍
    `.trim()

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`

    window.open(url, "_blank")
  }

  return (
    <section className="rsvp">
      <motion.div
        className="rsvp__content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9 }}
      >
        <div className="rsvp__icon">
          <HeartHandshake size={26} strokeWidth={1.5} />
        </div>

        <p className="rsvp__eyebrow">
          Confirmación de asistencia
        </p>

        <h2>Nos encantará contar contigo</h2>

        <p className="rsvp__question">
          ¿Podrás acompañarnos en nuestro gran día?
        </p>

        <div className="rsvp__form">
          <label className="rsvp__label">
            Tu nombre
          </label>

          <input
            className="rsvp__input"
            type="text"
            placeholder="Escribe tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <div className="rsvp__options">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                className={`rsvp__option ${
                  respuesta === option
                    ? "rsvp__option--selected"
                    : ""
                }`}
                onClick={() => {
                  setRespuesta(option)
                  setError("")
                }}
              >
                <span className="rsvp__radio">
                  {respuesta === option && (
                    <span className="rsvp__radio-dot" />
                  )}
                </span>

                {option}
              </button>
            ))}
          </div>

          {error && (
            <p className="rsvp__error">
              {error}
            </p>
          )}

          <button
            type="button"
            className="rsvp__button"
            onClick={confirmarAsistencia}
          >
            <Send size={17} />
            Confirmar por WhatsApp
          </button>
        </div>

        <p className="rsvp__note">
          Al confirmar serás redirigido a WhatsApp.
        </p>
      </motion.div>
    </section>
  )
}

export default Rsvp