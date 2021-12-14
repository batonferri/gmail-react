import React, { useState } from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
// import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import {addDoc, collection, serverTimestamp} from "firebase/firestore"

function SendMail() {
    const [newTo, setNewTo] = useState("");
    const [newSubject, setNewSubject] = useState("");
    const [newMessage, setNewMessage] = useState("");
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const emailsCollection = collection(db, "emails");

    // const onSubmit = (formData) =>{
    //     console.log(formData);
    //     dispatch(closeSendMessage());    
    // };

    const sendEmail = async () => {
        await addDoc(emailsCollection, 
            {   name: newTo, 
                subject : newSubject,
                message:newMessage,
                timestamp: serverTimestamp(),
            })
        dispatch(closeSendMessage());
    };

    return (
        <div className='sendMail'>
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className='sendMail__close'
                onClick={() => dispatch(closeSendMessage())}/>
            </div>
            <form>
                <input name='to' placeholder='To' type="email" onChange={(event) => {setNewTo(event.target.value);}} />

                <input name='subject' placeholder='Subject' type="text" onChange={(event) => {setNewSubject(event.target.value);}}/>

                <input name='message' placeholder='Message...' type="text" className='sendMail__message' onChange={(event) => {setNewMessage(event.target.value);}}/>

                <div className="sendMail__options">
                    <Button className='sendMail__send'
                    variant='contained'
                    color='primary'
                    onClick={sendEmail} >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
