import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
    // ex. sentry
    // logErrorToMyService(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.rejectFallback != null) {
        return <>{this.props.rejectFallback}</>
      }
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return <h1>공통에러.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
