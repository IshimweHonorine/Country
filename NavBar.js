import React, { Component } from 'react';



class Navbar extends Component{


render(){
    return(
<nav class="flex items-center justify-between flex-wrap bg-white p-6 border border-white-600 ">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-black tracking-tight">Where in the world?</span>
  
    </div>
    {/* <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div> */}
    <div class="bg-white dark:bg-black">
  
  </div>
  
</nav>
    )
}
}

export default Navbar;