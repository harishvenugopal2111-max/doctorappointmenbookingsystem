export interface Appointment {
  id: string;
  patientName: string;
  age: number;
  doctor: string;
  date: string;
  time: string;
  createdAt: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  avatar?: string;
}

export const DOCTORS: Doctor[] = [
  { id: '1', name: 'Dr. Chandhira Kumar', specialty: 'General Physician' },
  { id: '2', name: 'Dr. Soundarya', specialty: 'General Physician' },
];

export const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
];
