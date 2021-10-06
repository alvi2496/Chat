import React from "react";
import MessageItem from "./MessageItem"
// import { List, ListItem } from "@mui/material";
import { List } from "antd";

export default function MessageList({
  messages
}) {




  return (
    messages.map((message) => (
        <MessageItem
          key={`message-${message.id}`}
          message={message.body}
          direction={message.direction}
        />
    ))
  )
}