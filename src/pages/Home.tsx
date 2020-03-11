import { 
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react';

import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [input] = useState<string>('')

  useEffect(() => {
    console.log(input)
  }, [input])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic-React App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton routerLink="/login">Login</IonButton>
        <IonButton routerLink="/register" color="secondary">Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
