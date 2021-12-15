import { Checkbox, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import "./EmailList.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

function EmailList() {

    const[emails, setEmails] = useState([]);

    useEffect(() => {
        const emailsCollection = collection(db, "emails");
        const q = query(emailsCollection, orderBy("timestamp", "desc"));
    
        const unsub = onSnapshot(q, (snapshot) =>
        setEmails(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
    
        return unsub;
      }, []);

    return (
        <div className='emailList'> 
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8"/>
                <Section Icon={LocalOfferIcon} title="Promotions" color="green"/>
            </div>

            <div className="emailList__list">
                {emails.map((email) =>(
                    <EmailRow
                        key ={email.id}
                        title={email.name}
                        subject={email.subject}
                        description={email.message}
                        time={new Date(email.timestamp?.seconds * 1000).toString().slice(0,21)}
                    />
                ))}
            </div>

        </div>
    )
}

export default EmailList;