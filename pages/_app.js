import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { SessionProvider } from "next-auth/react";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import Script from "next/script";

const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <Script
            src="https://upload-widget.cloudinary.com/global/all.js"
            type="text/javascript"
          />
          <Component {...pageProps} />
        </Provider>
      </PersistGate>
    </SessionProvider>
  );
}
