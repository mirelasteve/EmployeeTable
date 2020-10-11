import React from 'react'
// import axios from 'axios';
import EmployeeList from './table/employeelist.component';
import data from './data/data';
const App = () => {
  
 
  return (
    <div>
      <EmployeeList data={data}></EmployeeList>
    </div>
  )
}
export default App;