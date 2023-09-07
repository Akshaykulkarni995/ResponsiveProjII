import React, { useState } from "react";
import {
  Box,
  Card as MUICard,
  Chip,
  Collapse,
  collapseClasses,
  Stack,
  styled,
  Typography,
  useTheme,
  Tooltip,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpecimenCardProps } from "../../types/card";
import ExpandButton from "../expand-button/expand-button";
import {
  faArrowTurnDown,
  faFileImage,
} from "@fortawesome/free-solid-svg-icons";

const ChildCard = styled(Collapse)`
  &.${collapseClasses.root} {
    margin-top: 0;
  }
`;

const HierarchyLink = styled("div", {
  shouldForwardProp: (prop) => prop !== "indent",
})<{ indent: number }>`
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.spacing(3)};
  padding-left: ${({ theme, indent }) => theme.spacing(indent * 2)};
`;

const CardHighlighter = styled(Box, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>`
  border-radius: 16px 0px 0px 16px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background: ${({ selected }) =>
    selected ? `#2E7D32` : `rgba(0, 0, 0, 0.38)`};
  width: 1rem;
`;

const Name = styled(Typography)`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Root = styled(MUICard, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected: boolean }>`
  border-radius: 0;
  border: solid 1px ${({ theme }) => theme.palette.divider};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  flex: 0 0 auto;
  width: calc(100% - 16px);
  background-color: ${({ selected }) => (selected ? "#e4f2fe" : "#FFFFFF")};
`;

const Spacer = styled("div")`
  height: ${({ theme }) => theme.spacing(1)};
`;

export function Card({ id, indent = 1, specimen }: SpecimenCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const hasChildren = specimen.derivatives?.length;

  const theme = useTheme();

  const handleExpandClick = (id: string) => {
    setSelectedId(selectedId === id ? "" : id);
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <Box display={"flex"} justifyContent={"end"}>
        {hasChildren && (
          <CardHighlighter selected={!!(selectedId === id)}></CardHighlighter>
        )}
        <Root id={id} selected={!!(selectedId === id)}>
          <Stack>
            <Stack alignItems="center" direction="row" padding={1} spacing={1}>
              <Stack
                alignItems="center"
                direction="row"
                flexGrow="1"
                spacing={1}
                minWidth={0}
              >
                <FontAwesomeIcon
                  icon={faFileImage}
                  size="lg"
                  color={theme.palette.grey[500]}
                />
                <Tooltip title={specimen.name}>
                  <Name variant="h5">{specimen.name}</Name>
                </Tooltip>
              </Stack>

              <Stack
                alignItems="center"
                direction="row"
                justifyContent="flex-end"
                spacing={2}
              >
                <Chip label={specimen.status} size="small"></Chip>
                <FontAwesomeIcon
                  icon={faFileImage}
                  size="lg"
                  color={theme.palette.grey[500]}
                />
                <FontAwesomeIcon
                  icon={faFileImage}
                  size="lg"
                  color={theme.palette.grey[500]}
                />
                <FontAwesomeIcon
                  icon={faFileImage}
                  size="lg"
                  color={theme.palette.grey[500]}
                />
                <FontAwesomeIcon
                  icon={faFileImage}
                  size="lg"
                  color={theme.palette.grey[500]}
                />
                <FontAwesomeIcon
                  icon={faFileImage}
                  size="lg"
                  color={theme.palette.grey[500]}
                />
                <ExpandButton
                  id={`${id}-expand`}
                  expanded={expanded}
                  hidden={!hasChildren}
                  onClick={() => {
                    handleExpandClick(id);
                  }}
                  size="small"
                />
              </Stack>
            </Stack>
            <Stack
              p="0 3.5rem 0 2rem"
              alignItems="center"
              direction="row"
              spacing={2}
              height={"1.5rem"}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                flexGrow="1"
              >
                <Box>
                  <Typography variant="body1">
                    {specimen.specimenSample1 ? specimen.specimenSample1 : ""}
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body1">
                    {specimen.specimenSample2 ? specimen.specimenSample2 : ""}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Root>
      </Box>
      {hasChildren && (
        <ChildCard in={expanded}>
          <Stack id={`${id}-child`}>
            {specimen.derivatives?.map((derivative, index) => (
              <div key={index}>
                {index === 0 ? (
                  <HierarchyLink indent={indent}>
                    <FontAwesomeIcon
                      id={`${id}-expand-child`}
                      fixedWidth
                      icon={faArrowTurnDown}
                      opacity={0.6}
                    />
                    <Typography
                      variant="body1"
                      marginLeft={theme.spacing(1)}
                      fontSize={".625rem"}
                    >
                      Level {indent} derivatives
                    </Typography>
                  </HierarchyLink>
                ) : (
                  <Spacer />
                )}

                <Card
                  id={`${id}-${derivative.specimenId}`}
                  indent={indent + 1}
                  key={derivative.specimenId}
                  specimen={derivative}
                />
              </div>
            ))}
          </Stack>
        </ChildCard>
      )}
    </React.Fragment>
  );
}

export default Card;
