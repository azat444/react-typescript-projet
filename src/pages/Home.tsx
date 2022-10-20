import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {

  const [timer, setTimer] = useState(0);


  useEffect(() => {

    setInterval(() => {    
      setTimer(timer => timer + 5);
      
    }, 1000)

  },[] )


  
  return (
    <div>
      <p>Voici l'accueil</p>
      <p>
        <Link to="/about">Clique sur la liste !</Link>
      </p>

      <h1>{timer}  allez..: {dayjs().format("H[h] m[m] s[s]")} </h1>
    </div>
  );
};

export default HomePage;
