import {Button} from "antd";
import React from "react";

const AddButton=({name})=>{
    return(
        <>
            <Button className={"text-dark-blue border-dark-blue"} shape="round" size={"large"}>{name}</Button>
        </>
    )
}
export default AddButton
