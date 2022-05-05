import db from '../../src/db';

export default function handler(req, res) {
  switch (req.method) {
    case 'POST':
      const postQuery = await db.query(
        'INSERT INTO users (user_id, username, hashedPassword, summary, token) values ($1, $2, $3, $4, $5)',
        []
      );
      console.log('');
      break;
    default:
      
  }
  const { itemID } = req.query;

  res.send(`Post: ${itemID}`);
}
