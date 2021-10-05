import React from "react";
import { Row, Col, Card } from "antd";
import ConversationList from "./ConversationList";
import MessageList from "./MessageList";

export default function ChatContainer(
  {
    conversations,
    activeConversation,
    messages
  }
) {

  return (
    <Row>
      <Col span={8}>
        <Card
          title="Conversations"
          style={{ height: "300px", width: "100%" }}
        >
          <ConversationList
            conversations={conversations}
            activeConversation={activeConversation}
          />
        </Card>
      </Col>
      <Col span={16}>
        <Card
          title="Messages"
          style={{ height: "300px", width: "100%" }}
        >
          <MessageList messages={messages} />
        </Card>
      </Col>
    </Row>
  )
}