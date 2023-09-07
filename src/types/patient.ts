export interface Patient {
  address: string;
  dateOfBirth: string;
  dateOfDeath?: string;
  gender: string;
  mrn?: string;
  name: string;
  nationalIdentifier: string;
  sexAtBirth: string;
}
