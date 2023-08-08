import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

function ChatMsgRight() {
  return (
    <Box
      sx={{
        alignItems: "end",
        display: "flex",
        flexDirection: "row-reverse",
        alignSelf: "end",
        gap: 1,
        padding: 1,
        width: "50%",
      }}
    >
      <Avatar />

      <Box
        sx={{
          borderRadius: "10px 10px 0 10px",
          bgcolor: "#dedfe1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 1.5,
          width: "100%",
        }}
      >
        <Typography
          sx={{
            alignItems: "center",
            display: "flex",
            fontWeight: 600,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          BOT{" "}
          <Typography component={"span"} fontSize={"small"}>
            12:45
          </Typography>
        </Typography>

        <Typography
          sx={{
            marginTop: 0.5,
          }}
        >
          Hello
        </Typography>
      </Box>
    </Box>
  );
}

export default ChatMsgRight;
