"use client"
import React,{useState,useEffect} from 'react';
import Style from './TabProyectos.module.css';
import Url_config from '../../Url_config';

interface TabProyectosPropsI{
    setPage:(n:number) => void;
}

const TabProyectos = (props:TabProyectosPropsI) => {

    const url = new Url_config();
    const [total,setTotal] = useState(0);
    const [paneles,setPaneles] = useState(0);

    useEffect(()=>{

        fetch(url.route_totalPost(),{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            return res.json();
        }).then(res => {
            setTotal(res.total);
        }).catch( err => {
            alert(err);
        });

        let npaneles = total/9;
        setPaneles(npaneles);

    }, []);

    const getItems = () => {
        let btn = [];

        for (let i = 1; i < paneles; i++) {
           btn.push( <input key={i+"itemTab"} className={Style.btn} value={i}/> );
        }

        if(btn.length == 0){ btn.push( <input type="button" key={0+"itemTab"} className={Style.btn} value={1}/> )}

        return btn;
       
    }
    return(
        <div className={Style.content}>
            { getItems() }  
        </div>
    )
}

export default TabProyectos;


