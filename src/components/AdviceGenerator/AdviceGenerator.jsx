import { useState, useEffect } from "react"
import pauseMobile from "../../assets/images/pattern-divider-mobile.svg"
import pauseDesktop from "../../assets/images/pattern-divider-desktop.svg"
import dice from "../../assets/images/icon-dice.svg"
import { adviceEndPoint } from "../../utils/adviceApi";

function AdviceGenerator() {
  const [text, setText] = useState([]);

  const fetchAdvice = async () => {
    const res = await fetch(`${adviceEndPoint}`);
    const data = await res.json();

    setText(data.slip);
  };
  useEffect(() => {
      fetchAdvice()
  }, [])
  return (
    <div className="container">
      <h1>Advice #{text.id}</h1>
      <p>{text.advice}</p>

      <picture>
        <source media="(min-width: 768px)" srcSet={pauseDesktop} />
        <img src={pauseMobile} alt="" />
      </picture>

      <div>
        <button onClick={fetchAdvice}>
          <img src={dice} alt="" />
        </button>
      </div>
    </div>
  )
}

export default AdviceGenerator;
