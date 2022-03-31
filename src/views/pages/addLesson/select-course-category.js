import {Form} from "antd";
import FormInput from "../../components/form-input";
import VideoForm from "../../components/video-form";
import ReachTextEditor from "../../components/reach-text-editor";
import FormButton from "../../components/submit-button";
import React from "react";
import FormSelect from "../../components/form-select";

const SelectCourseCategory=({form})=>{
    return(
        <Form
            layout={'vertical'}
            form={form}
            preserve={false}
        >
            <FormSelect
                name={"courseCategory"}
                message={'Please enter Выбрать категорию '}
                placeholder={"Выбрать категорию "}
            />

        </Form>
    )
}
export default SelectCourseCategory
