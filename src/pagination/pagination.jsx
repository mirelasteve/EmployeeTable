import React from 'react'
import {PaginationUl,PaginationLi} from './pagination.styles';

const Pagination = ({currentPage,maxSize}) => {
    const numPages = Math.ceil(maxSize / 20);
    const pagesBlock = [];
    let page = 1;
    while(pagesBlock.length<numPages){
        pagesBlock.push(page);
        page+=1;
    }
    // console.log(pagesBlock)
    return (
        <PaginationUl>
            {pagesBlock.map(page=>
                currentPage === page
                    ? <PaginationLi style={{color:'red'}} key={page}>{page}</PaginationLi>
                    : <PaginationLi key={page}>{page}</PaginationLi>
                   
                
            )}
        </PaginationUl>
    )
}

export default Pagination
