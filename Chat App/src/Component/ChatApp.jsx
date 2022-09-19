import { useEffect, useState } from "react";
import createConnection from "../utils/chat";
import { users } from "../utils/chat";
import Contacts from "./Contacts";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [subscribedTo, setSubscribedTo] = useState(users[0]);

  // - const {listen, unsubscribe} = creteConnection( currentUser )
  // - const connection = creteConnection( currentUser )
  // - listen( callback )
  // - the callback will be given any new message
  // - so you can write listen( message => {...your code} )
  // - you need to ensure you are unsubscribing from user1 to user2 as well
  // - display all the messages on the UI
  // - when changing user, messages should be reset
  useEffect(() => {
    // unsubscribe is like cancel / hangup / keep the phone down
    const { listen, unsubscribe } = createConnection(subscribedTo);
    listen((message) => {
      setMessages((prev) => [...prev, message]);
    });
    return () => {
      console.log(`cleanup called`);
      unsubscribe();
      setMessages([]);
    };
  }, [subscribedTo]);
  // unmounting
  return (
    <div>
      <h1>Contacts</h1>
      <Contacts
        // all users
        users={users}
        // active user
        active={subscribedTo}
        // onChange
        onChange={(user) => {
          setSubscribedTo(user);
        }}
      />
      <hr />
      {messages.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}

export default ChatApp;
