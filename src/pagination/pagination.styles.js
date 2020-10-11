import styled from 'styled-components';

export const PaginationUl = styled.ul`
    list-style:none;
    padding:1% 40rem;
    font-size:2rem;
    border:1px solid black;
    background-color: #eef3fe;
`

export const PaginationLi = styled.li`
    color:#3c99dc;
    border:1px solid #d5f3fe;
    display:inline;
    padding:15%;
    margin:2%;
    &:hover {
        
        border:1px solid #d5f3cc;
    }
`