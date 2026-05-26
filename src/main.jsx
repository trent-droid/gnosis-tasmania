import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'

import App from './App.jsx'

const WhatIsGnosisPage  = lazy(() => import('./pages/WhatIsGnosisPage.jsx'))
const CommunityPage     = lazy(() => import('./pages/CommunityPage.jsx'))
const HistoryPage       = lazy(() => import('./pages/HistoryPage.jsx'))
const CoreTeachingsPage = lazy(() => import('./pages/CoreTeachingsPage.jsx'))
const PracticesPage     = lazy(() => import('./pages/PracticesPage.jsx'))
const CoursesPage       = lazy(() => import('./pages/CoursesPage.jsx'))
const CoursePage        = lazy(() => import('./pages/CoursePage.jsx'))
const MeditationPage       = lazy(() => import('./pages/MeditationPage.jsx'))
const MeditationCoursePage = lazy(() => import('./pages/MeditationCoursePage.jsx'))
const ContactPage       = lazy(() => import('./pages/ContactPage.jsx'))
const CentresPage       = lazy(() => import('./pages/CentresPage.jsx'))
const ResourcesPage     = lazy(() => import('./pages/ResourcesPage.jsx'))
const ArticlesPage      = lazy(() => import('./pages/ArticlesPage.jsx'))
const ArticlePage       = lazy(() => import('./pages/ArticlePage.jsx'))
const FaqPage           = lazy(() => import('./pages/FaqPage.jsx'))

function PageFallback() {
  return <div style={{ minHeight: '100vh', background: '#faf6ef' }} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
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
          <Route path="/meditation-course"      element={<MeditationCoursePage />} />
          <Route path="/contact"                element={<ContactPage />} />
          <Route path="/gnostic-centres"        element={<CentresPage />} />
          <Route path="/resources"              element={<ResourcesPage />} />
          <Route path="/articles"               element={<ArticlesPage />} />
          <Route path="/articles/:slug"         element={<ArticlePage />} />
          <Route path="/faq"                    element={<FaqPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
