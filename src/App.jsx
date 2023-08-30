
import { useState } from 'react'
import './App.css'
import BtnQuote from './assets/components/BtnQuote'
import Quote from './assets/components/Quote'
import phrases from './utils/pharse.json'
import getRamdomElemArray from './utils/getRandomElemArray'

function App() {

const phraseRamdom = getRamdomElemArray(phrases)
const numberRandom = getRamdomElemArray([1, 2, 3, 4])

const [quote, setQuote] = useState(phraseRamdom)
const [numberBG, setNumberBG] = useState(1)

const bgStyle = {
  backgroundImage: `url(/fondo${numberRandom}.jpg)`
}

  

  return (
  <div className='container' style={bgStyle}>
      <h1 className='container_phase'>Galleta de la fortuna</h1>
      <Quote phrase={quote} />
      <BtnQuote setQuote={setQuote} 
      phrases={phrases}
      setNumberBg={setNumberBG}
      />
  </div>
 
  )
}

export default App
