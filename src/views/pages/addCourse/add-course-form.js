import React from "react";
import { Form } from 'antd';
import FormInput from "../../components/form-input";
import ReachTextEditor from "../../components/reach-text-editor";
import VideoForm from "../../components/video-form";
import FormButton from "../../components/submit-button";
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
            <VideoForm
            name={"videoLink"}
            message={'Please enter Загрузить видео'}
            placeholder={"Загрузить видео"}
            />
            <ReachTextEditor />
            <FormButton name={"Добавить"} />
        </Form>
    )
}
export default AddCourseForm
