import {
    gql
  } from "@apollo/client";

export const REACT_EXPERIENCE_QUERY = gql`
query react_experienceQuery { 
    survey(survey: state_of_js) { 
      tool(id: react) { 
        id 
        entity { 
          homepage { 
            name 
            url 
          } 
          name 
          github { 
            name 
            description 
            url 
            homepage 
          } 
        } 
        experience(filters: {country: {in: [PER, COL]}}) { 
          all_years { 
            year 
            completion { 
              count 
            } 
            facets { 
              buckets { 
                id 
                count 
              } 
              completion { 
                total 
                count 
                percentage_question 
              } 
            } 
          } 
        } 
      } 
    } 
  } 
`;