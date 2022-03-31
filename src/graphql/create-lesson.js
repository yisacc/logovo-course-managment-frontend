import {gql} from "@apollo/client";

export const CREATE_LESSON = gql`
  mutation createLesson($name: String!
  $videoLink: String!
  $description: String!
  $courseCategory: String!
  ){
  createLesson(createLessonInput:{
    name:$name,
    videoLink:$videoLink,
    description:$description
    courseCategory:$courseCategory
  }){
    name
  }
}
`;
