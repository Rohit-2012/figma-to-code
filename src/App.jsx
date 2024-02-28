import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
  </Route>
))
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
