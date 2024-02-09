import React from 'react';
import { IonButtons,IonInput,IonCard,IonLabel,IonToolbar, IonButton, IonModal, IonHeader, IonContent, IonTitle, IonPage } from '@ionic/react';

const Messages =({message})=>{
    return(
        <IonPage>
            <div>
                <div className='message'>
                    <p className='name'>Dan</p>
                    
                    <p>{message.text}</p>


                </div>
            </div>
        </IonPage>
    )
}
export default Messages;