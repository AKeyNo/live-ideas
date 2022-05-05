import { NextResponse } from 'next/server';

// export function middlewarea(req) {
//   const authHeader = req.headers.get('authorization');
//   if (authHeader) {
//     const auth = authHeader.split(' ')[1];
//     const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':');
//     console.log(user, pwd);
//     if (user === 'admin' && pwd === 'password') {
//       console.log('a');
//       return NextResponse.next();
//     }
//   }

//   return new Response('Auth required', {
//     status: 401,
//     headers: {
//       'WWW-Authenticate': 'Basic realm="SecureArea',
//     },
//   });
// }

export const middleware = (req) => {
  console.log(`\n${new Date().toLocaleString()}`);
  console.log('Method:', req.method);
  console.log('Path:  ', req.url);
  console.log('Body:  ', req.body);
  console.log('---');
  return functiona();
};
const functiona = (handler) => {
  console.log('a');
  return functionb(NextResponse.next());
};

const functionb = (handler) => {
  console.log('b');
  return functionc(NextResponse.next());
};
const functionc = (handler) => {
  console.log('c');
  return NextResponse.next();
};
