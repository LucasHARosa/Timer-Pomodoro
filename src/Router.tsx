import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { History } from './pages/History'

import { Home } from './pages/Home'

export function Router() {
  console.log('Router')
  return (
    <Routes>
      <Route path="/Timer-Pomodoro/" element={<DefaultLayout />}>
        <Route path="/Timer-Pomodoro/" element={<Home />} />
        <Route path="/Timer-Pomodoro/history/" element={<History />} />
      </Route>
    </Routes>
  )
}
