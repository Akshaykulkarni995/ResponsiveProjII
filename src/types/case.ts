import { Patient } from "./patient";
import { Specimen } from "./specimen";

export interface Case {
  caseId: string;
  patient: Patient;
  priority: "normal" | "urgent";
  specimens: Specimen[];
}
