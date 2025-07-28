import React from 'react';
import PropTypes from 'prop-types';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(_error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console in development only
    if (import.meta.env.MODE === 'development') {
      // eslint-disable-next-line no-console
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // In production, you might want to log this to an error reporting service
    // Example: logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-gray-700/50">
              {/* Error Icon */}
              <div className="text-red-400 text-6xl mb-6">
                <FaExclamationTriangle className="mx-auto" />
              </div>
              
              {/* Error Message */}
              <h1 className="text-2xl font-bold mb-4 text-white">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-400 mb-6">
                We&apos;re sorry for the inconvenience. The application encountered an unexpected error.
              </p>

              {/* Error Details in Development */}
              {import.meta.env?.MODE === 'development' && this.state.error && (
                <details className="text-left mb-6 p-4 bg-gray-900/50 rounded border border-gray-600">
                  <summary className="text-red-400 cursor-pointer mb-2 font-semibold">
                    Error Details (Development)
                  </summary>
                  <div className="text-xs text-gray-300 font-mono">
                    <div className="mb-2">
                      <strong>Error:</strong> {this.state.error.toString()}
                    </div>
                    {this.state.errorInfo && (
                      <div>
                        <strong>Stack Trace:</strong>
                        <pre className="whitespace-pre-wrap mt-1 text-red-300">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={this.handleReset}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <FaRedo className="text-sm" />
                  Try Again
                </button>
                
                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Go to Homepage
                </button>
              </div>

              {/* Support Info */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-xs text-gray-500">
                  If this problem persists, please contact{' '}
                  <a 
                    href="mailto:charlesboswell@boswellwebdevelopment.com"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    support
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// PropTypes validation
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;