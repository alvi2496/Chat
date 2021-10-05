import React from "react";
import ConversationItem from "./ConversationItem";
import { List } from "antd";

export default function ConversationList(
  {
    conversations
  }
) {

  return (
    <List
      itemLayout="horizontal"
      dataSource={conversations}
      renderItem={item => <ConversationItem conversation={item} active={item.name === "Customer One"}/>}
    />
  )
}