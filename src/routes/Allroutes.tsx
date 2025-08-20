import { Route, Routes } from 'react-router'
import CnpGenerator from '../components/CnpGenerator'
import CnpValidator from '../components/CnpValidator'

const Allroutes = () => {
  return (
    <Routes>
        <Route
            path="/"
            element={<CnpGenerator />} 
            />
        <Route
            path="/verificare-cnp"
            element={<CnpValidator />} 
            />
        {/* Add more routes as needed */}
    </Routes>
  )
}

export default Allroutes
