import {
  Grid,
  Stack,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { CardLayoutProps } from "../../types/card";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Card from "./specimen-card";

const CardHeader = styled(Stack)`
  flex: 0 0 auto;
  padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)}
    ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
`;

const CardContainer = styled(Stack)`
  max-height: 100%;
`;

export function CardLayout({ caseInfo, id }: CardLayoutProps) {
  const [type, setType] = useState("specimens");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newType: string
  ) => {
    setType(newType);
  };

  return (
    <CardContainer id={id}>
      <CardHeader
        alignItems="center"
        direction="row"
        id={`${id}-header`}
        justifyContent="space-between"
      >
        <ToggleButtonGroup
          aria-label="Type"
          color="primary"
          exclusive
          onChange={handleChange}
          size="small"
          value={type}
        >
          <ToggleButton value="specimens">Specimens</ToggleButton>
          <ToggleButton value="derivatives">Derivatives</ToggleButton>
        </ToggleButtonGroup>
        <Typography display="flex">
          0 OF 3 POTS COMPLETE <FontAwesomeIcon size="xs" icon={faInfoCircle} />
        </Typography>
      </CardHeader>

      {/* <CardList spacing={2}> */}
      <Grid container spacing={2} px={2} overflow="auto" pb={2}>
        {caseInfo.specimens.map((specimen) => (
          <Grid item xs={12} xl={6}>
            <Card
              id={`${id}-${specimen.specimenId}`}
              key={specimen.specimenId}
              specimen={specimen}
            />
          </Grid>
        ))}
      </Grid>
      {/* </CardList> */}
    </CardContainer>
  );
}

export default CardLayout;
