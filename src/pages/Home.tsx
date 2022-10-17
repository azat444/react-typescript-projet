import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export interface IHomePageProps {}

const date = new Date();

console.log(dayjs().format("HH:mm:ss"), "//24 hours time");

console.log(
  dayjs().format("h:m:s a"),
  "//12 hours time with AM/PM and signle digit"
);

console.log(
  dayjs().format("hh:mm:ss A"),
  "//12 hours time with AM/PM and double"
);

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div>
      <p>Voici l'accueil</p>
      <p>
        <Link to="/about">Clique sur la liste !</Link>
      </p>
    </div>
  );
};

export default HomePage;
