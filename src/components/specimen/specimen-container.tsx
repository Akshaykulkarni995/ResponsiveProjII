import { Box, Grid, styled } from "@mui/material";
import { caseInfo } from "../../services/grossing-service";
import ActionPanel from "../action-panel/action-panel";
import EmbeddedForms from "../embedded-forms/embedded-forms";

import SpecimenCardLayout from "../specimen-card/specimen-card-layout";

import {
  AddCircleOutline,
  VerifiedUserOutlined,
  RemoveCircleOutline,
  Search,
} from "@mui/icons-material";
import { IButtons } from "../../types/ActionPanelData";

const Container = styled(Box)`
  display: flex;
  height: 100%;
  overflow: hidden;
  width: 100%;
  ${({ theme }) => theme.breakpoints.down("md")} {
    height: auto;
    margin: ${({ theme }) => theme.spacing(2, 0)};
    padding-bottom: ${({ theme }) => theme.spacing(2)};
    border-top: 1px solid #d5d5d5;
  }
`;

const FormArea = styled(Box)`
  border-left: 1px solid #d5d5d5;
  border-right: 1px solid #d5d5d5;
  width: calc(100% - 13.5rem);
`;
const ActionArea = styled(Box)`
  width: 13.5rem;
`;

const PageContainer = styled(Grid)`
  border-top: 1px solid #d5d5d5;
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.down("md")} {
    overflow: auto;
  }
`;

const SpecimenContainer = () => {
  const BtnDataList: IButtons[] = [
    {
      title: "ADD",
      icon: <AddCircleOutline />,
    },
    {
      title: "QA EVENTS",
      icon: <VerifiedUserOutlined color="primary" />,
      badgeCount: 1,
    },
    {
      title: "AUDIT",
      icon: <Search />,
    },
    {
      title: "CANCEL",
      icon: <RemoveCircleOutline />,
    },
  ];

  return (
    <PageContainer container>
      <Grid
        item
        height={{ sm: "auto" }}
        maxHeight={{ md: "100%" }}
        md={6}
        xs={12}
        xl={7}
      >
        <SpecimenCardLayout id="specimen-card-layout" caseInfo={caseInfo} />
      </Grid>
      <Grid item xs={12} md={6} xl={5} maxHeight="100%">
        <Container>
          <FormArea>
            <EmbeddedForms />
          </FormArea>
          <ActionArea>
            <ActionPanel buttons={BtnDataList} />
          </ActionArea>
        </Container>
      </Grid>
    </PageContainer>
  );
};

export default SpecimenContainer;
