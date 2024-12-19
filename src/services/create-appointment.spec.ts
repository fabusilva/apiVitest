import { describe, it, expect } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { Appointment } from "../entities/appointment";
import { getFutureDate } from "../test/utils/get-future-date";
import { InMemoryAppointment } from "../repositories/in-memory/in-memory-appointments";

describe("Create Appointment", () => {
  it("should create an appointment successfully", async () => {
    const appointmentRepository = new InMemoryAppointment()
    const createAppointment = new CreateAppointment(appointmentRepository);
    const startAt = getFutureDate("2024-12-16");
    const endAt = getFutureDate("2024-12-17");

    const result = await createAppointment.execute({
      customer: "Fabio",
      startAt,
      endAt,
    });
    expect(result).toBeInstanceOf(Appointment);
  });
});
