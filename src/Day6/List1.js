import React from 'react'
export default function List1()
{
    const college=[{id:1,stuName:"sachin", age:26},
                 {id:2,stuName:"sachin1", age:28},
                 {id:3,stuName:"sachin2", age:27},]

                 const display=college.map((col)=><li key={col.id}>{col.stuName} {col.age} </li>)
                 return(
                    <div style={{backgroundColor:"Yellow"}}>
                        <h1>List of student</h1>
                        {display}
                    </div>
                 )
}