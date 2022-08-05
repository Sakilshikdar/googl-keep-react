import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const NavList = () => {

    const NavList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
        { id: 2, name: 'Archive', icon: <Archive />, route:'/archive' },
        { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' }
    ]

    return (
        <List>
            {
                NavList.map(list => (
                    <ListItem key={list.id}>
                        <Link className='flex justify-center text-inherit no-underline'  to={list.route}>
                        <ListItemIcon style={{alignItems: 'center'}}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                        </Link>
                    </ListItem>
                ))
            }
        </List>

    )
};

export default NavList;