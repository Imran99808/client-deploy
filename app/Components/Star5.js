'use client'
import { IonIcon } from '@ionic/react'
import {star, starOutline } from 'ionicons/icons'
import React from 'react'

export default function Star5({starValue}) {
  return (
   <>
   
      <IonIcon icon={1<=starValue?star:starOutline}/>
      <IonIcon icon={2<=starValue?star:starOutline}/>
      <IonIcon icon={3<=starValue?star:starOutline}/>
      <IonIcon icon={4<=starValue?star:starOutline}/>
      <IonIcon icon={5<=starValue?star:starOutline}/>
      
      </>
  )
}
