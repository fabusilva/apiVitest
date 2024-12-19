export interface AppointmentProps{
    customer: string,
    startAt: Date,
    endAt: Date,
}
export class Appointment{
    private appointment: AppointmentProps;

    get customer(){
        return this.appointment.customer;
    }

    get startAt(){
        return this.appointment.startAt;
    }

    get endAt(){
        return this.appointment.endAt;
    }

    constructor(props:AppointmentProps){
        const {endAt, startAt} = props;
        if(endAt <= startAt){
            throw new Error(`invalid date`); 
        }
        if(startAt <= new Date()){
            throw new Error(`invalid date`); 
        }
        this.appointment = props;
    }
}