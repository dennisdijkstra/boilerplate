import { useEffect, useState } from 'react'
import { screenSize, Breakpoint } from '@/breakpoints'

const useBreakpointTest = (query: Breakpoint) => {
  const [isMatch, setIsMatch] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${screenSize[query]})`)
    setIsMatch(mediaQuery.matches)
    const handler = (event: MediaQueryListEvent) => setIsMatch(event.matches)
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [query])

  return isMatch
}

export default useBreakpointTest