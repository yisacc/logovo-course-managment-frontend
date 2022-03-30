import PageTitle from "../../components/page-title";
import React from "react";
import ManageAddCourse from "./manage-add-course";

const AddCoursePage=()=>{
    return(
        <>
            <PageTitle title="Создание курса:" />
            <ManageAddCourse />
            </>
    )
}
export default AddCoursePage
