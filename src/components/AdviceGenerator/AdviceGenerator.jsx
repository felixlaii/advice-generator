import React, { useState } from "react";
import axios from "axios";
import { adviceEndPoint } from "../../utils/adviceApi";

function AdviceGenerator() {
  const [advice, setAdvice] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchAdvice = (e) => {
    axios
      .get(`${adviceEndPoint}`)
      .then((response) => {
        setAdvice(response.advice);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="advice-gen">
      <button
        className="advice-gen__button"
        onChange={(e) => fetchAdvice(e.target.value)}
      >
        randomize
      </button>
    </div>
  );
}

export default AdviceGenerator;
