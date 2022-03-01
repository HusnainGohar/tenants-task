import React from 'react'
import store from "./store";
import { Provider } from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import TenantsListPage from './Components/Tenants/TenantsListPage'
import TenantDetailPage from './Components/Tenants/TenantsDetailPage'

function App() {
  return (
      <Provider store={store}>
          <Routes>
              <Route exact path='/' element={<TenantsListPage />} />
              <Route exact path='/tenant/:tenantId' element={<TenantDetailPage />} />
          </Routes>
      </Provider>
  );
}

export default App;
