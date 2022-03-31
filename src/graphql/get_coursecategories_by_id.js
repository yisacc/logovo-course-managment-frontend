import {gql} from "@apollo/client";

export const GET_COURSE_CATEGORIES_BY_PROJECT_ID = gql`query categoriesByCourseId($courseId: String!)
  {categoriesByCourseId(courseId:$courseId){
   name,
  _id
    }
}

`;
