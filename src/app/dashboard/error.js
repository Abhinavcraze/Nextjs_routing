//error page should always be client component

"use client"

//the concept of error boundary in react
//error can only accessed from an parent folder
//if the error is accessed from a child (settings) we can create error.js file in that admin folder also
//if the error file is inside an admin and error file on same folder can't access to it

const Error = (error , reset) => {   //there is error on routing on some issues to avoid the error like this it will reset
   console.log(error);
  
  return (
    <div>
      <h1>Error, Something wrong!</h1>
      <button onClick={() => reset()}> Try Again! </button>      {/* this button will reload an error page */}
    </div>
  )
}

export default Error