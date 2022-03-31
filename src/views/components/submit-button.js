import {Button} from "antd";
import React from "react";

const FormButton=({name})=>{
    return(
        <>
            <Button className={"mt-5 text-dark-blue border-dark-blue"} shape="round" size={"large"}>{name}</Button>
            </>
    )
}
export default FormButton
