import React, { useEffect } from 'react'
import axios from 'axios';
import EmployeeList from './table/employeelist.component';
import data from './data/data';
const App = () => {
  
  useEffect( ()=>{
    const getData = async()=>{
      try{
        const res = await axios.get('http://hiring.rewardgateway.net/list',{
          auth: {
            username: 'medium',
            password: 'medium'
          },
          headers: { 'content-type': 'application/json' },
        });
        console.log(res)
      } catch(error){
        console.log(error)
      }
      
    }
    getData()
  })
 
  return (
    <div>
      <EmployeeList data={data}></EmployeeList>
    </div>
  )
}
export default App;