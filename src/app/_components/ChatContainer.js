import React from "react";
import { Card, Row, Col } from "antd";
import Conversations from "./Conversations";


export default function ChatContainer() {

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

  const styles = {
    conversationCard: {
      height: "500px"
    },
    messageCard: {
      height: "500px"
    }
  }


  return (
    <Row>
      <Col span={8}>
        <Card
          title="Conversations"
          style={styles.conversationCard}
        >
          <Conversations
            userId={1}
          />
        </Card>
      </Col>
      <Col span={16}>
        <Card
          title={"Customer"}
          style={styles.messageCard}
        ></Card>
      </Col>
    </Row>
  )
}