import { Route,Routes } from 'react-router-dom';
import CoursePage from "../pages/course/course-page";
import AddCoursePage from "../pages/addCourse/add-course-page";
import AddLessonPage from "../pages/addLesson/add-lesson-page";

const CourseManagementRoute=()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<CoursePage />} />
                <Route path="/add-course" element={<AddCoursePage />} />
                <Route path="/add-lesson" element={<AddLessonPage />} />
            </Routes>
        </>
    )
}
export default CourseManagementRoute
