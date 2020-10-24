import { useEffect, useState } from 'react'

function useScroll ( scrollRange = 20) {
  const [isScroll, setScrolling] = useState()
  function handleScrollEvent() {
    if (window.scrollY > scrollRange) return setScrolling(true)
    return setScrolling(false)
  }
  useEffect(() => {
    document.addEventListener('scroll', handleScrollEvent)
    return () => document.removeEventListener('scroll', handleScrollEvent)
  }, [])
  return isScroll
}
export default useScroll