import { IonCard, IonContent, IonHeader, IonIcon, IonInput, IonInputPasswordToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import NavbarMike from '../components/global/NavbarMike';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="grid  place-content-center">
          <div className=" ion-justify-content-center ion-padding-top "></div>
          <IonCard style={{ padding: 60, margin: 47, border: 2 }}> MIKE, O SISTEMA INTELIGENTE
            <h1 style={{ paddingTop: 16 }}>Login</h1>
            <IonInput type="email" label="E-mail">
              <IonIcon slot="start" aria-hidden="true"></IonIcon>
            </IonInput>

            <IonInput type="password" label="Password" value="">
              <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
            </IonInput>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
