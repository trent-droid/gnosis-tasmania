import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import App from './App.jsx'

const WhatIsGnosisPage  = lazy(() => import('./pages/WhatIsGnosisPage.jsx'))
const CommunityPage     = lazy(() => import('./pages/CommunityPage.jsx'))
const HistoryPage       = lazy(() => import('./pages/HistoryPage.jsx'))
const CoreTeachingsPage = lazy(() => import('./pages/CoreTeachingsPage.jsx'))
const PracticesPage     = lazy(() => import('./pages/PracticesPage.jsx'))
const CoursesPage       = lazy(() => import('./pages/CoursesPage.jsx'))
const CoursePage        = lazy(() => import('./pages/CoursePage.jsx'))
const MeditationPage    = lazy(() => import('./pages/MeditationPage.jsx'))
const ContactPage       = lazy(() => import('./pages/ContactPage.jsx'))
const BlogPage          = lazy(() => import('./pages/BlogPage.jsx'))
const ResourcesPage     = lazy(() => import('./pages/ResourcesPage.jsx'))

function PageFallback() {
  return <div style={{ minHeight: '100vh', background: '#faf6ef' }} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/"                       element={<App />} />
          <Route path="/what-is-gnosis"         element={<WhatIsGnosisPage />} />
          <Route path="/community"              element={<CommunityPage />} />
          <Route path="/history"                element={<HistoryPage />} />
          <Route path="/core-teachings"         element={<CoreTeachingsPage />} />
          <Route path="/practices"              element={<PracticesPage />} />
          <Route path="/courses"                element={<CoursesPage />} />
          <Route path="/introduction-to-gnosis" element={<CoursePage />} />
          <Route path="/meditation-classes"     element={<MeditationPage />} />
          <Route path="/contact"                element={<ContactPage />} />
          <Route path="/blog"                   element={<BlogPage />} />
          <Route path="/resources"              element={<ResourcesPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
