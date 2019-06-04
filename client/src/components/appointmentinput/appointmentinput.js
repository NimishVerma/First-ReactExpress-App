import React, {Component} from 'react';

class AppointmentInput extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label>
                    Client Name:
                </label>
                <input type="text" name="client" onChange={this.props.handleChangeName}/>
                <br/>
                <label>
                    Phone Number:
                </label>
                <input type="text" name="phone" onChange={this.props.handleChangePhone}/>
                <br/>
                <label>
                    Time:
                </label>
                <input type="datetime-local" name="time" onChange={this.props.handleChangeTime}/>
                <button type="submit">Add</button>
            </form>
        )
    }
}

export default AppointmentInput;

