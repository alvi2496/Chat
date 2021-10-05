import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import Title from './_components/Title';
import ConversationList from './_components/ConversationList';
import ChatContainer from './_components/ChatContainer';

export default function App() {

  const conversations = [
    {
      id: 1,
      name: "Customer One",
      latestMessage: {
        body: "Latest message from customer one",
        createdAt: "Tue, 05 Oct 2021 13: 18: 25 - 0700"
      }
    },
    {
      id: 2,
      name: "Customer two",
      latestMessage: {
        body: "Latest message from customer two",
        createdAt: "Mon, 04 Oct 2021 13:18:49 -0700"
      }
    }
  ]

  const messages = [
    {
      id: 1,
      body: "message 1",
      direction: "incoming"
    },
    {
      id: 2,
      body: "message 2",
      direction: "outgoing"
    }
  ]

  const activeConversation = conversations[0];

  return (
    <div>
      <Row>
        <Col
          span={16}
          offset={4}
        >
          <Title />
        </Col>
      </Row>
      <Row>
        <Col
          span={16}
          offset={4}
        >
          <ChatContainer
            conversations={conversations}
            activeConversation={conversations[0]}
            messages={messages}
          />
        </Col>
      </Row>
    </div>

  )
}