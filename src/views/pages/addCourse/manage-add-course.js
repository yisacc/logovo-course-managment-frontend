import {Form,notification} from "antd";
import AddCourseForm from "./add-course-form";
import {useMutation} from "@apollo/client";
import {GET_COURSES} from "../../../graphql/get-courses";
import {CREATE_COURSE} from "../../../graphql/create-course";
import {useState} from "react";

const ManageAddCourse=()=>{
    const [form] = Form.useForm();
    const [value, setValue] = useState('');
    const [createCourse, { data, loading, error }] = useMutation(CREATE_COURSE, {
        refetchQueries: [
            GET_COURSES,
            'courses'
        ],
    });
    const showSuccess = () => {
        form.resetFields();
        setValue('')
        notification.success({
            message: `Add Course`,
            description: `Course Added Successfully.`
        });
    };
    const showError = () => {
        notification.error({
            message: `Add Course`,
            description: `unable to add course`
        });
    };
    const addCourse=(values)=>{
        createCourse({variables: {
                name: values.name,
                videoLink: values.videoLink,
                description: value,
            }})
            .then(response=>{
                showSuccess();
            })
            .catch(error=>{
                showError()
            })
    }
    return(
        <>
            <div className="bg-light-cyan-blue p-8 m-[50px] rounded-3xl">
<AddCourseForm loading={loading} form={form} addCourse={addCourse} value={value} setValue={setValue} />
            </div>
        </>
    )
}
export default ManageAddCourse
