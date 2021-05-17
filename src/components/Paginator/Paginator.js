import React, {useState} from 'react';
import styles from './Paginator.module.css';
import leftArrow from './../../img/left-arrow.svg';
import rightArrow from './../../img/right-arrow.svg';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 3}) => {
   debugger;
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;
    
    return (
        <div className={styles.paginator__container}>
            <div className={styles.paginator__description}>
                {
                    totalItemsCount < pageSize 
                    ? <span>
                        {currentPage*pageSize-(pageSize-1)}-{totalItemsCount} of {totalItemsCount} items
                    </span>
                    : <span>
                        {currentPage*pageSize-(pageSize-1)}-{currentPage*pageSize} of {totalItemsCount} items
                    </span>
                }
            </div>
            <div className={styles.paginator__pages}>
                {
                    portionNumber > 1 
                    && <span>
                        <span onClick={() => {setPortionNumber(portionNumber - 1);}}><img src={leftArrow} alt="left arrow"/></span>
                        <span className={currentPage === 1 && styles.selectedPage} onClick={(e) => {onPageChanged(1);setPortionNumber(1)}}>1</span><span>...</span>
                    </span>
                }
                {
                    pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return (
                                <span key={p} 
                                      className={currentPage === p && styles.selectedPage} 
                                      onClick={(e) => {onPageChanged(p)}}>{p}</span>
                        )
                    })
                }
                {
                    portionCount > portionNumber 
                    && <span>
                            ...
                            <span className={currentPage === pagesCount && styles.selectedPage} 
                                     onClick={(e) => {
                                         onPageChanged(pagesCount);
                                         setPortionNumber(portionCount)
                                     }}>{pagesCount}
                            </span>
                            <span onClick={() => {setPortionNumber(portionNumber + 1)}}>
                                <img src={rightArrow} alt="right arrow"/>
                            </span>
                    </span>
                }
            </div>
        </div>
    )
}

export default Paginator;