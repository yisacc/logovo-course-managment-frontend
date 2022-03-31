import {gql} from "@apollo/client";

export const CREATE_COURSE = gql`
  mutation createCourse($name: String!
  $videoLink: String!
  $description: String!
  ){
  createCourse(createCourseInput:{
    name:$name,
    videoLink:$videoLink,
    description:$description
  }){
    name
  }
}
`;
