import { IFormData } from "../types/form";

export const patientData: IFormData = {
  id: "PatientForm",
  name: "Microtomy",
  parentSpecimen: "Parent Specimen",
  subSpecimen: "Breast biopsy, Left",
  noOfSpecimens: 2,
  tissueRemaining: 3,
  containerData: ["Cassette", "Cassette1", "Cassette2", "Cassette3"],
  labProtocolData: ["Wax", "Wax1", "Wax2"],
  pieces: 1,
  multiple: false,
  processingCodes: ["001", "002", "003", "004", "005"],
  instructions: "Optional instructions",
};
