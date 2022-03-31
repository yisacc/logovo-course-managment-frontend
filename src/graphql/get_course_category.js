import {gql} from "@apollo/client";

export const GET_COURSE_CATEGORIES = gql`{
  courseCategories{
    name,
    _id
  }
}
`;
