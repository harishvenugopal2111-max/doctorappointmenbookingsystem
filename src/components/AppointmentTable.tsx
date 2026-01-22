import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Trash2, User, Stethoscope, ClipboardList } from 'lucide-react';
import { Appointment } from '@/types/appointment';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface AppointmentTableProps {
  appointments: Appointment[];
  onDelete: (id: string) => void;
}

export function AppointmentTable({ appointments, onDelete }: AppointmentTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
          <ClipboardList className="w-5 h-5 text-primary-foreground" />
        </div>
        <h2 className="text-xl font-display font-semibold text-card-foreground">
          Scheduled Appointments
        </h2>
        <span className="ml-auto bg-accent text-accent-foreground text-sm font-medium px-3 py-1 rounded-full">
          {appointments.length} booked
        </span>
      </div>

      {appointments.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">No appointments scheduled yet.</p>
          <p className="text-sm text-muted-foreground mt-1">
            Book your first appointment above!
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="text-muted-foreground font-semibold">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Patient
                  </div>
                </TableHead>
                <TableHead className="text-muted-foreground font-semibold">Age</TableHead>
                <TableHead className="text-muted-foreground font-semibold">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-4 h-4" />
                    Doctor
                  </div>
                </TableHead>
                <TableHead className="text-muted-foreground font-semibold">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Date
                  </div>
                </TableHead>
                <TableHead className="text-muted-foreground font-semibold">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Time
                  </div>
                </TableHead>
                <TableHead className="text-right text-muted-foreground font-semibold">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence>
                {appointments.map((appointment, index) => (
                  <motion.tr
                    key={appointment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-border hover:bg-muted/50 transition-colors"
                  >
                    <TableCell className="font-medium text-card-foreground">
                      {appointment.patientName}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {appointment.age} yrs
                    </TableCell>
                    <TableCell className="text-card-foreground">
                      {appointment.doctor}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(appointment.date)}
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                        {appointment.time}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onDelete(appointment.id)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </div>
      )}
    </motion.div>
  );
}
