import React from "react";
import { Form } from 'antd';
import FormInput from "../../components/form-input";
import ReachTextEditor from "../../components/reach-text-editor";
import VideoForm from "../../components/video-form";
import FormButton from "../../components/submit-button";
const AddLessonForm=({form,addLesson,value,setValue,loading})=>{
    return(
        <Form
            layout={'vertical'}
            form={form}
            preserve={false}
            onFinish={addLesson}
        >
            <FormInput
                name={"name"}
                message={'Please enter Название урока'}
                placeholder={"Название урока"}
            />
            <VideoForm
            name={"videoLink"}
            message={'Please enter ЗЗагрузить Видео'}
            placeholder={"Загрузить Видео..."}
            />
            <ReachTextEditor value={value} setValue={setValue} />
            <FormButton loading={loading} name={"Добавить"} />
        </Form>
    )
}
export default AddLessonForm
