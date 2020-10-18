import React from "react";
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";

const InputControls: React.FC = () => {
  return (
    <IonSegment>
      <IonSegmentButton>
        <IonLabel>m/kg</IonLabel>
      </IonSegmentButton>
      <IonSegmentButton>
        <IonLabel>ft/lbs</IonLabel>
      </IonSegmentButton>
    </IonSegment>
  );
};

export default InputControls;
