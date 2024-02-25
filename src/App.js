import Home from './pages/home/Home'
import Users from './pages/users/Users'
import Category from './pages/category/Category'
import Orders from './pages/orders/Orders'
import Products from './pages/products/Products'
import Dashboard from './pages/dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
     <Routes>
       <Route path="/">
         <Route index element={<Dashboard />}/>
         <Route path='/users' element={<Users/>}/>
         <Route path='/category' element={<Category/>}/>
         <Route path='/Orders' element={<Orders/>}/>
         <Route path='/products' element={<Products/>}/>
        
       </Route>
     </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
