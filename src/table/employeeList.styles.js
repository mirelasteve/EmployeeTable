import styled from 'styled-components';

export const Container = styled.div`
    width:90%;
    margin:1% 5%;
    border:2px solid black;
    font-size:1rem;
`
export const InfoRow = styled.tr`
    background-color: ivory;
    &:hover {
        background-color: #FFEBCD
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
    width:10%
`
export const InputAddLabel = styled.input`
    border:none;
    color:grey;
    &:hover {
        background: white;
        
        border:none;
      }
`