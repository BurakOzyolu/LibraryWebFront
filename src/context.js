import React, { Component } from 'react'

const UserContext = React.createContext();

//Provide, Consumer

export  class UserProvider extends Component {
    state = {
        users: [
          {
            id: 1,
            name:"Raikage",
            salary : "25000",
            department :"Sumogakure"
          },
          {
            id: 2,
            name:"Tsunade",
            salary : "15000",
            department :"Konoha"
          },
          {
            id: 3,
            name:"Kushina",
            salary : "15000",
            department :"Konoha"
          },
        ]
      }

  render() {
    return (
      <UserContext.Provider>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}



