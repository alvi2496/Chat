import React from "react";
import { Typography } from "antd";

export default function Title() {

  const { Title } = Typography;

  return (
    <div style={{"textAlign": "center"}}>
      <Title>Chat Application</Title>
      <Title
        level={4}
      >
        by
      </Title>
      <Title
        level={2}>
        Alvi Mahadi
      </Title>
    </div>
  )
}