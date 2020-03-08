import { 
  IonContent, IonHeader, IonPage, IonList, 
  IonTitle, IonToolbar, IonItem, IonAvatar, 
  IonLabel, IonItemSliding, IonItemOptions, IonItemOption, 
  IonButton, IonIcon, IonInput 
} from '@ionic/react';

import { star } from 'ionicons/icons';

import React, { useState, useEffect } from 'react';
import './Home.css';

const arr = [
  {
    name: 'Finn',
    desc: 'great guy'
  },
  {
    name: 'Han',
    desc: 'Funny guy'
  },
  {
    name: 'Rey',
    desc: 'Superb guy'
  },
  {
    name: 'Luke',
    desc: 'Messy guy'
  }
]

const Home: React.FC = () => {

  const [input, setInput] = useState<string>('')
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('input', input)
  }, [input])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello World</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand="full" color="primary">
          <IonIcon slot="start" icon={star}></IonIcon>
          Heloooo
        </IonButton>

        <IonInput
          value={input}
          onIonChange={(e: any) => setInput(e.target.value)}>
        </IonInput>


        <IonList>
          {arr.map(elem => (
            <IonItemSliding key={elem.name}>
              <IonItem>
                <IonAvatar>
                  <img
                    src={`https://ionicframework.com/docs/demos/api/list/avatar-${elem.name.toLowerCase()}.png`}
                    alt="logo"
                  />
                </IonAvatar>

                <IonLabel className="ion-padding">
                  <h2>{elem.name}</h2>
                  <h3>{elem.desc}</h3>
                </IonLabel>
              </IonItem>
              <IonItemOptions side="start">
                <IonItemOption onClick={() => alert('You pressed the delete key!')}>Delete</IonItemOption>
              </IonItemOptions>

            </IonItemSliding>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
