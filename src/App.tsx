import './App.css'
import LayoutHome from './layouts/LayoutHome'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TransactionDetail from './pages/TransactionDetail'
import { PageTitleProvider } from './context/LayoutContext'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'
import GuardAuth from './guard/GuardAuth'
import LayoutSearch from './layouts/LayoutSearch'
import Items from './pages/Items'

function App() {
  return (
    <div className="">
      {/* Main content */}
      <main className="flex-1">
        <PageTitleProvider>
          <AuthProvider>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route element={<GuardAuth/>}>
                <Route element={<LayoutHome />}>
                    <Route path='/transaction/:id' element={<TransactionDetail />} />
                    <Route path='/list-transaction' element={<Home />} />
                    <Route path='/' element={<Home />} />
                </Route>
              </Route>
              <Route element={<LayoutSearch />}>
                  <Route path='/aaa' element={<Items />} />
              </Route>
            </Routes>
          </AuthProvider>
        </PageTitleProvider>
      </main>
    </div>
  )
}

export default App
