import React from 'react';
import type { Adapter } from "next-auth/adapters";
import { useRouter } from 'next/router'

interface editPageI{
    session: Adapter
}
function EditPage (props:editPageI)  {

    const router = useRouter();
    
    if(props.session){
        return (
            <>
            editpage
            </>
        );
    }else{
        router.push('/adminPage')
    }
   
}

export default EditPage;