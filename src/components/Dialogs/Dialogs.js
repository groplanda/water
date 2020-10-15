import React from 'react'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <React.Fragment>
            <div className={classes.dialogs}>
                <div className={classes.dialogs_items}>
                    <div className={classes.dialog}>
                        Igor
                    </div>
                    <div className={classes.dialog}>
                        Andrey
                    </div>
                </div>
                <div className={classes.messages}>
                    <div className={classes.message}>
                        hi
                    </div>
                    <div className={classes.message}>
                        how are you?
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Dialogs