import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import ChatMsgLeft from "./ChatMsgLeft";
import ChatMsgRight from "./ChatMsgRight";

function Container() {
  const bgImage = "/assets/chat-bg.png";

  return (
    <Box
      sx={{
        width: 864,
        height: 378,
        backgroundImage: `url(${bgImage})`,
        border: 2,
        borderColor: "#dedfe1",
        borderRadius: "0.5rem",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Header />
      <ChatMsgLeft />
      <ChatMsgRight />
    </Box>
  );
}

export default Container;
