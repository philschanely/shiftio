export type Qualifications = 'RN' | 'LPN' | 'CNA';

export type APINurse = {
  email: string;
  first_name: string;
  id: Number;
  last_name: string;
  qualification: Qualifications;
  username: string;
}

export type APIShift = {
  end: string;
  id: Number;
  name: string;
  nurse_id: Number | null;
  qual_required: Qualifications;
  start: string;
}

export type Nurse = {
  email: string;
  firstName: string;
  id: Number;
  lastName: string;
  qualification: Qualifications;
  username: string;
  displayName: string;
}

export type Shift = {
  end: string;
  id: Number;
  name: string;
  nurse: Nurse | null;
  qualification: Qualifications;
  shift: string;
  start: string;
}
