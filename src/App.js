import  { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    
  return (
        <ChatEngine 
            height = "100vh"
            projectID= "2ec540f7-9d98-4a2c-80b2-26feaf4c5dac"
            userName="javascriptmastery"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
    );
};

export default App;
