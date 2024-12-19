import { expect, test } from "vitest";
import { Appointment } from "./appointment";
import { getFutureDate } from "../test/utils/get-future-date";

test('create an appointment', () => {
    const startAt = getFutureDate("2024-12-16");
    const endAt = getFutureDate("2024-12-17");

    const appointment = new Appointment({
        customer: 'Fabio',
        startAt,
        endAt,
    });

    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.customer).toBe('Fabio');
});

test("cannot create an appointment with end date before start date", () => {
    const startAt = new Date();
    const endAt = new Date(startAt.getTime() - 24 * 60 * 60 * 1000);

    expect(() => {
        new Appointment({
            customer: 'Fabio',
            startAt,
            endAt,
        });
    }).toThrow(Error);
});
