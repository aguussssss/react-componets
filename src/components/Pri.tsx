import { useState } from "react"

function Pri() {
  const [Texto, setTexto] = useState (true)
  const cambio = () => 
  {
    setTexto(!Texto)
  }
  return (
    <div>
      <button onClick={cambio}> {Texto ? '¡Soy un boton!' : '!notob yoS¡'} </button>
    </div>
  )
}
export default Pri