
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// import Home from "./pages/home/Home"
import Dashboard from "./pages/dashboard/Dashboard"
import Main from "./pages/dashboard/main/Main"
import { Users } from "./pages/dashboard/users/Users"
import { Revenue } from "./pages/dashboard/revenue/Revenue"
import { Metrics } from "./pages/dashboard/metrics/Metrics"
import { Settings } from "./pages/dashboard/settings/Settings"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />


          <Route path="/dashboard" element={<Dashboard/>}>
            <Route index element={<Main />} />
            <Route path="users" element={<Users />} />
            <Route path="revenue" element={<Revenue />} />
            <Route path="metrics" element={<Metrics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
