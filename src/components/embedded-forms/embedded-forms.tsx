import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  styled,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { IFormData, patientData } from "../../services/EmbeddedFormsData";

const DataContainer = styled(Box)`
  width: 50%;
`;

const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: auto;
  margin: ${({ theme }) => theme.spacing(1, 0)};
  padding: ${({ theme }) => theme.spacing(1, 3, 0, 3)};
`;

const Label = styled(Typography)`
  font-weight: 600;
`;
const PatientInfoContainer = styled(Box)`
  padding: ${({ theme }) => theme.spacing(1.25, 2.5, 2, 2.5)};
`;

const Spacer = styled(Box)`
  padding-top: ${({ theme }) => theme.spacing(2)};
`;

const Text = styled(Typography)`
  font-weight: 400;
  font-size: 12px;
`;

const Toggle = styled(FormControlLabel)`
  position: relative;
  top: 0.625rem;
`;

const EmbeddedForms: React.FC<IFormData> = () => {
  const [cData, setCData] = useState("");
  const [labData, setLabData] = useState("");
  const [code, setCodes] = useState("");

  const handleChange = (event: { target: { value: string } }) => {
    setCData(event.target.value);
  };
  const handleLabData = (event: { target: { value: string } }) => {
    setLabData(event.target.value);
  };

  const handleCodes = (event: { target: { value: string } }) => {
    setCodes(event.target.value);
  };

  return (
    <FormBox>
      <PatientInfoContainer>
        <Label variant="h6" paddingTop={"0.625rem"}>
          {patientData.name}
        </Label>
        <Spacer>
          <Text variant="subtitle2">{patientData.parentSpecimen}</Text>
          <Label variant="h6">{patientData.subSpecimen}</Label>
        </Spacer>
        <Spacer>
          <Stack direction="row">
            <DataContainer>
              <Text variant="subtitle1">No Specimen</Text>
              <Label variant="h6">{patientData.noOfSpecimens}</Label>
            </DataContainer>
            <DataContainer>
              <Text variant="subtitle1">Tissue Remaining</Text>
              <Label variant="h6">{patientData.tissueRemaining}</Label>
            </DataContainer>
          </Stack>
        </Spacer>
      </PatientInfoContainer>
      <Divider />

      <FormContainer>
        <FormGroup key={patientData.id}>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Container</InputLabel>
            <Select value={cData} onChange={handleChange} label="Container">
              {patientData.containerData!.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Spacer>
            <FormControl variant="standard" fullWidth>
              <InputLabel>Lab Protocol</InputLabel>
              <Select value={labData} onChange={handleLabData} label="Age">
                {patientData.labProtocolData!.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Spacer>
          <Spacer>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={7}>
                <TextField
                  id="standard-basic"
                  label="No of pieces"
                  variant="standard"
                  placeholder="Add pieces"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={5}>
                <Toggle control={<Switch />} label="Multiple" />
              </Grid>
            </Grid>
          </Spacer>
          <Spacer>
            <Label variant="subtitle1">Processing Instructions</Label>
          </Spacer>
          <FormControl variant="standard">
            <InputLabel>Code(s)</InputLabel>
            <Select value={code} onChange={handleCodes} label="code(s)">
              {patientData.processingCodes!.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Spacer>
            <TextField
              label="Other Instruction(s)"
              variant="standard"
              placeholder={patientData.instructions}
              fullWidth
            />
          </Spacer>
        </FormGroup>
      </FormContainer>
    </FormBox>
  );
};

export default EmbeddedForms;
