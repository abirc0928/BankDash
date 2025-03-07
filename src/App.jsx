import { Header } from "./Components/Header"
import MainDashbord from "./Components/MainDashbord"
import { Sidebar } from "./Components/Sidebar"

function App() {
  return (
    <>
      <div className="flex bg-[#EFF3F9] font-inter">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <MainDashbord />
        </div>
      </div>
    </>
  )
}

export default App
