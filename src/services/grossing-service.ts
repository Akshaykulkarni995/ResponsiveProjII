import { Patient } from "../types/patient";
import { Specimen } from "../types/specimen";

export interface Case {
  id: string;
  caseId: string;
  selectedAsset: string;
  patient: Patient;
  priority: "normal" | "urgent";
  specimens: Specimen[];
}

const caseInfo: Case = {
  id: "patient",
  caseId: "22H00001234",
  selectedAsset: "A",
  patient: {
    address: "86 Townfield",
    dateOfBirth: "22-Aug-2000 (24y)",
    gender: "Female",
    mrn: "12987235",
    name: "Bandaranayake, Thilakarathna",
    nationalIdentifier: "(NHS) 123 456 7890",
    sexAtBirth: "Female",
  },
  priority: "urgent",
  specimens: [
    {
      description: "Adrenal tissue",
      name: "A",
      printed: false,
      specimenId: 1,
      specimenType: "pot",
      status: "grossed",
      specimenSample1: "Adrenal tissue",
    },
    {
      description: "Breast biopsy, Left",
      name: "B",
      printed: true,
      specimenId: 2,
      specimenType: "pot",
      status: "ordered",
      specimenSample1: "Breast biopsy",
      derivatives: [
        {
          description: "ML123P",
          name: "B-1",
          printed: true,
          specimenId: 21,
          specimenType: "cassette",
          status: "ordered",
          specimenSample1: "ML123P",
          specimenSample2: "WAX",
          derivatives: [
            {
              description: "ML123P/1",
              name: "B-1-1",
              printed: true,
              specimenId: 211,
              specimenType: "slide",
              status: "ordered",
              specimenSample1: "Levels 1-3",
              specimenSample2: "H&E",
              derivatives: [
                {
                  description: "ML123P/1/1",
                  name: "B-1-1-1",
                  printed: true,
                  specimenId: 2111,
                  specimenType: "slide",
                  status: "ordered",
                  specimenSample1: "CD20",
                  specimenSample2: "CD20",
                },
                {
                  description: "ML123P/1/2",
                  name: "B-1-1-2",
                  printed: true,
                  specimenId: 2112,
                  specimenType: "slide",
                  status: "ordered",
                  specimenSample1: "WAX",
                  specimenSample2: "WAX",
                },
              ],
            },
            {
              description: "ML123P/2",
              name: "B-1-2",
              printed: true,
              specimenId: 212,
              specimenType: "slide",
              status: "ordered",
              specimenSample1: "CD20",
              specimenSample2: "CD20",
            },
          ],
        },
        {
          description: "Wax",
          name: "B-2",
          printed: true,
          specimenId: 22,
          specimenType: "slide",
          status: "ordered",
        },
      ],
    },
  ],
};

const specimen: Specimen = {
  description: "Breast biopsy, Left",
  name: "B",
  printed: true,
  specimenId: 2,
  specimenType: "cassette",
  status: "ordered",
};

const getCase = async (): Promise<Case> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(caseInfo);
    }, 300);
  });
};

const getSpecimen = async (specimenId: number): Promise<Specimen> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(specimen);
    }, 300);
  });
};

export { getCase, getSpecimen, caseInfo };
