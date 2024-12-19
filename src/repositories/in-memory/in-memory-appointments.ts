import { Appointment } from "../../entities/appointment";
import { AppointmentRepositories } from "../appointment-repository";
import { areIntervalsOverlapping } from "date-fns";

export class InMemoryAppointment implements AppointmentRepositories {
  public itens: Appointment[] = [];
  async create(appointment: Appointment): Promise<void> {
    this.itens.push(appointment);
  }
  async findOverLappingAppointment(startAt: Date, endAt: Date): Promise<Appointment | null> {
    const overLappingAppointment = this.itens.find((appointment) => {
      return areIntervalsOverlapping(
        { start: startAt, end: endAt },
        { start: appointment.startAt, end: appointment.endAt },
        { inclusive: true }
      );
    });
    if (!overLappingAppointment) {
      return null;
    }
    return overLappingAppointment;
  }
}
