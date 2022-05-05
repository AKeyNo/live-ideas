import { NextResponse } from 'next/server';

export const middleware = (req) => {
  console.log(`rawr`);
  console.log('---');
  const authHeader = req.headers.get('authorization');
  const auth = authHeader.split(' ')[1];
  const [username, password] = Buffer.from(auth, 'base64')
    .toString()
    .split(':');
  console.log(username, password);
  return NextResponse.next();
};
