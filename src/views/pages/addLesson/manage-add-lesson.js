import {Form, notification} from "antd";
import React, {useState} from "react";
import AddLessonForm from "./add-lesson-form";
import SelectCourseCategory from "./select-course-category";
import FormTitle from "../../components/form-title";
import {useMutation} from "@apollo/client";
import {CREATE_LESSON} from "../../../graphql/create-lesson";

const ManageAddLesson=()=>{
    const [form] = Form.useForm();
    const [createLesson, { data, loading, error }] = useMutation(CREATE_LESSON);
    const [value, setValue] = useState('');
    const showSuccess = () => {
        form.resetFields();
        setValue('')
        notification.success({
            message: `Add Lesson`,
            description: `Lesson Added Successfully.`
        });
    };
    const showError = () => {
        notification.error({
            message: `Add Lesson`,
            description: `unable to add lesson`
        });
    };
    const addLesson=(values)=>{
        console.log(value)
        createLesson({variables: {
                name: values.name,
                videoLink: values.videoLink,
                description: value,
                courseCategory: values.courseCategory,
            }})
            .then(response=>{
                showSuccess();
            })
            .catch(error=>{
                console.log(error)
                showError()
            })
    }
    return(
        <>
            <FormTitle title={"Добавить урок :"} />

            <div className="bg-light-cyan-blue p-8 mb-[50px] ml-[50px] mr-[50px] rounded-3xl">
                <SelectCourseCategory form={form} />
            </div>
            <div className="bg-light-cyan-blue p-8 m-[50px] rounded-3xl">
            <AddLessonForm addLesson={addLesson} loading={loading} form={form} value={value} setValue={setValue} />
            </div>
        </>
    )
}
export default ManageAddLesson
