import styled from 'styled-components';

export const Container = styled.div`
    border:2px solid black;
    font-size:1rem;
    font-family: 'Poppins', serif;
    margin:1% 5%;
    overflow-x:auto;
    width:90%;
   
`
export const EmployeeTable = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    @media (max-width: 768px) {
        font-size:0.6rem;
      }    
            `;

export const InfoRow = styled.tr`
    background-color: ${props=>props.backgroundColor ? props.backgroundColor : props.index%2 ? '#f8f8f8' : 'e8e8e8'};
    &:hover {
        opacity:0.7
    }
    `
export const IDColumn = styled.td`
    color:blue;
    font-style: italic;
    width: 10%;
    
`
export const NameColumn = styled.td`
    color:black;
    width:10%;
    
`
export const CompanyColumn = styled.td`
    font-weight: bold;
    width:10%;
    
    
`
export const BioColumn = styled.td`
    color:black;
    width:30%;
    
`

export const LabelColumn = styled.td`
    color:black;
    width:10%;
    
`
export const Avatar = styled.td`
    height:10%;
    width:10%;
    cursor:pointer;
`
export const InputAddLabel = styled.input`
    border:none;
    color:grey;
    &:hover {
        background: #fff;
        border:none;
      }
`

export const SetLabelButton = styled.button`
      font-size:0.5rem;
`
export const SearchInput = styled.input`
    background-color: #fff;
    border-color: #808080;
    border-radius: 5px;
    color: #000;
    height:2.5rem;
    font-size:1rem;
    line-height:2rem;
    margin:2%;
    width:30%;
    @media (max-width: 768px) {
        font-size:0.6rem;
        height:1.5rem;
        line-height:1rem;
      }
`
export const TextNotFound = styled.span`
    margin-left:1%;
    color:red;
    font-size:0.8rem;
`

