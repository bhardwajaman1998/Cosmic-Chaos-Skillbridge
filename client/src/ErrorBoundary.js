import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops! Something went wrong.</h2>
          <p>{this.state.error.toString()}</p>
          <div>{this.state.errorInfo.componentStack}</div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
