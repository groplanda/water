import React from 'react'
import classes from '../Dialogs.module.css'
const Message = ({message}) => {
    return (
        <div className={classes.message}>
            {message.text}
        </div>
    )
}
export default Message