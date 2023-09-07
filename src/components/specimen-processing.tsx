import { Box, styled } from "@mui/material";
import PatientBanner from "./patient-banner/patient-banner";
import SpecimenContainer from "./specimen/specimen-container";

const MainContent = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const PageLayout = styled("article")`
  height: 100%;
`;
const PatientBannerContainer = styled(Box)`
  flex: 0 0 auto;
`;
const SpecimenProcessing = () => {
  return (
    <PageLayout>
      <MainContent>
        <PatientBannerContainer>
          <PatientBanner />
        </PatientBannerContainer>
        <SpecimenContainer />
      </MainContent>
    </PageLayout>
  );
};

export default SpecimenProcessing;
