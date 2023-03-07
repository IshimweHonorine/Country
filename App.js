// import React, { Component } from 'react';
// import './App.css';
// import Footer from './Component/footer.js'
// import ListComponents from './Component/listing.component';
// import Navbar from './Component/NavBar';
// import './data.json';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       loading: true,
//       users: ['data'],
//       searchTerm: '',
//     };
//   }

//   // componentDidMount() {
//   //   fetch('https://restcountries.com/v3.1/all')
//   //     .then((res) => res.json())
//   //     .then((list) => {
//   //       this.setState({
//   //         all: list,
//   //         loading: false,
//   //       });
//   //     });
//   // }

//   searchHandler = (e) => {
//     this.setState({ searchTerm: e.target.value });
//   };

//   render() {
//     const filteredUsers = this.state.users.filter((user) =>
//       user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
//     );

//     return (
      
//       <div className='App'>
//       <Navbar />

//       <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
//        type="text" placeholder="search by name" onChange={this.searchHandler}/>

        
//        {this.state.loading? 'Loading...' : <ListComponents filteredUsers ={filteredUsers}/>}
         
//         {/* <h1>{this.state.users}</h1> */}

//         <Footer />
//       </div>
     
//     );
   
//   }
// }

// export default App;

import React, { Component } from "react";
import JsonData from "./data.json";
import Navbar from './Component/NavBar';
import Footer from "./Component/footer";
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      getdata:''
    };
  }
   componentDidMount() {
    this.setState({data:JsonData})
  }
  searchdata=(event)=>{
    const getdata=event.target.value.toLowerCase()
    this.setState({getdata:getdata})
  
  }
  

  render() {
  const filtereddata=JsonData.filter((jsonItem)=>(
   jsonItem.name.toLocaleLowerCase().includes(this.state.getdata)
  ))

    return( <div>
      <Navbar />
      <div className='p-10 m-1 flex space-x-2 md:space-x-20 '>
      
        <input type='text' placeholder="search....." className='h-10  border border-white-600' onChange={this.searchdata} />
        
        
        <label className="border border-white-600 ">  


  <select>
<option>Filter by Region</option>
    <option value="africa">Africa</option>

    <option value="america">America</option>

    <option value="asia">Asia</option>

  </select>

</label>
        
        </div>
    <div className='grid grid-rows-5 grid-flow-col gap-6  justify-end p-3 w-full mt-5'>
    <div className="">



</div>
    
      {console.log(this.state.getdata)}
    
      {filtereddata.map((dataitem)=>(
      
        <div className='bg-white'>
       <img src={dataitem.flag} className='h-20 p-0 '></img>
          <p>{dataitem.name}</p>
          <p>population:{dataitem.population}</p>
          <p>region:{dataitem.region}</p>
          <p>capital:{dataitem.capital}</p>
          
        </div>
        
        
      ))}
      </div>
      <footer/>
    </div>)
  }
}
export default App;
