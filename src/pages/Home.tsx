import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  // program to display time every 5 seconds
  function showTime() {
    // return new date and time
    let dateTime = new Date();

    // return the time
    let time = dateTime.toLocaleTimeString();

    console.log(time);
  }

  let display = setInterval(showTime, 5000);

  return (
    <div>
      <p>Voici l'accueil</p>
      <p>
        <Link to="/about">Clique sur la liste !</Link>
      </p>

      <p>{dayjs().format(" dddd . h:mm A")}</p>
    </div>
  );
};

export default HomePage;
