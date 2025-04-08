import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import '../styles/app.scss';
import {
  HomePage,
  AfishaPage,
  AfishaDetail,
  ServicesPage,
  ProjectPage,
  ProjectDetail,
  NewsPage,
  NewsDetail,
  CatalogPage,
  ReaderPage,
  AboutPage,
  SupportPage,
  ElectronicPage,
  ProfessionalPage
} from '../../pages';
import { Footer, Header, Breadcrumb, Scroll } from '../../widgets';

import { useEffect } from 'react';

export const routesArr = [
  {
    path: '/',
    title: "main",
    element: <HomePage />
  },
  {
    path: '/afisha',
    title: "afisha",
    element: <AfishaPage />
  },
  {
    path: '/afisha-detail/:id',
    title: "afisha",
    element: <AfishaDetail />
  },
  {
    path: '/services',
    title: "services",
    element: <ServicesPage />
  },
  {
    path: '/project',
    title: "projects",
    element: <ProjectPage />
  },
  {
    path: '/project-detail/:id',
    title: "projects",
    element: <ProjectDetail />
  },
  {
    path: '/news',
    title: "news",
    element: <NewsPage />
  },
  {
    path: '/news-detail/:id',
    title: "news",
    element: <NewsDetail />
  },
  {
    path: '/catalog',
    title: "catalog",
    element: <CatalogPage />
  },
  {
    path: '/reader',
    title: "readers",
    element: <ReaderPage />
  },
  {
    path: '/about',
    title: "about",
    element: <AboutPage />
  },
  {
    path: '/support',
    title: "support",
    element: <SupportPage />
  },
  {
    path: '/electronic',
    title: "electronic",
    element: <ElectronicPage />
  },
  {
    path: '/professional',
    title: "professional",
    element: <ProfessionalPage />
  },
];

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [pathname]);
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />

        <Breadcrumb routes={routesArr} />
        <Scroll />

        <Routes>
          {routesArr.map((item, index) => (
            <Route key={index} path={item.path} element={item.element} />
          ))}
        </Routes>
        <Footer />
      </ScrollToTop>

    </BrowserRouter>
  );
}

export default App;