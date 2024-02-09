import { IonButtons,IonInput,IonCard,IonLabel, IonButton, IonModal, IonHeader, IonContent, IonTitle, IonPage } from '@ionic/react';
 import React ,{useRef,useState,useEffect} from 'react';
 import Messages from './messages';
 import {query,collection,orderBy,onSnapshot ,snapshot} from 'firebase/firestore';
import {db} from './firebase';
import SendMessage from './SendMeesage';

 const Chat=()=>{
    const [messages,setMessages]=useState([]);
    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let messages = [];
          querySnapshot.forEach((doc) => {
            messages.push({ ...doc.data(), id: doc.id });
          });
          setMessages(messages);
        });
        return () => unsubscribe();
      }, []);
  
    const scroll =useRef();

    
    return(
        <div>
            <main>
            {messages &&
                 messages.map((message) => (
                <Messages key={message.id} message={message} />
          ))}
                
                
                

            </main>
            <SendMessage/>
            <span ref={scroll}></span>


        </div>
    )
 }
 export default Chat;