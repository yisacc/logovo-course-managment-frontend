import React from "react";
import { Form } from 'antd';
import FormInput from "../../components/form-input";
import ReachTextEditor from "../../components/reach-text-editor";
const AddCourseForm=({form})=>{
    return(
        <Form
            layout={'vertical'}
            form={form}
            preserve={false}
        >
            <FormInput
                name={"name"}
                message={'Please enter Название курса'}
                placeholder={"Название курса"}
            />
            <ReachTextEditor />
        </Form>
    )
}
export default AddCourseForm
