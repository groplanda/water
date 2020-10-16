import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = ({state}) => {
    
    return (
        <React.Fragment>
            <div className={classes.dialogs}>
                <div className={classes.dialogs_items}>
                    {state.dialogs.map(dialog => <DialogItem dialog={dialog} key={dialog.id} />)}
                </div>
                <div className={classes.messages}>
                    {state.messages.map(message => <Message message={message} key={message.id} />)}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dialogs
