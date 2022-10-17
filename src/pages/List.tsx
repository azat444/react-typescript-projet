import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export interface IListPageProps {}

const ListPage: React.FunctionComponent<IListPageProps> = (props) => {
  const [message] = useState("");

  return (
    <div>
      <p>Pas de liste d'animaux mais c'est en cours</p>
      <p>{message}</p>
      <p>
        <Link to="/">Repars à l'accueil </Link>
      </p>
    </div>
  );
};

export default ListPage;
