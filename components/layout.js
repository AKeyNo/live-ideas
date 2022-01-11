import { Navbar } from './Navbar';
import { Footer } from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
