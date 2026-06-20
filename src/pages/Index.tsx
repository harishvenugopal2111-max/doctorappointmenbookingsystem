import { toast } from 'sonner';
import { Header } from '@/components/Header';
import { AppointmentForm } from '@/components/AppointmentForm';
import { AppointmentTable } from '@/components/AppointmentTable';
import { useAppointments } from '@/hooks/useAppointments';

const Index = () => {
  const { appointments, addAppointment, deleteAppointment } = useAppointments();

  const handleBookAppointment = (appointmentData: Parameters<typeof addAppointment>[0]) => {
    addAppointment(appointmentData);
    toast.success('Appointment Booked Successfully!', {
      description: `${appointmentData.patientName} with ${appointmentData.doctor}`,
    });
  };

  const handleDeleteAppointment = (id: string) => {
    deleteAppointment(id);
    toast.info('Appointment cancelled');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-5xl py-8 md:py-12 space-y-8">
        <AppointmentForm onSubmit={handleBookAppointment} />
        <AppointmentTable
          appointments={appointments}
          onDelete={handleDeleteAppointment}
        />
      </main>

      <footer className="py-6 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 Doctor Appointment System | Built with care
        </div>
      </footer>
    </div>
  );
};

export default Index;
