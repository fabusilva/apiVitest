import { Appointment } from "../entities/appointment"
import { AppointmentRepositories } from "../repositories/appointment-repository";

interface request{
    customer:string,
    startAt: Date,
    endAt: Date
}
type response = Appointment
export class CreateAppointment{
    constructor ( private appointmentRepository: AppointmentRepositories){}

    async execute({customer,startAt,endAt}:request):Promise<response>{ 
        const overLapping = await this.appointmentRepository.findOverLappingAppointment(startAt,endAt);
        if(overLapping){
            throw new Error('Another appointment overlaps this appointment dates')
        }
        const appointment = new Appointment({customer,startAt,endAt});
        await this.appointmentRepository.create(appointment)
        return appointment;
    }
}