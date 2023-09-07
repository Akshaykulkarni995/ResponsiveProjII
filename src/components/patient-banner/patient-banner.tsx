import { Card, CardContent, styled, Grid, gridClasses } from "@mui/material";
import { DeleteOutlined, FormatUnderlined } from "@mui/icons-material";
import { caseInfo as PatientInfo } from "../../services/grossing-service";
import { useState } from "react";
import ExpandButton from "../expand-button/expand-button";
import LabelledText from "../labelled-text/labelled-text";

const PatientActionsGrid = styled(Grid)`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.875rem;
`;

const PatientDetailsGrid = styled(Grid)`
  padding: ${({ theme }) => theme.spacing(1, 2)};
`;

const PatientDetailsCardContainer = styled(Grid)`
  .${gridClasses.root} > .${gridClasses.item} {
    padding-top: ${({ theme }) => theme.spacing(1)};
  }
`;

const PatientBannerContainer = styled(Card)`
  border-radius: 0;
  box-shadow: none;
`;

const PatientContent = styled(CardContent)`
  display: flex;
  :last-child {
    padding-bottom: ${({ theme }) => theme.spacing(2)};
    padding-top: ${({ theme }) => theme.spacing(1)};
  }
`;

const PatientDetails = styled("div")`
  flex: 1 1 auto;
`;

export function PatientBanner({ id = "patient" }: any) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <PatientBannerContainer id={id}>
      <PatientContent id={`${id}-content`}>
        <PatientDetails id={`${id}-details`}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                  <LabelledText
                    id={`${id}-caseId`}
                    label={"Case ID"}
                    text={PatientInfo.caseId}
                    icon={<FormatUnderlined fontSize="small" />}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <LabelledText
                    id={`${id}-selectedAsset`}
                    label={"Selected Asset"}
                    text={PatientInfo.selectedAsset}
                    icon={<DeleteOutlined fontSize="small" />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <PatientDetailsCardContainer item xs={12} sm={9}>
              <Card id={`${id}-patientDetails`}>
                <PatientDetailsGrid container spacing={2}>
                  <Grid item xs={12} sm={6} md={4}>
                    <LabelledText
                      id={`${id}-name`}
                      label={"Name"}
                      text={PatientInfo.patient.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={2.5}>
                    <LabelledText
                      id="dateofbirth"
                      label={"Born"}
                      text={PatientInfo.patient.dateOfBirth}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={1.5}>
                    <LabelledText
                      id={`${id}-sex`}
                      label={"Birth Sex"}
                      text={PatientInfo.patient.sexAtBirth}
                    />
                  </Grid>
                  <Grid item xs={9} sm={4} md={3}>
                    <LabelledText
                      id={`${id}-nationalid`}
                      label={"Nat ID"}
                      text={PatientInfo.patient.nationalIdentifier}
                    />
                  </Grid>
                  <PatientActionsGrid item xs={3} sm={4} md={1}>
                    <ExpandButton
                      id={`${id}-expand`}
                      expanded={expanded}
                      onClick={handleExpandClick}
                      size="small"
                    />
                  </PatientActionsGrid>
                </PatientDetailsGrid>
              </Card>
            </PatientDetailsCardContainer>
          </Grid>
        </PatientDetails>
      </PatientContent>
    </PatientBannerContainer>
  );
}

export default PatientBanner;
