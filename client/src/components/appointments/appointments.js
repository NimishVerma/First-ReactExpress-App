import React, {Component} from 'react';
import './appointments.css';

class Appointments extends Component {
    constructor(props) {
        super(props);
    }

    // render function
    render() {

        if (this.props.appointments) {
            return (
                <div>
                    <h2> Appointments </h2>
                    <ul>
                        {this.props.appointments.map((appointment) =>
                                <li key={appointment._id}>{appointment.client} {appointment._id} {appointment.phone} {}
                                    {/* at {new Date(appointment.time).getDate()}/{new Date(appointment.time).getMonth()+1}
                        /{new Date(appointment.time).getFullYear()} on {new Date(appointment.time).getUTCHours()}:{new Date(appointment.time).getUTCMinutes()} */}
                                    {/*BELOW IS FORMATTING OF DATETIME refer to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat */}
                                    at {new Intl.DateTimeFormat('en-GB', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: true,
                                        timeZone: 'Asia/Kolkata'


                                    }).format(new Date(appointment.time))}
                                    <span className="cross-icon" onClick={(e) => this.props.handleDelete(e, appointment._id)}>
                            x
                        </span>
                                </li>
                        )
                        }
                    </ul>
                </div>
            )
        }
        return (
            <div>
                <h2>Appointments</h2>
                <b> Unavailable RN</b>
            </div>
        )

    }
}

export default Appointments;
