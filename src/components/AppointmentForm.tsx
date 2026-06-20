import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DOCTORS, TIME_SLOTS, Appointment } from '@/types/appointment';

interface AppointmentFormProps {
  onSubmit: (appointment: Omit<Appointment, 'id' | 'createdAt'>) => void;
}

export function AppointmentForm({ onSubmit }: AppointmentFormProps) {
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!patientName || !age || !doctor || !date || !time) return;

    onSubmit({
      patientName,
      age: parseInt(age),
      doctor,
      date,
      time,
    });

    // Reset form
    setPatientName('');
    setAge('');
    setDoctor('');
    setDate('');
    setTime('');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
          <UserPlus className="w-5 h-5 text-primary-foreground" />
        </div>
        <h2 className="text-xl font-display font-semibold text-card-foreground">
          Book Appointment
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="patientName" className="text-sm font-medium">
              Patient Name
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="patientName"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Enter patient name"
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="age" className="text-sm font-medium">
              Age
            </Label>
            <Input
              id="age"
              type="number"
              min="1"
              max="120"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="doctor" className="text-sm font-medium">
              Select Doctor
            </Label>
            <Select value={doctor} onValueChange={setDoctor} required>
              <SelectTrigger>
                <SelectValue placeholder="Choose a doctor" />
              </SelectTrigger>
              <SelectContent>
                {DOCTORS.map((doc) => (
                  <SelectItem key={doc.id} value={`${doc.name} – ${doc.specialty}`}>
                    <span className="font-medium">{doc.name}</span>
                    <span className="text-muted-foreground ml-1">– {doc.specialty}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date" className="text-sm font-medium">
              Appointment Date
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="date"
                type="date"
                min={today}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="time" className="text-sm font-medium">
              Time Slot
            </Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
              <Select value={time} onValueChange={setTime} required>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent>
                  {TIME_SLOTS.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full gradient-primary hover:opacity-90 transition-opacity font-semibold"
        >
          Book Appointment
        </Button>
      </form>
    </motion.div>
  );
}
