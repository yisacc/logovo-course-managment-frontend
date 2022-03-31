import {Form} from "antd";
import React from "react";
import AddLessonForm from "./add-lesson-form";
import SelectCourseCategory from "./select-course-category";
import PageTitle from "../../components/page-title";
import FormTitle from "../../components/form-title";

const ManageAddLesson=()=>{
    const [form] = Form.useForm();
    return(
        <>
            <FormTitle title={"Добавить урок :"} />

            <div className="bg-light-cyan-blue p-8 mb-[50px] ml-[50px] mr-[50px] rounded-3xl">
                <SelectCourseCategory form={form} />
            </div>
            <div className="bg-light-cyan-blue p-8 m-[50px] rounded-3xl">
            <AddLessonForm form={form} />
            </div>
        </>
    )
}
export default ManageAddLesson
