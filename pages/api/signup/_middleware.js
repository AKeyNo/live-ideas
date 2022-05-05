import { NextResponse } from 'next/server';

export const middleware = (req, res) => {
  console.log('---');
  const authHeader = req.headers.get('authorization');
  const auth = authHeader.split(' ')[1];
  const [username, password] = Buffer.from(auth, 'base64')
    .toString()
    .split(':');

  if (username.length < 3 || password.length < 3) {
    throw new Error('wrong');
    // res.stat = 400;
    // return res.json({
    //   error: 'Username and password must have 3 or more characters each.',
    // });
  }

  console.log(username, password);
  return NextResponse.next();
};
