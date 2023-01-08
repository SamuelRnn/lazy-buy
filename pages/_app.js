import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { SessionProvider } from "next-auth/react";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </PersistGate>
    </SessionProvider>
  );
}
