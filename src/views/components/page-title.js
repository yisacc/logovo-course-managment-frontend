import React from "react";
import {
    DashOutlined,
} from '@ant-design/icons';

const PageTitle=({title})=>{
    return(
        <div className="pl-16 pt-8 flex align-middle">
            <h1 className="text-left text-dark-blue text-xl font-bold flex-1">
                {title}
            </h1>
            <DashOutlined className="text-right flex-1" />
            </div>
    )
}
export default PageTitle
