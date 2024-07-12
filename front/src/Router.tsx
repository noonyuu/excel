import { Routes, Route, useNavigate } from 'react-router-dom'
import { Login } from './feature/login/page/Login'
import { useEffect, useState } from 'react'
import { Warning } from './feature/warning/page/Warning'

export const Router = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  interface LayoutProps {
    element: JSX.Element
  }
  // 画面サイズに合わせて表示するコンポーネントを切り替える
  function ScreenSizeCheck({ element }: LayoutProps) {
    if (isSmallScreen) {
      return <Warning />
    }
    return <>{element}</>
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 400)
    }

    window.addEventListener('resize', handleResize)

    // 初期サイズをチェック
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Routes>
      <Route path="/login" element={<ScreenSizeCheck element={<Login/>} />} />
    </Routes>
  )
}
