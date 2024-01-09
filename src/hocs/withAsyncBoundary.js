import ErrorBoundary from '../components/shared/ErrorBoundary'
import { Suspense } from 'react'

function withAsyncBoundary(Component, { pendingFallback, rejectFallback }) {
  const Wrapper = () => {
    return (
      <ErrorBoundary rejectFallback={rejectFallback}>
        <Suspense fallback={pendingFallback}>
          <Component />
        </Suspense>
      </ErrorBoundary>
    )
  }

  return Wrapper
}

export default withAsyncBoundary
