import React from "react";
import ConversationItem from "./ConversationItem";
import { List } from "antd";

export default function ConversationList(
  {
    conversations,
    activeConversation
  }
) {

  return (
    <List
      loading={conversations.length <= 0 || !conversations}
      itemLayout="horizontal"
      dataSource={conversations}
      renderItem={item => <ConversationItem conversation={item} active={item.id === activeConversation.id}/>}
    />
  )
}