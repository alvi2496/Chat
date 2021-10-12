import React from "react";
import { ChatList } from 'react-chat-elements';

export default function Conversations({
  userId
}) {

  const conversations = [
    {
      id: 1,
      user_id: 1,
      title: "Customer One",
      latestMessage: {
        body: "Latest message from customer one",
        createdAt: "Tue, 05 Oct 2021 13: 18: 25 - 0700"
      },
      unread_count: 0
    },
    {
      id: 2,
      user_id: 2,
      title: "Customer two",
      latestMessage: {
        body: "Latest message from customer two",
        createdAt: "Mon, 04 Oct 2021 13:18:49 -0700"
      },
      unread_count: 1
    }
  ]


  return (
    <ChatList
      className="chat-list"
      dataSource={
        conversations.map((conversation) => {
          return {
            avatar: 'https://facebook.github.io/react/img/logo.svg',
            alt: "React.js",
            title: conversation.title,
            subtitle: conversation && conversation.latest_message ? conversation.latest_message.body : null,
            date: conversation && conversation.latest_message ? new Date(conversation.latest_message.created_at) : null,
            unread: conversation.unread_count
          }
        })
      }
    />
  )
}