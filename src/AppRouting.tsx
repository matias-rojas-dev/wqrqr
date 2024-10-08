import { Navigate, Route, Routes } from 'react-router-dom'
import Projects from './dashboard/projects/page'
import Dedications from './dashboard/dedications/page'
import CreateClient from './dashboard/create-client/page'
import { HomeContext, HomeProvider } from './context/HomeContext'
import Home from './dashboard/home/Home'
import CreateProject from './dashboard/create-project/page'
import FinishProject from './dashboard/finish-project/page'
import MonitoringPage from './dashboard/monitoring/page'
import CreateUser from './dashboard/create-user/page'
import EditProfile from './dashboard/edit-profile/page'
import OutlaysPage from './dashboard/outlays/page-form'
import IncomesPage from './dashboard/incomes/page'
import SalariesPage from './dashboard/salaries/page'
import Holidays from './dashboard/holidays/page'
import Login from './dashboard/login/Login'
import { useContext } from 'react'
import { SideNav } from './components'
import { UnauthorizedPage } from './dashboard/unauthorized/page'
import CosteoPage from './dashboard/costeo/page'

const AppLayout = () => {
  const context = useContext(HomeContext)

  if (!context) {
    throw new Error('HomeContext must be used within a HomeProvider')
  }

  const [auth, setAuth] = context
  return (
    <HomeContext.Provider value={[auth, setAuth]}>
      <div className="flex">
        <SideNav />
        <div className="flex-grow m-10">
          <Routes>
            <Route path="/dashboard" element={<Home />} />
            <Route path="/dashboard/proyectos" element={<Projects />} />
            <Route path="/dashboard/crear-cliente" element={<CreateClient />} />
            <Route path="/dashboard/agregar-horas" element={<Dedications />} />
            <Route
              path="/dashboard/crear-proyecto"
              element={<CreateProject />}
            />
            <Route
              path="/dashboard/terminar-proyecto"
              element={<FinishProject />}
            />
            <Route path="/dashboard/monitoreo" element={<MonitoringPage />} />
            <Route path="/dashboard/crear-usuario" element={<CreateUser />} />
            <Route
              path="/dashboard/eliminar-usuario"
              element={<FinishProject />}
            />
            <Route path="/dashboard/editar-perfil" element={<EditProfile />} />
            <Route
              path="/dashboard/registrar-desembolsos"
              element={<OutlaysPage />}
            />
            <Route
              path="/dashboard/registrar-ingresos"
              element={<IncomesPage />}
            />
            <Route
              path="/dashboard/registrar-sueldos"
              element={<SalariesPage />}
            />
            <Route path="/dashboard/costeo" element={<CosteoPage />} />
            <Route path="/dashboard/dia-libre" element={<Holidays />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </div>
    </HomeContext.Provider>
  )
}

const AppRouting = () => {
  return (
    <HomeProvider>
      <Routes>
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </HomeProvider>
  )
}

export default AppRouting
