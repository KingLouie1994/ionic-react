import React from "react";
import { IonCard, IonCardContent } from "@ionic/react";

import "./BmiResults.css";

const BmiResults: React.FC<{ result: number }> = (props) => {
  return (
    <IonCard id="results" className="ion-text-center">
      <IonCardContent>
        <h2>Your Body-Mass-Index</h2>
        <h3>{props.result.toFixed(2)}</h3>
      </IonCardContent>
    </IonCard>
  );
};

export default BmiResults;
