import React, { Component } from 'react';


class ListComponents extends Component {


  render() {
   

    return (
      <div className='App'>
       
        {this.props.filteredUsers.map((user) => (
            <div className='name' key={user.id} >
              
              <h1>{user.name}</h1>
              <h1>{user.capital}</h1>
              <h1>{user.border}</h1>

              
            </div>
             
       
          ))}
      </div>

    );
  }
}

export default ListComponents;
