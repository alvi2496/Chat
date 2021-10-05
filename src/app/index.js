import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import Title from './_components/Title';
import ConversationList from './_components/ConversationList';

export default function App() {

  const conversations = [
    {
      name: "Customer One",
      latestMessage: {
        body: "Latest message from customer one",
        createdAt: "Tue, 05 Oct 2021 13: 18: 25 - 0700"
      }
    },
    {
      name: "Customer two",
      latestMessage: {
        body: "Latest message from customer two",
        createdAt: "Mon, 04 Oct 2021 13:18:49 -0700"
      }
    }
  ]

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
          <ConversationList conversations={conversations}/>
        </Col>
      </Row>
    </div>

  )
}