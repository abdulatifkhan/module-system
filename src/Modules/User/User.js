// Model
const data = []

const many = () => data
const create = ({ username }) => {

  const newUser = {
    id: data.length + 1,
    username,
  }

  data.push(newUser)

  return newUser
}

module.exports.many = many
module.exports.create = create