import { useState } from 'react'



function App() {
  const [Mitexto, setMitexto] = useState()

const handleText = (event) => {
const valordeltexto = event.target.value
setMitexto(valordeltexto)
}

return (
  <div>
    <div>
      Capture su texto
    </div>
    <input onChange={handleText}/>
    <h3>Su Texto</h3>
    <p>
      {Mitexto}
    </p>
  </div>
);
}

export default App
