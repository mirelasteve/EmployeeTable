import React, { useState } from 'react';
import styled from 'styled-components';
import {IDColumn,Avatar,NameColumn, CompanyColumn,BioColumn,LabelColumn,InfoRow,InputAddLabel, Container } from './employeeList.styles';
import Pagination from '../pagination/pagination';


const EmployeeTable = styled.table`
        border: 1px solid plum;
        background-color: ivory;        
         `;

const EmployeeList = ({data}) => {
    // const [ showLongBioFlag, showLongBio ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ beginSlice, setBeginSlice ] = useState(0);
    const [ endSlice, setEndSlice ] = useState(20);
    const [ currentData, showCurrentData ] = useState(data.slice(beginSlice,endSlice));
    const [ backgroundColors,setBackgroundColors ] = useState({});
    const [currentLabel,setCurrentLabel] = useState('');
    const [ labels, setLabels ] = useState({});
    const [ searchLabelsObj, setSearchLabelObj ] = useState({});
    const [ flagNotFound, setFlagNotFound ] = useState(false);
    // const [ heightImage, setHeightImage ] = useState('10%');

    const setBackgroundColorRow = (event,uuid) => {
        
        const newBackgroundColors = {...backgroundColors};
        newBackgroundColors[uuid] =  event.target.value;
        setBackgroundColors(newBackgroundColors);
    }

    const inputLabel = (event) => {
        setCurrentLabel(event.target.value)
    }
    const setLabel = (event,uuid,avatar,name,company,bio,title) => {
        
        const newLabels = {...labels};
        newLabels[uuid] =  currentLabel;
        setLabels(newLabels);
        const newSearchObj = {...searchLabelsObj};
        if( typeof(newSearchObj[currentLabel]) === 'undefined' ){
            newSearchObj[currentLabel] = [{
                uuid:uuid,
                avatar:avatar,
                name:name,
                company:company,
                bio:bio,
                title:title
            }]
        } else {
            newSearchObj[currentLabel].push({
                uuid:uuid,
                avatar:avatar,
                name:name,
                company:company,
                bio:bio,
                title:title
            })
        }
        setSearchLabelObj(newSearchObj);
    }

    const searchLabel = (event) => {
        console.log(searchLabelsObj[event.target.value])
        console.log(event.target.value, typeof(event.target.value))
        if(typeof(event.target.value) === 'undefined'){
            console.log('target undefined')
            setFlagNotFound(false);
            showCurrentData(data.slice(beginSlice-20,endSlice-20));
        } else if(typeof(searchLabelsObj[event.target.value]) === 'undefined'){
            console.log('not found',data,beginSlice,endSlice, data.slice(beginSlice,endSlice-20))
            setFlagNotFound(true);
            showCurrentData(data.slice(beginSlice,endSlice));
        } else {
            console.log('here')
            showCurrentData(searchLabelsObj[event.target.value])
            setFlagNotFound(false)
        }
        
        console.log(currentData)
    }
    
    return(
        <Container>
        
        <Pagination currentPage = {currentPage} maxSize = {data.length} ></Pagination>
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
        <input type='search' onInput={(e)=>searchLabel(e)}></input>
        {flagNotFound 
            ? <span>Cannot find</span>
            : <span></span>
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
                    <Avatar>
                        <img style={{height:'10%'}} onClick={()=>console.log(1)} src={avatar} alt='avatar'/>
                    </Avatar>
                    <NameColumn>{name}</NameColumn>
                    <CompanyColumn>{company}</CompanyColumn>
                    <BioColumn>{bio.slice(0,20)}</BioColumn>
                    {/* <BioColumn onMouseOver={()=>showLongBio(true)} onMouseLeave={()=>showLongBio(false)}>{showLongBioFlag ? bio : bio.slice(0,50)}</BioColumn> */}
                    <td>{title}</td>
                    <td>
                        {labels[uuid]
                        ? <LabelColumn>{labels[uuid]}</LabelColumn>
                        : <>
                            <InputAddLabel type='text' title='Set Label' onInput={(e)=>inputLabel(e)} placeholder='Add label' />
                            <button onClick={(e)=>setLabel(e,uuid,avatar,name,company,bio,title)}>SetLabel</button>
                          </>
                        }
                    </td>
                        
                        
                </InfoRow>
                )}
            </tbody>
        </EmployeeTable>
        </Container>
        
    )
}

export default EmployeeList