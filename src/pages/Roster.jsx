import React from "react";
import rosterStyles from "../components/Roster/Roster.module.scss";
import Card from "../components/Card";
import players from "../components/Data/Players";

const Roster = () => {
  return (
    <>
      <div className={rosterStyles.imgArea}>
        <div className={rosterStyles.imgAreaLeft}>
          <h4>Мужчины</h4>
        </div>
        <div className={rosterStyles.imgAreaRight}>
          <h4>Женщины</h4>
        </div>
      </div>
      <div className={rosterStyles.cardsArea}>
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
    </>
  );
};

export default Roster;
