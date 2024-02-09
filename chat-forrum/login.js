import React from 'react';
import { IonButtons,IonInput,IonCard,IonLabel, IonButton, IonModal, IonHeader, IonContent, IonTitle, IonPage } from '@ionic/react';
import GoogleButton from 'react-google-button';
import {auth} from './firebase'; 
import {GoogleAuthProvider,signInWithRedirect}  from 'firebase/auth';
import './style.css';
const signIn=()=>{
    const provider =new GoogleAuthProvider();
    signInWithRedirect(auth,provider)
}
const Login=()=>{
    return(
        <IonPage>
            <IonContent>
                
                <div className='btn'>
                <IonButton onClick={signIn}>SIGN-IN</IonButton>

                </div>
                    
                    
                
                
                
                

            </IonContent>
        </IonPage>
    )
}

export default Login;