const { Pool } = require("pg")

const pool = new Pool({
  host: "localhost",
  database: "super_app",
  user: "postgres",
  password: "aja96",
  port: 5432,
})

/* const pool = new Pool({
  connectionString: "postgres://sgppdafb:S2pRahCfmQbo7uxWFB3svWpCgHV7giBL@arjuna.db.elephantsql.com:5432/sgppdafb"
}) */

const fetch = async (SQL, ...params) => {

  const client = await pool.connect()

  try {

    // client.query("INSERT INTO contacts(user) VALUES ($1)", ["M"])

    const { rows } = await client.query(SQL, params.length ? params : null)

    return rows
  }
  finally {
    client.release()
  }
}

const fetchOne = async (SQL, ...params) => {

  const client = await pool.connect()

  try {

    // client.query("INSERT INTO contacts(user) VALUES ($1)", ["M"])

    const { rows: [row] } = await client.query(SQL, params.length ? params : null)

    return rows
  }
  finally {
    client.release()
  }
}

module.exports.fetch = fetch
module.exports.fetchOne = fetchOne

/* const fn = async () => {

  const client = await pool.connect()

  const query = await client.query("SELECT * FROM contacts")

  console.log(query.rows);

  client.release()
}

fn() */

// postgres://sgppdafb:S2pRahCfmQbo7uxWFB3svWpCgHV7giBL@arjuna.db.elephantsql.com:5432/sgppdafb