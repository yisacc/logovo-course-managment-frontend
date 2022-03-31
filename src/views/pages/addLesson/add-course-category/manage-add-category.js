import React from "react";
import FormTitle from "../../../components/form-title";
import AddCategoryForm from "./add-category-form";
import {Form} from "antd";

const ManageAddCourseCategory=()=>{
    const [form] = Form.useForm();
    return(
        <>
    <FormTitle title={"Добавить категорию :"} />
    <div className="bg-light-cyan-blue p-8 m-[50px] rounded-3xl">
<AddCategoryForm form={form} />
    </div>
            </>
    )
}
export default ManageAddCourseCategory
