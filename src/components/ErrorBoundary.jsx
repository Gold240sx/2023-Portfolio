import React from "react"
import { Suspense, use } from "react"

class ErrorBoundary extends React.Component {
    //  old
    // constructor(props) {
    //     super(props)
    //     this.state = { hasError: false }
    // }
    state = { hasError: false }

    // old
    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }
    //   NEW:  static getDerivedStateFromError(error) {
    //     // Update state so the next render will show the fallback UI.
    //     return { hasError: true };
    //     }

    // old and new
    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.log(error, info)
    }

    // old w/ new
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <div>Something went wrong.</div>
            //  NEW: this.props.fallback
        }

        return this.props.children
        // NEW: return this.props.children
    }
}

// NEW: Requires a boundary looks like this
// <ErrorBoundary fallback={<div>Something went wrong.</div>}> or
//<ErrorBoundary fallback="Error.">
//<Suspense fallback={<div>Loading...</div>}> or
//<Suspense fallback="Loading...">
//<MyWidget />
//</Suspense>
// </ErrorBoundary fallback={<div>Something went wrong.</div>}

export default ErrorBoundary
