import React, { Component } from 'react'
import PropTypes from 'prop-types'  

 class UserProp extends Component {
    constructor(props){
        super(props);
        this.state = {
            test : "Test"
        }
    }

    onClickEvent= (e) => {

        console.log(this);
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

  render() {

    //Destructing
    const {name, department,salary} =this.props;
    const {isVisible} = this.state;
    return (
        <div>
        <ul>
            <li>İsim: {name}</li>
            <li>Departman: {department}</li>
            <li>Maaş: {salary}</li>
            <button id={name} onClick={this.onClickEvent.bind(this)} >{this.state.test}</button>
             {isVisible ? <p>Gösterildi</p> : null } 
        </ul>
    </div>
    )
  }
}

UserProp.defaultProps = {
    name : "Bilgi Yok",
    salary : "Bilgi Yok",
    department : "Bilgi Yok"
}
UserProp.propTypes = {
    name : PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department : PropTypes.string.isRequired
}

export default UserProp;

/*
 <li>İsim: {this.props.name}</li>
            <li>Departman: {this.props.department}</li>
            <li>Maaş: {this.props.salary}</li>
*/
/*
<p>{this.state.tes t}</p>
    constructor(props){
        super(props);
        this.state = {
            test : "Test"
        }
*/