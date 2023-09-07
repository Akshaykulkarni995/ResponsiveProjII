import { Box, CssBaseline, styled } from "@mui/material";

import ApplicationHeader from "./components/application-header/application-header";
import SpecimenProcessing from "./components/specimen-processing";

const AppContainer = styled(Box)`
  height: 100vh;
`;
const Main = styled("main")`
  height: calc(100% - 4rem);
  overflow: hidden;
`;
function App() {
  return (
    <AppContainer className="App">
      <CssBaseline />
      <ApplicationHeader />
      <Main id="main-container">
        <SpecimenProcessing />
      </Main>
    </AppContainer>
  );
}

export default App;
