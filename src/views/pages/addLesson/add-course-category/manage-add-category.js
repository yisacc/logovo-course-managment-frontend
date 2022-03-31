import React from "react";
import FormTitle from "../../../components/form-title";
import AddCategoryForm from "./add-category-form";
import {Form, notification} from "antd";
import {useMutation, useQuery} from "@apollo/client";
import {CREATE_COURSE_CATEGORY} from "../../../../graphql/create-course-category";
import {GET_COURSE_CATEGORIES} from "../../../../graphql/get_course_category";
import {useLocation} from "react-router";
import {GET_COURSE_CATEGORIES_BY_PROJECT_ID} from "../../../../graphql/get_coursecategories_by_id";

const ManageAddCourseCategory=()=>{
    const [form] = Form.useForm();
    const location = useLocation();
    const { courseId } = location.state;
    const [createCourseCategory, { data, loading, error }] = useMutation(CREATE_COURSE_CATEGORY, {
        refetchQueries: [
            GET_COURSE_CATEGORIES_BY_PROJECT_ID,
            'categoriesByCourseId'
        ],
    });

    const showSuccess = () => {
        form.resetFields();
        notification.success({
            message: `Add Course Category`,
            description: `Course category Added Successfully.`
        });
    };
    const showError = () => {
        notification.error({
            message: `Add Course Category`,
            description: `unable to add course category.`
        });
    };
    const addCourseCategory=(values)=>{
        createCourseCategory({variables: {
                name: values.name,
                course:courseId
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
    <FormTitle title={"Добавить категорию :"} />
    <div className="bg-light-cyan-blue p-8 m-[50px] rounded-3xl">
<AddCategoryForm form={form} loading={loading} addCourseCategory={addCourseCategory} />
    </div>
            </>
    )
}
export default ManageAddCourseCategory
