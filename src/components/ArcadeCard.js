import React from "react";

function ArcadeCard(props) {
  //console.log(props.arcade.id);
  return (
    <div key={props.arcade.id} className="arcadeCard">
      <p>{props.arcade.arcadename}</p>
      <p>{props.arcade.arcadestreet}</p>
      <p>
        {props.arcade.arcadetown}, {props.arcade.arcadestate}{" "}
        {props.arcade.arcadezipcode}
      </p>
      {props.arcade.distance ? <p>{props.arcade.distance}</p> : <p />}
    </div>
  );
}

export default ArcadeCard;
