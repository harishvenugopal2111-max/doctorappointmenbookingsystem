import { useState, useEffect, useCallback } from 'react';
import { Appointment } from '@/types/appointment';

const STORAGE_KEY = 'doctor-appointments';

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setAppointments(JSON.parse(stored));
      } catch {
        setAppointments([]);
      }
    }
  }, []);

  const saveAppointments = useCallback((newAppointments: Appointment[]) => {
    setAppointments(newAppointments);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newAppointments));
  }, []);

  const addAppointment = useCallback((appointment: Omit<Appointment, 'id' | 'createdAt'>) => {
    const newAppointment: Appointment = {
      ...appointment,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    saveAppointments([...appointments, newAppointment]);
    return newAppointment;
  }, [appointments, saveAppointments]);

  const deleteAppointment = useCallback((id: string) => {
    saveAppointments(appointments.filter(a => a.id !== id));
  }, [appointments, saveAppointments]);

  return {
    appointments,
    addAppointment,
    deleteAppointment,
  };
}
