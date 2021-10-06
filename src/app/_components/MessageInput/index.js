import React from "react";
import { Card, Row, Col, Input, Button } from "antd";
import { SendOutlined, FileAddOutlined } from "@ant-design/icons";

export default function MessageInput({
  onSent = null,
  style
}) {
  return (
    <Card
      bordered={false}
      style={style}
    >
      <Row>
        <Col span={20}>
          <Input
            placeholder="Type your message here.."
          />
        </Col>
        <Col span={2}>
          <Button>
            <SendOutlined />
          </Button>
        </Col>
        <Col span={2}>
          <Button>
            <FileAddOutlined />
          </Button>
        </Col>
      </Row>
    </Card>
  )
}