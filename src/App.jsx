import React, { createContext, useState } from "react";
import { Header } from "./Components/Header"
import MainDashbord from "./Components/MainDashbord"
import { Sidebar } from "./Components/Sidebar"
const UserContext = createContext();
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <>
    <UserContext.Provider value={(isSidebarOpen, setIsSidebarOpen)}>
      <div className="flex bg-[#EFF3F9] font-inter">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <MainDashbord />
        </div>
      </div>
      </UserContext.Provider>
    </>
  )
}

export default App
