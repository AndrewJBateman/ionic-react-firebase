import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonLoading,
  IonInput
} from '@ionic/react'
import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { logoutUser } from '../firebaseConfig'

import words from '../wordlist'

import './Dashboard.css'

type WordType = {
  word: string
  done: boolean
  correct: boolean
}

const Dashboard: React.FC = () => {
  const username = useSelector((state: any) => state.user.username)
  const [busy, setBusy] = useState(false)
  const [input, _setInput] = useState('')

  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const [removeIndex, setRemoveIndex] = useState(0)

  const [activeWordList, setActiveWordList] = useState<(null | WordType)[]>(words.slice(0, 10).map(word => ({ word, done: false, correct: false })))

  const inputRef = useRef<HTMLIonInputElement>(null)

  const history = useHistory()

  async function logout() {
    setBusy(true)
    await logoutUser()
    setBusy(false)
    history.replace('/')
  }

  function setInput(value: string) {
    if (inputRef.current) {
      inputRef.current.value = value
    }
  }

  function setInputValue(value: string) {
    if (value.trim() === '') {
      setInput('')
    } else if (value[value.length - 1] === ' ') {
      // do some processing with the input value
      setActiveWordList(list => {
        let wordBlocks: any = [...list]

        wordBlocks[activeWordIndex] = {
          ...wordBlocks[activeWordIndex],
          done: true,
          correct: wordBlocks[activeWordIndex].word === value.trim()
        }

        if (wordBlocks.length > 15) {
          wordBlocks[removeIndex] = null
          setRemoveIndex(count => ++count)
        } 

        setActiveWordIndex(count => ++count)

        wordBlocks.push({ word: words[wordBlocks.length], correct: false, done: false })
        return wordBlocks
      })
      setInput('')
    } else {
      setInput(value)
    }
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

        {activeWordList.filter(Boolean).map(block => {
          const wordBlock = block as WordType
          const isDone = wordBlock.done
          const isCorrect = wordBlock.correct

          if (isDone && isCorrect) {
            return <span className="word done correct">{wordBlock.word}</span>
          } else if (isDone && !isCorrect) {
            return <span className="word done incorrect">{wordBlock.word}</span>
          }

          return <span className="word">{wordBlock.word}</span>
        })}

        <IonInput
          placeholder="Write the word"
          ref={inputRef}
          onIonChange={(e: any) => setInputValue(e.target.value)}>
        </IonInput>

        <p>Hello {username}</p>
        <IonButton onClick={logout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Dashboard