import {IonContent, IonImg, IonPage } from '@ionic/react';
import React from 'react';
import slogan from '../assets/slogan.png'
import mikelogomaior from '../assets/mikelogomaior.png'

const Tab1: React.FC = () => {
  return (
    <IonPage style={{paddingTop: 100, border: 0}} >


     <IonContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}} fullscreen>


      <IonImg style={{padding: 40,height: '56%', margin:0, paddingTop: 50,  }} src={mikelogomaior}></IonImg>


       <IonImg style={{ paddingTop: 10, height: '10%', margin: 0}} src={slogan}></IonImg>
     </IonContent>
    </IonPage>
  );
};

export default Tab1;
