import React from "react";
import cardStyles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={cardStyles.card}>
      <img src="/Images/Util/nophoto.png"></img>
      <ul>
        <li>{`${props.name}`}</li>
        <li>{`Дата рождения: ${props.birthDate}`}</li>
        <li>{`Начало карьеры: ${props.turnToProDate}`}</li>
        <li>{`Рука: ${props.powerHand}`}</li>
        <li>{`Бэкхенд: ${props.backhandStyle}`}</li>
        <li>{`Позиция в рейтинге: ${props.rankingPosition}`}</li>
      </ul>
    </div>
  );
};

export default Card;
