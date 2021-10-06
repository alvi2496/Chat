import React from "react";
import { Row, Col } from "antd";
import { Paper } from "@mui/material";

export default function MessageItem({
  message, direction
}) {

  const styles = {
    paper: {
      maxWidth: "50%",
      width: "fit-content",
      float: direction === "incoming" ? "left" : "right",
      backgroundColor: direction === "incoming" ? "white" : "rgb(245, 245, 245)"
    },
    content: {
      paddingTop: "10px",
      paddingLeft: "15px",
      paddingRight: "15px",
      // padding: "10px",
      textAlign: "center"
    }
  }

  return (

    direction === "incoming" ?
      <Row>
        <Col span={24}>
          <Paper elevation={1} style={styles.paper}>
            <p style={styles.content}>{message}</p>
          </Paper>
        </Col>
      </Row>
      :
      <Row>
        <Col span={24}>
          <Paper elevation={1} style={styles.paper}>
            <p style={styles.content}>{message}</p>
          </Paper>
        </Col>
      </Row>
  )
}