import React, { Component } from 'react'
import User from './UserProp'
 class Users extends Component {
  render() {
    const {users} = this.props;
    console.log(users);
    return (
      <div>
        {
            users.map(user => {
                return(
                    <User
                     name={user.name}
                     salary={user.salary}
                     deparment={user.deparment}
                    />
                )
            })
        }
      </div>
    )
  }
}
export default Users;