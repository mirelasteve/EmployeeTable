import React, { useState } from 'react';
import styled from 'styled-components';
import {IDColumn,Avatar,NameColumn, CompanyColumn,BioColumn,LabelColumn,InfoRow,InputAddLabel } from './employeeList.styles';


const EmployeeTable = styled.table`
        border: 1px solid plum;
        background-color: ivory;
        width:90%;
        margin-left:5%; `;

const EmployeeList = ({data}) => {
    const [ showLongBioFlag, showLongBio ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ beginSlice, setBeginSlice ] = useState(0);
    const [ endSlice, setEndSlice ] = useState(20);
    const [ currentData, showCurrentData ] = useState(data.slice(beginSlice,endSlice));
    const [ backgroundColors,setBackgroundColors ] = useState({});
    const [ labels, setLabels ] = useState({});


    const setBackgroundColorRow = (event,uuid) => {
        
        const newBackgroundColors = {...backgroundColors};
        newBackgroundColors[uuid] =  event.target.value;
        setBackgroundColors(newBackgroundColors);
    }

    const setLabel = (event,uuid) => {

        const newLabels = {...labels};
        newLabels[uuid] =  event.target.value;
        setLabels(newLabels);

    }

    return(
        <>
        <div>{currentPage}</div>
        { currentPage > 1 ? <button onClick={()=>{
                setCurrentPage(currentPage-1);
                setBeginSlice(beginSlice-20);
                setEndSlice(endSlice-20);
                showCurrentData(data.slice(beginSlice-20,endSlice-20))
            }}>Previous page</button>
            : <span></span>
        }
        { endSlice <= data.length ? <button onClick={()=>{
                setCurrentPage(currentPage+1);
                setBeginSlice(beginSlice+20);
                setEndSlice(endSlice+20);
                showCurrentData(data.slice(beginSlice+20,endSlice+20))
            }}>Next page</button>
            :<span></span>
        }
        <EmployeeTable>
            <thead>
                <tr>
                    <td>Index</td>
                    <td></td>
                    <td>ID</td>
                    <td>Avatar</td>
                    <td>Name</td>
                    <td>Company</td>
                    <td>Bio</td>
                    <td>Title</td>
                    <td>Label</td>
                </tr>
            </thead>
            <tbody>
                {currentData.map(({uuid,avatar,name,company,bio,title},index)=>
                <InfoRow key={uuid} style={{backgroundColor:backgroundColors[uuid]}}>
                    <td>{index+1}</td>
                    <td><input type='color' onChange={(e)=>setBackgroundColorRow(e,uuid)}></input></td>
                    <IDColumn>{uuid}</IDColumn>
                    <Avatar><img style={{height:'10%'}} onClick={()=>console.log(1)} src={avatar}/></Avatar>
                    <NameColumn>{name}</NameColumn>
                    <CompanyColumn>{company}</CompanyColumn>
                    <BioColumn>{bio.slice(0,20)}</BioColumn>
                    {/* <BioColumn onMouseOver={()=>showLongBio(true)} onMouseLeave={()=>showLongBio(false)}>{showLongBioFlag ? bio : bio.slice(0,50)}</BioColumn> */}
                    <td>{title}</td>
                    <td>
                        {labels[uuid]
                        ? 
                        <>
                            <LabelColumn>{labels[uuid]}</LabelColumn>
                            
                        </>
                        : <InputAddLabel type='text' title='Set Label' placeholder='Add label' onChange={(e)=>setLabel(e,uuid)}/>
                        }
                    </td>
                        
                        
                </InfoRow>
                )}
            </tbody>
        </EmployeeTable>
        </>
        
    )
}

export default EmployeeList