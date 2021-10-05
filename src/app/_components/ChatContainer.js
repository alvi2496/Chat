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

  const styles = {
    cardBody: {
      height: "300px",
      width: "100%",
      overflow: "auto"
    }
  }

  return (
    <Row>
      <Col span={8}>
        <Card
          title="Conversations"
          style={styles.cardBody}
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
          style={styles.cardBody}
        >
          <MessageList messages={messages} />
        </Card>
      </Col>
    </Row>
  )
}