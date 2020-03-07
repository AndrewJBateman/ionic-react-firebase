import { IonContent, IonHeader, IonPage, IonList, IonTitle, IonToolbar, IonItem, IonAvatar, IonLabel, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
import React from 'react';
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
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello World</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
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
