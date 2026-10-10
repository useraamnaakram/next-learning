
"use client";
import { useState } from "react";
import Main from './components/common/Main'


export default function Home() {
 
  let [name, setName ] = useState('Usman Ali')


  // let person = {
  //   name: "Usman Ali",
  //   age: 30,
  //   email: "john@example.com",
  //   childClass: "10th",
  //   country: "Pakistan"
  // };
  
  // let { name, age, email, childClass } = person;
  // console.log(name, age, email, childClass); // Output: John Doe

  function handleInputChange(evt) {
    // console.log(evt.target.value)
    let value = evt.target.value;
    setName(value);

    // console.log(name)
    // name = 'asdf'
    // console.log(name)
  }
  return (



    <div>
      
      <Main />
      
      {name}

      <ParentComponent />

      <input type="text" value={name}  className="border-1 m-2" onChange={handleInputChange} />

    </div>
    

  )
}


function ParentComponent() {
  

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent name="Usman" age={25} email="usman@example.com" /> 
      <ChildComponent name="Ali" age={30} email="ali@example.com" /> 
      
      <ChildComponent name="Ali" age={30} email="ali@example.com" /> 
    </div>
  );
}

function ChildComponent({ name, age, email}: { name: string; age: number; email: string }) {
  return (
    <div className="bg-gray-100 p-4 rounded-md w-[400px] m-3">
      <h2 className='text-black'>Child name: {name}</h2>
      <h2 className='text-black'>Child age: {age}</h2>
      <h2 className='text-black'>Child email: {email}</h2>
    </div>
  );
}




    // <div className="w-md bg-green-100 px-4 py-5 ">
    //   <nav>
    //     <ul className="flex justify-center space-x-4">
    //       <li>
    //         <a href="/" className="text-blue-500 hover:text-blue-700">
    //           Home
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/about" className="text-blue-500 hover:text-blue-700">
    //           About
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>

    //   <a href="/about" className="text-blue-500 hover:text-blue-700">
    //     Go to About Page
    //   </a>

    //   <br />
    //   <img src="/public/file.svg" alt="Description of the image" />

    //   <a href="/contact" className="text-blue-500 hover:text-blue-700">
    //     Go to Contact Page
    //   </a>
    //   <h1 className="text-red-500 text-2xl">This is our heading</h1>
    //   <h1 className="text-blue-500 text-lg uppercase ">This is our heading</h1>
    //   <h1 className="text-green-500 ">This is our heading</h1>
    //   <h1 className="text-yellow-500 ">This is our heading</h1>
    //   <h1 className="text-purple-500 ">This is our heading</h1>
    //   <h1 className="text-pink-500 ">This is our heading</h1>
    //   <h1 >This is our heading</h1>



    // </div>





