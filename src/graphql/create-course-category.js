import {gql} from "@apollo/client";

export const CREATE_COURSE_CATEGORY = gql`
  mutation createCourseCategory($name: String!
  $course: String!
  ){
  createCourseCategory(createCourseCategoryInput:{
    name:$name,
    course:$course,
  }){
    name
  }
}
`;
