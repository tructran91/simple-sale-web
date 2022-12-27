import '../styles/globals.css'
import * as React from 'react';
import { Provider } from 'react-redux';
import store from 'src/app/store';
import AdminLayout from 'src/components/layout/adminLayout';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AdminLayout Component={Component} pageProps={pageProps} />
    </Provider>
  )
}

export default MyApp
