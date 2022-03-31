import {gql} from "@apollo/client";

export const GET_COURSES = gql`{
  courses{
    name,
    _id,
    videoLink,
    description
  }
}
`;
