import React,{useState} from 'react';
import Style from './style.module.css';
import StatusTool from '../StatusTool/StatusTool';
import NuevoTool from '../NuevoTool/NuevoTool';


interface  postToolsType{
    token:string
}

const PostTools = (props:postToolsType) => {

    const [ option,setOption] = useState("Status");

    const select = () => {
        switch(option){
            case 'Status':
                    return <StatusTool token={props.token}/>
                break;
            case 'Nuevo':
                    return <NuevoTool token={props.token}/>
                break;
        }
    }

    return(

        <div className={Style.content}>
 
            <nav className={Style.menu}>
                <span className={Style.option} onClick={ () => setOption('Status')} >Status</span>
                <span className={Style.option} onClick={ () => setOption('Nuevo')}  >Nuevo</span>
            </nav>
 
            <div className={Style.tool}>
                { /** Se carga la herramienta segun el estado option */ }
                { select() }
            </div>

        </div>
     )
}

export default PostTools;