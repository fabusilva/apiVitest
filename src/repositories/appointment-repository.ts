import { Appointment } from "../entities/appointment";

export interface AppointmentRepositories {
  create(appointment: Appointment): Promise<void>;
  findOverLappingAppointment(startAt: Date, endAt: Date): Promise<Appointment | null>;
}
