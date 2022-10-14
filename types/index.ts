export type Qualifications = 'RN' | 'LPN' | 'CNA';

export type APINurse = {
  email: String;
  first_name: String;
  id: Number;
  last_name: String;
  qualification: Qualifications;
  username: String;
}

export type APIShift = {
  end: String;
  id: Number;
  name: String;
  nurse_id: Number | null;
  qual_required: Qualifications;
  start: String;
}

export type Nurse = {
  email: String;
  firstName: String;
  id: Number;
  lastName: String;
  qualification: Qualifications;
  username: String;
  displayName: String;
}

export type Shift = {
  end: String;
  id: Number;
  name: String;
  nurse: Nurse | null;
  qualification: Qualifications;
  shift: String;
  start: String;
}
