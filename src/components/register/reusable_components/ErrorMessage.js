import React from 'react'
import { ErrorMessage } from "@hookform/error-message";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({

    error_message: {
        color: "#d22129",
        margin: "0px",
        '&::before': {
            content: '"⚠ "',
            display: 'inline',
            color: "#d22129",
        },
    }




});
function Error_Message({errors, name}) {
    const classes = useStyles();

    return (
        <div>
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ messages }) => {
                    console.log("messages", messages);
                    return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p className={classes.error_message} key={type}>{message}</p>
                        ))
                        : null;
                }}
            />
        </div>
    )
}

export default Error_Message