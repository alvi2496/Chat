import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import 'react-chat-elements/dist/main.css';
import Title from './_components/Title';
import ChatContainer from './_components/ChatContainer';

export default function App() {

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
          <ChatContainer />
        </Col>
      </Row>
    </div>

  )
}