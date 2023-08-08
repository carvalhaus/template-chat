import { Box } from "@mui/material";
import Container from "./components/Container";

function App() {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Container />
    </Box>
  );
}

export default App;
