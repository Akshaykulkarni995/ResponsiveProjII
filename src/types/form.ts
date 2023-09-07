export interface IFormData {
  id?: string;
  name?: string;
  parentSpecimen?: string;
  subSpecimen?: string;
  noOfSpecimens?: number;
  tissueRemaining?: number;
  containerData?: string[];
  labProtocolData?: string[];
  pieces?: number;
  multiple?: boolean;
  processingCodes?: string[];
  instructions?: string;
}
