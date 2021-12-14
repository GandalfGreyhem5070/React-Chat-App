const TheirMessage = ({  lastMessage, message }) => {
        const isFirstMessageByUser = 
        //Tells us if this is the first message sent by the user
        !lastMessage || lastMessage.sender.username != message.sender.username;
    
        return (
            <div className="message-row">
                {isFirstMessageByUser && (
                    <div
                        className="message-avatar"
                        style=
                        {{backgroundImage: `url(${message?.senter?.avatar})`}}
                    />
                )}
                {message?.attachments?.length > 0
               ?(
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style= {{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}
            />
        ) : (
            <div className='message' style={{ float: 'left', backgroundColor: '#CABCDC',marginLeft: isFirstMessageByUser ? '4px' : '48px'}}>
            {message.text}
        </div>
        ) 
    }
            </div>
        );
}

 

export default TheirMessage;
