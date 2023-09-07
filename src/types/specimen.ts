export interface Specimen {
  derivatives?: Specimen[];
  description: string;
  name: string;
  printed: boolean;
  specimenId: number;
  specimenType: "cassette" | "pot" | "slide";
  status: "grossed" | "ordered";
  specimenSample1?: string;
  specimenSample2?: string;
}
