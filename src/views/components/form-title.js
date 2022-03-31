import React from "react";
import {
    DashOutlined,
} from '@ant-design/icons';

const FormTitle=({title})=>{
    return(
        <div className="pl-20 pt-8 flex align-middle">
            <h3 className="text-left text-dark-blue text-xl font-bold flex-1">
                {title}
            </h3>
            <DashOutlined className="text-right flex-1" />
            </div>
    )
}
export default FormTitle
