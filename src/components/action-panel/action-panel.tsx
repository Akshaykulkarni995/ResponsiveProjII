import React from "react";
import { Badge, Box, Button, styled } from "@mui/material";
import { Print } from "@mui/icons-material";
import { ActionPanelProps, IButtons } from "../../types/ActionPanelData";

const ActionButtonWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding-bottom: 0;
  }
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

const ActionPanel: React.FC<ActionPanelProps> = ({ buttons }) => {
  return (
    <ActionButtonWrap>
      <ActionWrap>
        {buttons.map((btn: IButtons) => {
          return (
            <ActionButton
              variant="outlined"
              startIcon={
                btn.badgeCount ? (
                  <Badge badgeContent={btn.badgeCount} color="primary">
                    {btn.icon}
                  </Badge>
                ) : (
                  <>{btn.icon}</>
                )
              }
            >
              {btn.title}
            </ActionButton>
          );
        })}
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
