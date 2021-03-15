// Model
const { fetch, fetchOne } = require("../../Library/Database/Postgres")

// const data = []

const MANY = `

  SELECT
    user_id,
    user_username,
    user_first_name,
    user_last_name,
    user_middle_name,
    user_age
  FROM
    users
`

const CREATE = `

  INSERT INTO users (

      user_username,
      user_password,
      user_first_name,
      user_last_name

  ) VALUES (
    $1, $2, $3, $4
  ) RETURNING *
`

const many = async () => {
  
  return await fetch(MANY)
}

const create = async ({ username }) => {

  const newUser = await fetchOne(CREATE, username, "pass1", "fName", "lName")

/*   const newUser = {
    id: data.length + 1,
    username,
  }

  data.push(newUser)

  return newUser */

  return { ... newUser, __typename: "User", }
}

module.exports.many = many
module.exports.create = create