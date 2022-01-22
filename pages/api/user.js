import db from '../../src/db';

export default async function handler(req, res) {
  console.log(process.env.DB_USER);

  const user = await db.query('SELECT * FROM users', []);
  console.log(user);

  res.status(200).json({ name: 'John Doe' });
}
