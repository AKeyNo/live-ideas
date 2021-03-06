import { Provider } from 'react-redux';
import { useStore } from '../src/store';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles.css';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
