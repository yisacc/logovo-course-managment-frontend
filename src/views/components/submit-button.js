import {Button} from "antd";
import React from "react";

const FormButton=({name,loading})=>{
    return(
        <>
            <Button loading={loading} className={"mt-5 text-dark-blue border-dark-blue"} htmlType="submit" shape="round" size={"large"}>{name}</Button>
            </>
    )
}
export default FormButton
