import React from "react";
import {
  List,
  Avatar,
  Typography
} from "antd";
import { format } from "timeago.js";

export default function ConversationItem(
  {
    conversation,
    active = false,
  }
) {

  const { Text } = Typography;

  const initials = (name) => {
    if (name) {
      return name.split(' ').map((str) => str ? str[0].toUpperCase() : "").join('');
    }
    else {
      return 'U';
    }
  }

  return (
    <List.Item
      style={active ? { backgroundColor: "rgb(245 245 245)"} : null }
    >
      <List.Item.Meta
        avatar={
          conversation.avatar ? <Avatar src={conversation.avatar} />
            :
            <Avatar>{ initials(conversation.name) }</Avatar>
          }
        title={conversation.name}
        description={conversation.latestMessage.body}
      />
      <div>
        {
          <Text type="secondary">
            {
              format(new Date(conversation.latestMessage.createdAt))
            }
          </Text>
        }
      </div>
    </List.Item>
  )
}