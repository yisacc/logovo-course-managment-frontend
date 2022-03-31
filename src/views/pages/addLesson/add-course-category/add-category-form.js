import React from "react";
import { Form } from 'antd';
import FormInput from "../../../components/form-input";
import AddButton from "../../../components/add-button";
const AddCategoryForm=({form,loading,addCourseCategory})=>{
    return(
        <Form
            layout={'vertical'}
            form={form}
            preserve={false}
            className={"flex"}
            onFinish={addCourseCategory}
        >
            <div className={"flex-initial w-[40rem]"}>
                <FormInput
                    name={"name"}
                    message={'Please enter Ввести название :'}
                    placeholder={"Ввести название :"}
                />
            </div>
            <div className={"flex-initial w-32"}>
                <AddButton name={"Добавить"} loading={loading} />

            </div>
        </Form>
    )
}
export default AddCategoryForm
