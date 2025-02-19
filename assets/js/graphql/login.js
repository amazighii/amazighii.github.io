
export let profilequery = ` 
{
  user {
    totalUp
    totalDown
    login
    attrs
    auditRatio
    firstName
    lastName
    events(where: {event: {object: {type: {_eq: "module"}}}}) {
      level
    }
  }
  transaction_aggregate(
    where: {type: {_eq: "xp"}, event: {object: {type: {_eq: "module"}}}}
  ) {
    aggregate {
      sum {
        amount
      }
    }
  }
}
`


export const auditRatioquery = `
{
  user {
    totalUp
    totalDown
  }
}
`


export const projectxp = `
{
  transaction(
    where:
    {
      type: {_eq: "xp"}
      event: {object: {type: {_eq: "module"}}}
      object: {type:{_eq: "project"}}
    }
  ) {
    amount
    createdAt
      object {
        type
        name
      }
  }
}
`

export const skillsQuery = `
{
  transaction(
    distinct_on: [type]
    where: 
    {
     type: { _in: ["skill_algo","skill_back-end", "skill_front-end","skill_prog", 
      "skill_go","skill_css", "skill_js"] }
    }
    order_by: {type: asc, amount: desc }
  ) {
    type
    amount
  }
}
`;
