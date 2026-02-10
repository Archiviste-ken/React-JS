import React from 'react'

function card({username, btnText = "visit me"}) {
    console.log(username, btnText);
    
  return (
    
   <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s" />
  </div>
  <div className="flex items-center md:items-start">
    <span className="text-2xl font-medium">{username}</span>
    <span className="font-medium text-sky-500">{username}</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>{btnText}</span>
      <span>·</span>
      <span>{btnText}</span>
    </span>
  </div>
</div>
  )
}

export default card


// props are the way to pass data from parent component to child component in react. It is a read only data, it cannot be modified by the child component. It is used to pass data from parent component to child component. It is also used to pass data from child component to parent component using callback functions.