import React from "react";
import MessageItem from "./MessageItem"
// import { List, ListItem } from "@mui/material";
import { Card } from "antd";

export default function MessageList({
  messages
}) {

  const styles = {
    overflow: "auto"
  }

  return (
    <Card
      bordered={false}
      style={styles}
    >
      {
        messages.map((message) => (
          <MessageItem
            key={`message-${message.id}`}
            message={message.body}
            direction={message.direction}
          />
        ))
      }
    </Card>

  )
}