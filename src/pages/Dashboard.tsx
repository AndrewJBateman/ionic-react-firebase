import { 
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLoading
} from '@ionic/react'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { logoutUser } from '../firebaseConfig'
import { useHistory } from 'react-router'
import words from '../wordlist'

import './Dashboard.css'

const Dashboard: React.FC = () => {
  const username = useSelector((state: any) => state.user.username)
  const [busy, setBusy] = useState(false)
  const history = useHistory()

  async function logout() {
    setBusy(true)
    await logoutUser()
    setBusy(false)
    history.replace('/')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonLoading message="Logging out.." duration={0} isOpen={busy} />
        {words.slice(0, 10).map(word => (
          <span className="word">{word}</span>
        ))}
        <p>Hello {username}</p>
        <IonButton onClick={logoutUser}>Logout</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Dashboard