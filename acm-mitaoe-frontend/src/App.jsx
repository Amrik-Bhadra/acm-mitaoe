import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import EventsPage from './pages/EventsPage'
import ContactPage from './pages/ContactPage'

const App = () => {
  const routes = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/about', element: <AboutPage/>},
    {path: '/events', element: <EventsPage/>},
    {path: '/contact', element: <ContactPage/>}
  ])
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App