import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Servicos = lazy(() => import('../pages/Servicos'));
const QuemSomos = lazy(() => import('../pages/QuemSomos'));
const AreasAtuacao = lazy(() => import('../pages/AreasAtuacao'));
const Orcamento = lazy(() => import('../pages/Orcamento'));
const Contato = lazy(() => import('../pages/Contato'));
const PoliticaPrivacidade = lazy(() => import('../pages/PoliticaPrivacidade'));

const AppRoutes = () => (
  <Suspense fallback={<div className="text-offwhite p-4">Carregando...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/quem-somos" element={<QuemSomos />} />
      <Route path="/areas-de-atuacao" element={<AreasAtuacao />} />
      <Route path="/orcamento" element={<Orcamento />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
