import React, { Component } from 'react';
import axios from 'axios';

class AppointmentInput extends Component{
    state = {
        client : '',
        phone : '',
        time : '',

    }

    handleChangeName = event =>{
        this.setState({client:event.target.value})
    }
    
    handleChangePhone = event =>{
        this.setState({phone:event.target.value})
    }
    
    handleChangeTime = event =>{
        this.setState({time:event.target.value})
    }

    handleSubmit = event =>{
        event.preventDefault();
        // const appointment = {
            
        // }
        axios.post('/appointment', { client  : this.state.client,
            phone : this.state.phone,
            time : this.state.time })
            .then(res => {
                console.log(res)
                console.log(res.data)
                window.location.reload()
            })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Client Name:
                </label>
                <input type="text" name="client" onChange={this.handleChangeName} />
                <br />
                <label>
                    Phone Number:
                </label>  
                <input type="text" name="phone" onChange={this.handleChangePhone}/>
                <br />
                <label>
                    Time:
                </label>
                <input type="datetime-local" name="time" onChange={this.handleChangeTime}/>
        <button type="submit">Add</button>
            </form>
        )
    }
}

export default AppointmentInput;

