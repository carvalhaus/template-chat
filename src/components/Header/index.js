import * as React from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, ThemeProvider } from "@mui/system";

export default function Header() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#fff",
            dark: "#dedfe1",
          },
        },
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          bgcolor: "#F4F5F5",
          borderBottom: 2,
          borderColor: "primary.dark",
          display: "flex",
          height: "2.5rem",
          justifyContent: "space-between",
          padding: "0.5rem",
          width: "100%",
        }}
      >
        <span
          style={{
            alignItems: "center",
            display: "flex",
            gap: 8,
            width: "50%",
          }}
        >
          <ChatBubbleIcon style={{ color: "#434C4C" }} />
          <p style={{ color: "#434C4C" }}>SimpleChat</p>
        </span>
        <SettingsIcon style={{ color: "#434C4C" }} />
      </Box>
    </ThemeProvider>
  );
}
