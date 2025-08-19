"use client"

import { Component, ReactNode } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class HydrationBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    // Only log hydration errors in development
    if (process.env.NODE_ENV === 'development' && error.message.includes('hydration')) {
      console.warn('Hydration error suppressed:', error.message)
    }
  }

  render() {
    if (this.state.hasError) {
      // Return children anyway to continue rendering
      return this.props.children
    }

    return this.props.children
  }
}