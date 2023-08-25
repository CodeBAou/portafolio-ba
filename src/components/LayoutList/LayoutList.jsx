import React, { useState, useEffect } from 'react'
import style from './LayoutList.module.css';
import styles from '../../app/page.module.css';
const LayoutList = (props) => {


    

    return(
        <div className={style.content}>
            {props.children}
        </div>
    )
}

export default LayoutList;