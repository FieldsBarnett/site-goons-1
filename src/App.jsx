import { useEffect, useState } from 'react'
import AdminDeck from './pages/AdminDeck'
import AdminLogin from './pages/AdminLogin'
import PublicSite from './pages/PublicSite'

const ADMIN_SESSION_KEY = 'sitegoons_admin_preview_user'

function readStoredUser() {
  try {
    const raw = window.sessionStorage.getItem(ADMIN_SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname)
  const [adminUser, setAdminUser] = useState(readStoredUser)

  useEffect(() => {
    function handlePopState() {
      setPathname(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigate(to) {
    if (to === pathname) return
    window.history.pushState({}, '', to)
    setPathname(to)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  function handleLogin(user) {
    try {
      window.sessionStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(user))
    } catch {
      // ignore storage errors in private browsing
    }
    setAdminUser(user)
  }

  function handleLogout() {
    try {
      window.sessionStorage.removeItem(ADMIN_SESSION_KEY)
    } catch {
      // ignore storage errors
    }
    setAdminUser(null)
  }

  const isAdminRoute = pathname === '/admin' || pathname.startsWith('/admin/')

  if (isAdminRoute) {
    if (!adminUser) {
      return <AdminLogin onLogin={handleLogin} onNavigate={navigate} />
    }
    return <AdminDeck user={adminUser} onLogout={handleLogout} onNavigate={navigate} />
  }

  return <PublicSite onNavigate={navigate} />
}

export default App
