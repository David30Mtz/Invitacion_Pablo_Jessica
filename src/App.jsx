import { useRef, useState } from "react"
import { AnimatePresence } from "motion/react"
import { Volume2, VolumeX } from "lucide-react"

import "./App.css"
import Intro from "./components/Intro/Intro"
import Envelope from "./components/Envelope/Envelope"
import Hero from "./components/Hero/Hero"
import Countdown from "./components/Countdown/Countdown"
import Story from "./components/Story/Story"
import EventInfo from "./components/EventInfo/EventInfo"
import StayInfo from "./components/StayInfo/StayInfo"
import DressCode from "./components/DressCode/DressCode"
import Rsvp from "./components/Rsvp/Rsvp"

import music from "./assets/audio/musica.mp3"

function App() {
  const [step, setStep] = useState("intro")
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef(null)

  const openInvitation = () => {
    setStep("envelope")

    if (audioRef.current) {
      audioRef.current.volume = 0.3

      audioRef.current.play().catch((error) => {
        console.log("No fue posible reproducir el audio:", error)
      })
    }
  }

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (audioRef.current.paused) {
      audioRef.current.play()
      setIsMuted(false)
    } else {
      audioRef.current.pause()
      setIsMuted(true)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={music}
        loop
        preload="auto"
      />

      <AnimatePresence mode="wait">
        {step === "intro" && (
          <Intro
            key="intro"
            onOpen={openInvitation}
          />
        )}

        {step === "envelope" && (
          <Envelope
            key="envelope"
            onFinish={() => setStep("content")}
          />
        )}

        {step === "content" && (
          <main key="content" className="invitation-content">
            <div className="invitation-block invitation-block--dark">
              <Hero />
              <Story />
            </div>

            <div className="invitation-block invitation-block--light">
              <Countdown />
              <EventInfo />
              <StayInfo />
              <DressCode />
              <Rsvp />
            </div>
          </main>
        )}
      </AnimatePresence>

      {step !== "intro" && (
        <button
          className="music-button"
          onClick={toggleMusic}
          aria-label={isMuted ? "Reproducir música" : "Pausar música"}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      )}
    </>
  )
}

export default App
