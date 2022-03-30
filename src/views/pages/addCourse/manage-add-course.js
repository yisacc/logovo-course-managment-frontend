import {Form} from "antd";
import AddCourseForm from "./add-course-form";

const ManageAddCourse=()=>{
    const [form] = Form.useForm();
    return(
        <>
            <div className="bg-light-cyan-blue p-8 m-[50px] rounded-3xl">
<AddCourseForm form={form} />
            </div>
        </>
    )
}
export default ManageAddCourse
