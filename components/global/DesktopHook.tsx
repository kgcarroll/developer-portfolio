import { useState, useEffect } from 'react'

const useIsDesktop = (breakpoint: number = 768) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

  useEffect(() => {
    const checkIfDesktop = () => window.innerWidth >= breakpoint
    setIsDesktop(checkIfDesktop())

    const handleResize = () => {
      setIsDesktop(checkIfDesktop())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [breakpoint])

  return isDesktop
}

export default useIsDesktop
