import { 
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonLoading
} from '@ionic/react';

import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../firebaseConfig';
import { toast } from '../toast';
import { setUserState } from '../redux/actions';
import { useDispatch } from 'react-redux';

const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function login() {
    setBusy(true)
    const res: any = await loginUser(username, password)
    if (res) {
      console.log('login res', res)
      dispatch(setUserState(res.user.email))
      history.replace('/dashboard')
      toast('You have logged in')
    }
    setBusy(false)
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait.." duration={0} isOpen={busy} />
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Username?"
          onIonChange={(e: any) => setUsername(e.target.value)} />
        <IonInput
          type="password"
          placeholder="Password?"
          onIonChange={(e: any) => setPassword(e.target.value)} />
        <IonButton onClick={login}>Login</IonButton>

        <p>
          New here? <Link to="/register">Register</Link>
        </p>
      </IonContent>
    </IonPage>
  )
}

export default Login;