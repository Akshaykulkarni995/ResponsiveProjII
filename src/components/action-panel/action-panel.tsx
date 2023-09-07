import React from "react";
import { Badge, Box, Button, styled } from "@mui/material";
import {
  AddCircleOutline,
  VerifiedUserOutlined,
  Print,
  RemoveCircleOutline,
  Search,
} from "@mui/icons-material";

const ActionButtonWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
`;
const ActionButton = styled(Button)`
  border-color: transparent;
  justify-content: flex-start;
  margin: ${({ theme }) => theme.spacing(0.5, 0)};
  width: 100%;
`;

const ActionWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: auto;
  padding: ${({ theme }) => theme.spacing(0, 2)};
`;

const ConfirmationButton = styled(Button)`
  margin: ${({ theme }) => theme.spacing(1, 0)};
  width: 100%;
`;

const ConfirmWrap = styled(Box)`
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

const ActionPanel = () => {
  return (
    <ActionButtonWrap>
      <ActionWrap>
        <ActionButton variant="outlined" startIcon={<AddCircleOutline />}>
          ADD
        </ActionButton>
        <ActionButton
          variant="outlined"
          startIcon={
            <Badge badgeContent={1} color="primary">
              <VerifiedUserOutlined color="primary" />
            </Badge>
          }
        >
          QA EVENTS
        </ActionButton>
        <ActionButton variant="outlined" startIcon={<Search />}>
          AUDIT
        </ActionButton>
        <ActionButton variant="outlined" startIcon={<RemoveCircleOutline />}>
          CANCEL
        </ActionButton>
      </ActionWrap>
      <ConfirmWrap>
        <ConfirmationButton variant="outlined" startIcon={<Print />}>
          PRINT 2 SLIDES
        </ConfirmationButton>
        <ConfirmationButton variant="contained">COMPLETE</ConfirmationButton>
      </ConfirmWrap>
    </ActionButtonWrap>
  );
};

export default ActionPanel;
