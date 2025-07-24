import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import MainLayout from './layout/MainLayout';
import VerifyLayout from './layout/verify';
import Login from './pages/Login';
import User from './pages/User';
import Candidatos from './pages/Candidatos';
import Personal from './pages/Personal';
import PersonalView from './pages/PersonalView';
import Service from './pages/Service';
import VentaService from './pages/VentaService';
import Salida from './pages/Salida';
import RPTsalida from './pages/RPTsalida';
import RPTencomineda from './pages/RPTencomineda';
import RPTFacturas from './pages/RPTFacturas';
import RPTFacturaanulada from './pages/RPTFacturaanulada';
import RPTSPMovil from './pages/RPTSPMovil';
import VerifyDatos from './pages/VerifyDatos';
import Simpatizantes from './pages/Simpatizantes';
import Militantes from './pages/Militantes';
import SliderSumate from './pages/Slidersumate';
import Propuestas from './pages/Propuestas';
//
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {/* Route for Login using MainLayout */}
      <Route
        path="/login"
        element={
          <MainLayout>
            <PageTitle title="Login | Inicio  de Session del sistema" />
            <Login />
          </MainLayout>
        }
      />
      <Route
        path="/verifydatos"
        element={
          <VerifyLayout>
            <PageTitle title="Verificar datos  | Inicio  de Session del sistema" />
            <VerifyDatos />
          </VerifyLayout>
        }
      />
      {/* All other routes using DefaultLayout */}
      <Route
        index
        element={
          <DefaultLayout>
            <PageTitle title="Inicio | general"  />
            <ECommerce />
          </DefaultLayout>
        }
      />
      <Route
        path="/home"
        element={
          <DefaultLayout>
            <PageTitle title="Inicio | general" />
            <ECommerce />
          </DefaultLayout>
        }
      />
      <Route
        path="/users"
        element={
          <DefaultLayout>
            <PageTitle title="Admin | adminsitarcion de usuarios" />
            <User />
          </DefaultLayout>
        }
      />
      <Route
        path="/personal"
        element={
          <DefaultLayout>
            <PageTitle title="Admin | Lista de personal" />
            <Personal />
          </DefaultLayout>
        }
      />
      <Route
        path="/Candidatos"
        element={
          <DefaultLayout>
            <PageTitle title="Admin | Lista de personal" />
            <Candidatos />
          </DefaultLayout>
        }
      />
      <Route
        path="/simpatizantes"
        element={
          <DefaultLayout>
            <PageTitle title="Admin | Lista de personal" />
            <Simpatizantes />
          </DefaultLayout>
        }
      />
      <Route
        path="/militantes"
        element={
          <DefaultLayout>
            <PageTitle title="Admin | Lista de militantes" />
            <Militantes />
          </DefaultLayout>
        }
      />
      <Route
        path="/slidersumate"
        element={
          <DefaultLayout>
            <PageTitle title="Admin | Lista de sliders" />
            <SliderSumate />
          </DefaultLayout>
        }
      />
      <Route
        path="/propuestas"
        element={
          <DefaultLayout>
            <PageTitle title="Admin | Lista de propuestas" />
            <Propuestas />
          </DefaultLayout>
        }
      />

      <Route
      path="personalview/:id"
        element={
          <DefaultLayout>
            <PageTitle title="Admin | Perosnal Ver" />
            <PersonalView />
          </DefaultLayout>
        }
      />

      <Route
        path="/services"
        element={
          <DefaultLayout>
            <PageTitle title="Admin | resgidtor de siervicios" />
            <Service />
          </DefaultLayout>
        }
      />
      <Route
        path="/VentaServices"
        element={
          <DefaultLayout>
            <PageTitle title="Admin | venta de servicios" />
            <VentaService />
          </DefaultLayout>
        }
      />
      <Route
        path="/Salidas"
        element={
          <DefaultLayout>
            <PageTitle title="Admin | Salidas Movilidades" />
            <Salida />
          </DefaultLayout>
        }
      />
      <Route
        path="/RPT_salidas"
        element={
          <DefaultLayout>
            <PageTitle title="Reporte | Salidas" />
            <RPTsalida />
          </DefaultLayout>
        }
      />
      <Route
        path="/RPT_encomiendas"
        element={
          <DefaultLayout>
            <PageTitle title="Reporte | Encominedas Enviadas"  />
            <RPTencomineda />
          </DefaultLayout>
        }
      />
      <Route
        path="/RPT_facturas_activas"
        element={
          <DefaultLayout>
            <PageTitle title="Reporte | Facturas  Activas" />
            <RPTFacturas />
          </DefaultLayout>
        }
      />
      <Route
        path="/RPT_facturas_anuladas"
        element={
          <DefaultLayout>
            <PageTitle title="Reporte | facturas  Anuladas" />
            <RPTFacturaanulada />
          </DefaultLayout>
        }
      />
      <Route
        path="/RPT_salidas_movilidad"
        element={
          <DefaultLayout>
            <PageTitle title="Reportes | Salidas Por movilidad" />
            <RPTSPMovil />
          </DefaultLayout>
        }
      />
      {/* template basic
      <Route
        path="/ui/alerts"
        element={
          <DefaultLayout>
            <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Alerts />
          </DefaultLayout>
        }
      />
      <Route
        path="/ui/buttons"
        element={
          <DefaultLayout>
            <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Buttons />
          </DefaultLayout>
        }
      />
      <Route
        path="/auth/signin"
        element={
          <DefaultLayout>
            <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignIn />
          </DefaultLayout>
        }
      />
      <Route
        path="/auth/signup"
        element={
          <DefaultLayout>
            <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignUp />
          </DefaultLayout>
        }
      />
      <Route
        path="/calendar"
        element={
          <DefaultLayout>
            <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Calendar />
          </DefaultLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <DefaultLayout>
            <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <Profile />
          </DefaultLayout>
        }
      />
      <Route
        path="/forms/form-elements"
        element={
          <DefaultLayout>
            <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <FormElements />
          </DefaultLayout>
        }
      />
      <Route
        path="/forms/form-layout"
        element={
          <DefaultLayout>
            <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <FormLayout />
          </DefaultLayout>
        }
      />
      */}
    </Routes>
  );
}

export default App;
