import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export interface IHomePageProps {}

function handleClick() {
  console.log(dayjs().format("MMM, ddd D. h:mm A"));
}
const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div>
      <p>Voici l'accueil</p>
      <p>
        <Link to="/about">Clique sur la liste !</Link>
      </p>
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default HomePage;
