/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/global.ts'
import { Theme } from './styles/Theme.tsx'
import {
  RouterProvider,
} from "react-router-dom";
import useRouter from './router/useRouter.tsx'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store/index.ts';


const [router] = useRouter()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <ReduxProvider store={store}>
        <GlobalStyle/>
        <RouterProvider router={router} />
      </ReduxProvider>
    </Theme>
  </React.StrictMode>,
)
