import getRamdomElemArray from "../../utils/getRandomElemArray"

const BtnQuote = ({setQuote, phrases,setNumberBg}) => {

const handleRandomPhrase = () => {
setQuote(getRamdomElemArray(phrases))
setNumberBg(getRamdomElemArray([1, 2, 3, 4]))
}


  return (
    <button className="container_btn" onClick={handleRandomPhrase}>Other phrase</button>
  )
  }

export default BtnQuote