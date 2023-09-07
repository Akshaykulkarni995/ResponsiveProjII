import { Case } from "./case";
import { Specimen } from "./specimen";

export interface CardLayoutProps {
  id: string;
  caseInfo: Case;
}

export interface SpecimenCardProps {
  id: string;
  indent?: number;
  specimen: Specimen;
}
