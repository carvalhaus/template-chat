import * as React from "react";
import { Box, ThemeProvider } from "@mui/system";

export default function BoxSx() {
  const bgImage = "/assets/chat-bg.png";

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
          width: 864,
          height: 378,
          backgroundImage: `url(${bgImage})`,
          border: 2,
          borderColor: "primary.dark",
          borderRadius: "0.5rem",
        }}
      />
    </ThemeProvider>
  );
}
