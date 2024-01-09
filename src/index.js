import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import GlobalStyles from './styles/GlobalStyles'
import Skeleton from './components/shared/Skeleton'
import ErrorBoundary from './components/shared/ErrorBoundary'

import AuthGuard from './auth/AuthGuard'
import { RecoilRoot } from 'recoil'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
})

const $root = document.getElementById('app')

ReactDOM.createRoot($root).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyles />
      <QueryClientProvider client={client}>
        <ErrorBoundary>
          <Suspense
            fallback={[...new Array(13)].map((_, idx) => (
              <Skeleton key={idx} width="100%" height={85} />
            ))}
          >
            <AuthGuard>
              <App />
            </AuthGuard>
          </Suspense>
        </ErrorBoundary>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
)
