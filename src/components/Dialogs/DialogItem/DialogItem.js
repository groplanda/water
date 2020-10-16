import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import classes from '../Dialogs.module.css'

const DialogItem = ({dialog}) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={`/dialogs/${dialog.id}`}>{dialog.name}</NavLink>
        </div>
    )
}
export default DialogItem
