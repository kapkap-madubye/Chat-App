import React from 'react';
import { IonButtons,IonInput,IonCard,IonLabel,IonToolbar, IonButton, IonModal, IonHeader, IonContent, IonTitle, IonPage } from '@ionic/react';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './login';
import LogOut from './logout';
const Heading=()=>{
    const [user] = useAuthState(auth);


    return(
        <IonPage>
            
            <Login/>

            
        </IonPage>
    )
}
export default Heading;