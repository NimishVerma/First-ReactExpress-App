import React, { Component } from 'react';
import './appointments.css';
import axios from 'axios';

class Appointments extends Component{
    constructor(){
        super();
        this.state = {
            appointments : []
        }

    }
    componentDidMount(){
        
        fetch('/appointment').then(res => res.json())
        .then(appointments => this.setState({appointments},()=>console.log("appointments fetched,,"
        ,appointments.data.map((appointment)=>appointment.client))))
    }

    handleDelete = (e, x) => {
        console.log(`deleteing ${x}`)
        axios.delete(`/appointment?id=${x}`)
        .then(res=>{
            console.log(res)
            // this.forceUpdate()
            window.location.reload()

        })

    }

    render(){
    
        if(this.state.appointments.data){
        return (
            <div>
                <h2> Appointments </h2>
                <ul>
                    {this.state.appointments.data.map((appointment)=>
                        <li key={appointment._id}>{appointment.client } {appointment._id} {appointment.phone}    {}
                         {/* at {new Date(appointment.time).getDate()}/{new Date(appointment.time).getMonth()+1}
                        /{new Date(appointment.time).getFullYear()} on {new Date(appointment.time).getUTCHours()}:{new Date(appointment.time).getUTCMinutes()} */}
                        {/*BELOW IS FORMATTING OF DATETIME refer to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat */}
                        at {new Intl.DateTimeFormat('en-GB',{
                            year:'numeric',
                            month:'long',
                            day:'2-digit',
                            hour:'2-digit',
                            minute:'2-digit',
                            hour12:true,
                            timeZone:'UTC'


                        }).format(new Date(appointment.time))}
                        <span className="cross-icon"  onClick={(e)=>this.handleDelete(e, appointment._id)}>
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
