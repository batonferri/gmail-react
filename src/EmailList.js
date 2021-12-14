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
import { collection, onSnapshot } from 'firebase/firestore';

function EmailList() {

    const[emails, setEmails] = useState([]);

    
    useEffect(
        () => 
            onSnapshot(collection(db, "emails"), (snapshot) =>
          setEmails(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
          ),
        []
        );

    return (
        <div className='emailList'> 
            <div className="emailList_settings">
                <div className="emailList_settingsLeft">
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
                <div className="emailList_settingsRight">
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

            <div className="emailList_list">
                {emails.map((email) =>(
                    <EmailRow
                        key ={email.id}
                        title={email.name}
                        subject={email.subject}
                        description={email.message}
                        time={new Date(email.timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
            </div>

        </div>
    )
}

export default EmailList;