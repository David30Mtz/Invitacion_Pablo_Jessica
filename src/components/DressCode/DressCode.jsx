import { motion } from "motion/react"
import { Shirt, Sparkles } from "lucide-react"

import "./DressCode.css"

function DressCode() {
  return (
    <section className="dresscode-section">
      <div className="dresscode-section__wave dresscode-section__wave--one" />
      <div className="dresscode-section__wave dresscode-section__wave--two" />

      <motion.div
        className="dresscode-section__content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="dresscode-section__icon">
          <Shirt size={28} strokeWidth={1.4} />
        </div>

        <p className="dresscode-section__eyebrow">Código de vestimenta</p>
        <h2>Formal</h2>

        <div className="dresscode-section__divider">
          <span />
          <Sparkles size={15} strokeWidth={1.3} />
          <span />
        </div>

        <p className="dresscode-section__description">
          En esta ocasión, el color blanco, beige, azul cielo y tonos que se
          asemejen quedan reservados para los novios y damas de honor.
        </p>

        <div className="dresscode-section__colors">
          <div className="dresscode-section__color">
            <span className="dresscode-section__swatch dresscode-section__swatch--white" />
            <p>Blanco</p>
          </div>
          <div className="dresscode-section__color">
            <span className="dresscode-section__swatch dresscode-section__swatch--beige" />
            <p>Beige</p>
          </div>
          <div className="dresscode-section__color">
            <span className="dresscode-section__swatch dresscode-section__swatch--sky" />
            <p>Azul cielo</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default DressCode
