import React from "react";
import { useState } from "react";
import rosterStyles from "../components/Roster/Roster.module.scss";
import Card from "../components/Card";
import { players, men, women } from "../components/Data/Players";

const Roster = () => {
  const [menRoster, setMenRoster] = useState(false);
  const [womenRoster, setWomenRoster] = useState(false);

  const showMenRoster = () => {
    setMenRoster((current) => !current);
  };
  const showWomenRoster = () => {
    setWomenRoster((current) => !current);
  };

  return (
    <main>
      <div className={rosterStyles.btnArea}>
        <button className={rosterStyles.btnMen} onClick={showMenRoster}>
          <h4>Мужчины</h4>
        </button>
        <button className={rosterStyles.btnWomen} onClick={showWomenRoster}>
          <h4>Женщины</h4>
        </button>
      </div>
      <div
        className={rosterStyles.cardsArea}
        id={womenRoster || menRoster ? rosterStyles.hidden : ""}
      >
        {players.map((player) => (
          <Card
            key={player.id}
            name={player.name}
            imageUrl={player.imageUrl}
            birthDate={player.birthDate}
            turnToProDate={player.turnToProDate}
            powerHand={player.powerHand}
            backhandStyle={player.backhandStyle}
            rankingPosition={player.rankingPosition}
          />
        ))}
      </div>

      <div
        className={rosterStyles.cardsArea}
        id={menRoster ? "" : rosterStyles.hidden}
      >
        {men.map((player) => (
          <Card
            key={player.id}
            name={player.name}
            imageUrl={player.imageUrl}
            birthDate={player.birthDate}
            turnToProDate={player.turnToProDate}
            powerHand={player.powerHand}
            backhandStyle={player.backhandStyle}
            rankingPosition={player.rankingPosition}
          />
        ))}
      </div>

      <div
        className={rosterStyles.cardsArea}
        id={womenRoster ? "" : rosterStyles.hidden}
      >
        {women.map((player) => (
          <Card
            key={player.id}
            name={player.name}
            imageUrl={player.imageUrl}
            birthDate={player.birthDate}
            turnToProDate={player.turnToProDate}
            powerHand={player.powerHand}
            backhandStyle={player.backhandStyle}
            rankingPosition={player.rankingPosition}
          />
        ))}
      </div>
    </main>
  );
};

export default Roster;
