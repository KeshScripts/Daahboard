import React, {
  useEffect
} from "react"
import "./App.css"
import {
  FiSettings
} from "react-icons/fi"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import {
  useStateContext
} from "./context/contextProvider"
import {
  Navbar,
  Button,
  Footer,
  Sidebar,
  ThemeSettings
} from './components';
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor
} from './routes';

function App() {
  const {
    isActive,
    setIsActive,
    screenSize,
    setScreenSize,
    themeSettings,
    setThemeSettings
  } = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize()
    return ()=>window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  },
    [screenSize]);

  return (
    <div className="app">
    <BrowserRouter>
     <div className="btn-wrapper">
       <Button className="settimgsButton"
         pos="TopCenter"
         title="Settings"
         color="white"
         dotcolor="blue"
         fn={() => setThemeSettings(true)}
         icon={ <FiSettings /> }
      />
    </div>
    <div className={`${isActive ? "z-30 sidebar": "closed"}`}>
     <Sidebar />
    </div>
    <div className={isActive ? "navContainer2": "Nav-container"}>
      <Navbar />
      {/* Roites will go here*/}
      <div>
       { themeSettings ? <ThemeSettings /> : null }
       <Routes>
          {/* Routes */}
        <Route path="/" element={<Ecommerce />} />
        <Route path="/ecommerce" element={(<Ecommerce />)} />
                 {/*  pages */}
        <Route path="/orders" element={<Orders />} />
        <Route path="/employees" element={<Employees />} />
       <Route path="/customers" element={<Customers />} />
             {/* apps  */}
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/color-picker"element={<ColorPicker />} />
           {/*  charts  */}
       <Route path="/line" element={<Line />} />
       <Route path="/area" element={<Area />} />
       <Route path="/bar" element={<Bar />} />
       <Route path="/pie" element={<Pie />} />
       <Route path="/financial"element={<Financial />} />
       <Route path="/color-mapping" element={<ColorMapping />} />
       <Route path="/pyramid" element={<Pyramid />} />
       <Route path="/stacked" element={<Stacked />} />
       </Routes>
      </div>
    </div>
  </BrowserRouter>
    </div>
  )
}

export default App;
