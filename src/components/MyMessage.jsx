import MessageForm from "./MessageForm";

const MyMessage = ({ message }) => {
    // checks if the message is text or a image
    //and renders image
    if(message?.attachments?.length > 0){
    return (
        <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style= {{float: 'right'}}
        />
    );   
}
// If not an image the message is rendered
    return (
        <div className='message' style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50'}}>
            {message.text}
        </div>
    );
}

export default MyMessage;