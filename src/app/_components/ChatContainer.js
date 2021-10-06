import React from "react";
import { Row, Col, Card } from "antd";
import ConversationList from "./ConversationList";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatContainer(
  {
    conversations,
    activeConversation,
    messages
  }
) {

  const styles = {
    cardBody: {
      height: "600px",
      width: "100%",
      overflow: "auto"
    },
    messageInput: {
      position: "absolute",
      bottom: 0,
      width: "95%"
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
          <MessageList
            messages={messages}
          />
          <MessageInput style={ styles.messageInput}/>
        </Card>
      </Col>
    </Row>
  )
}