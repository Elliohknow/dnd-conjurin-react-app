import React from "react";
import Chat from "./Chat";
import LoginForm from "./LoginForm/LoginForm";
// import useChat from "../../hooks/useChat";
import { CTX } from '../../Store';

const ChatPanel = () => {
  const context = React.useContext(CTX);
  const [proceed, setProceed] = React.useState(false);
  
  
  const handleSubmit = (e, username, room) => {
    e.preventDefault();
    
    context.joinRoom(username, room);
    setProceed(true);
  };

	return (
    <React.Fragment>
      {
        !proceed ?
          <LoginForm handleSubmit={handleSubmit} />
          : (
              <Chat
                name={context.name}
                room={context.room}
                users={context.users}
                messages={context.messages}
                sendMessage={context.sendMessage}
                sendRollMessage={context.sendRollMessage}
                />
          )
      }
    </React.Fragment>
	);
};

export default ChatPanel;
