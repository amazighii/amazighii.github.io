# GraphQL Profile Project

This project is a **personal profile page** built using **GraphQL**, designed to display user data, track progress, and generate statistics from my learning journey at Zone01 Oujda.

## Objectives
- Learn and apply **GraphQL**.
- Build a **login system** with JWT authentication.
- Query and display **user-specific data**: XP, grades, audits, and skills.
- Create a **profile UI** with interactive **SVG statistics graphs**.
- Host the profile page online.

## Features
- **Login Page**  
  - Supports **username:password** and **email:password**.  
  - Displays errors for invalid credentials.  
  - Logout functionality included.

- **Profile Page**  
  - Displays key user information (XP, grades, audits, skills).  
  - Includes at least **two SVG statistics graphs**: e.g., XP over time, pass/fail ratios.  
  - Clean, user-friendly interface.

- **GraphQL Queries**  
  - Fetch data from tables: `user`, `transaction`, `progress`, `result`, `object`.  
  - Supports normal, nested, and argument-based queries.  
  - Authenticated using **Bearer JWT**.

- **Hosting**  
  - Deployed via GitHub Pages.

## Technology Stack
- **Frontend:** HTML, CSS, Vanilla JavaScript  
- **Backend:** GraphQL API provided by Zone01 Oujda  
- **Authentication:** JWT  
- **Visualization:** SVG for statistics  
- **Hosting:** GitHub Pages

## Example Queries

**Fetch user info:**
```graphql
{
  user {
    id
    login
  }
}
```

**Nested query example:**
```graphql
{
  result {
    id
    user {
      id
      login
    }
  }
}
```

**Query with argument:**
```graphql
{
  object(where: { id: { _eq: 3323 }}) {
    name
    type
  }
}
```

## Learning Outcomes
- GraphQL queries (normal, nested, with arguments)  
- JWT authentication and authorization  
- Frontend data visualization with SVG  
- UI/UX design principles  
- Hosting and deployment of dynamic web apps

## Project Status
✅ Completed  
 Hosted online: [https://amazighii.github.io/]  
 Source code available in this repository
