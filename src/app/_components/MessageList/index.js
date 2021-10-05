import React from "react";
import MessageItem from "./MessageItem"

export default function MessageList({
  messages
}) {
  return (
    <div>
      {
        messages.map((message) => (
          <MessageItem
            key={`message-${message.id}`}
            message={message.body}
            direction={message.direction}
          />
        ))
      }
    </div>
  )
}