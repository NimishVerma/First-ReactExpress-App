import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import Appointments from './components/appointments/appointments';
import AppointmentInput from './components/appointmentinput/appointmentinput';

class App extends Component {
    //cons
    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            client: '',
            phone: '',
            time: '',
            onSuccessFullSubmit: false
        }
    }

//    lifecycle hooks

    // lifecycle hook
    componentDidMount() {

        fetch('/appointment').then(res => res.json())
            .then(appointments => this.setState({appointments: appointments.data}, () => {
                    console.log("appointments fetched,,"
                        , this.state.appointments.map((appointment) => appointment.client))
                    console.log(this.state.appointments)
                }
            ))
    }

    // appointment delete function
    handleDelete = (e, x) => {
        console.log(`deleteing ${x}`)
        axios.delete(`/appointment?id=${x}`)
            .then(res => {
                console.log(res)
                // this.forceUpdate()
                const index = this.state.appointments.findIndex((appointment) => {
                    return appointment._id === x
                })
                const appointments = Object.assign([], this.state.appointments)
                appointments.splice(index, 1)
                this.setState({appointments: appointments})
                // window.location.reload()

            })

    }

//    appointmenstinput functions
    handleChangeName = event => {
        this.setState({client: event.target.value})
    }

    handleChangePhone = event => {
        this.setState({phone: event.target.value})
    }

    handleChangeTime = event => {
        this.setState({time: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        // const appointment = {

        // }
        axios.post('/appointment', {
            client: this.state.client,
            phone: this.state.phone,
            time: this.state.time
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({onSuccessFullSubmit: true})
                // window.location.reload()
            })
    }

//    render function
    render() {
        return (
            <div className="App">

                <Appointments
                    handleDelete={(a, b) => this.handleDelete()}
                    appointments={this.state.appointments}
                />
                <AppointmentInput
                    handleChangeName={(e) => this.handleChangeName()}
                    handleChangePhone={(e) => this.handleChangePhone()}
                    handleChangeTime={(e) => this.handleChangeTime()}
                    handleSubmit={(e) => this.handleSubmit()}
                />
            </div>
        )
    }

}


export default App;
