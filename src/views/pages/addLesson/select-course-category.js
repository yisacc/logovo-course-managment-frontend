import {Form} from "antd";
import React from "react";
import FormSelect from "../../components/form-select";
import {useQuery} from "@apollo/client";
import {GET_COURSE_CATEGORIES_BY_PROJECT_ID} from "../../../graphql/get_coursecategories_by_id";
import {useLocation} from "react-router";

const SelectCourseCategory=({form})=>{
    const location = useLocation();
    const { courseId } = location.state;
    const {
        data,
        loading,
        error,
    } = useQuery(GET_COURSE_CATEGORIES_BY_PROJECT_ID,
        { variables: { courseId } }
    );
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
                data={data?.categoriesByCourseId}
                loading={loading}
            />

        </Form>
    )
}
export default SelectCourseCategory
