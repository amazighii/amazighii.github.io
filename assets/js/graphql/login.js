
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


export const auditRatioquery =`
{
  user {
    totalUp
    totalDown
  }
}
` 