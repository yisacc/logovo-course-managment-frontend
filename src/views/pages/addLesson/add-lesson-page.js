import PageTitle from "../../components/page-title";
import React from "react";
import ManageAddLesson from "./manage-add-lesson";
import ManageAddCourseCategory from "./add-course-category/manage-add-category";

const AddLessonPage=()=>{
    return(
        <>
            <PageTitle title="Категории курса 2D:" />
            <ManageAddCourseCategory />
            <ManageAddLesson />
        </>
    )
}
export default AddLessonPage
