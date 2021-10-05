import React from "react";
import { Paper } from "@mui/material";

export default function MessageItem({
  message, direction
}) {

  const styles = {
    paper: {
      maxWidth: "50%",
      width: "fit-content",
      float: direction === "incoming" ? "left" : "right"
    },
    content: {
      paddingTop: "5px",
      paddingBottom: "5px",
      paddingLeft: "15px",
      paddingRight: "15px"
    }
  }

  return (
    <div>
      <Paper elevation={5} style={styles.paper}>
        <p style={styles.content}>{message}</p>
      </Paper>
    </div>
  )
}