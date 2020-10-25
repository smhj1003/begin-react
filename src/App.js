import React,{ useRef, useState } from 'react';
import UserList from './UserList';


function App() {
  const users = [
    {
        id: 1,
        username: 'kim',
        email: 'kim@gmail.com'
    },
    {
        id: 2,
        username: 'lee',
        email: 'lee@gmail.com'
    },
    {
        id: 3,
        username: 'park',
        email: 'park@gmail.com'
    }
];

const nextId = useRef(4);
const onCreate = () => {

  console.log(nextId.current);//4
  nextId.current =+ 1;
}
  
  return (
    <>
      <UserList users={users} />
    </>
  )
} 

export default App;
