import db from '../../../src/db';

export default async function handler(req, res) {
  const { username, password, summary } = req.body;
  switch (req.method) {
    case 'POST':
      const postQuery = await db.query(
        'INSERT INTO users (user_id, username, hashed_password, summary, token, creation_time)\
        VALUES ($1, $2, $3, $4, $5, $6)',
        [0, username, password, summary, 123123, new Date()]
      );
      break;
    default:
      console.log('a');
  }

  res.send(`Post: a`);
}
