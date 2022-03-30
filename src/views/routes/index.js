import { Route,Routes } from 'react-router-dom';
import CoursePage from "../pages/course/course-page";
import AddCoursePage from "../pages/addCourse/add-course-page";

const CourseManagementRoute=()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<CoursePage />} />
                <Route path="/add-course" element={<AddCoursePage />} />
            </Routes>
        </>
    )
}
export default CourseManagementRoute
