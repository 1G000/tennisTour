import React from "react";
import { useState } from "react";
import rosterStyles from "../components/Roster/Roster.module.scss";
import Card from "../components/Card";
import { men, women } from "../components/Data/Players";

const Roster = () => {
  const [menRoster, setMenRoster] = useState(false);
  const [womenRoster, setWomenRoster] = useState(false);

  const showMenRoster = () => {
    if (!menRoster) {
      setMenRoster(true);
      setWomenRoster(false);
    } else setMenRoster(false);
  };
  const showWomenRoster = () => {
    if (!womenRoster) {
      setWomenRoster(true);
      setMenRoster(false);
    } else setWomenRoster(false);
  };

  return (
    <main>
      <div className={rosterStyles.btnArea}>
        <button
          className={rosterStyles.btnMen}
          id={menRoster ? rosterStyles.checkedMen : ""}
          onClick={showMenRoster}
        >
          <h4>Мужчины</h4>
        </button>
        <button
          className={rosterStyles.btnWomen}
          id={womenRoster ? rosterStyles.checkedWomen : ""}
          onClick={showWomenRoster}
        >
          <h4>Женщины</h4>
        </button>
      </div>
      {(menRoster || (!menRoster && !womenRoster)) && (
        <div className={rosterStyles.cardsArea}>
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
      )}
      {(womenRoster || (!womenRoster && !menRoster)) && (
        <div className={rosterStyles.cardsArea}>
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
      )}
    </main>
  );
};
export default Roster;
