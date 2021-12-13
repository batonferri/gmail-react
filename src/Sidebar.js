import { Button, IconButton } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOptions from './SidebarOptions';
import StarIcon from '@mui/icons-material/Star';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';


function Sidebar() {
    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon fontSize="large" />} className='sidebar__compose'>Compose</Button>
            <SidebarOptions Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SidebarOptions Icon={AccessTimeIcon} title="Snoozed" number={54}/>
            <SidebarOptions Icon={StarIcon} title="Starred" number={54}/>
            <SidebarOptions Icon={LabelImportantIcon} title="Important" number={54}/>
            <SidebarOptions Icon={NearMeIcon} title="Sent" number={54}/>
            <SidebarOptions Icon={NoteIcon} title="Drafts" number={54}/>
            <SidebarOptions Icon={ExpandMoreIcon} title="More" number={54}/>
            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
