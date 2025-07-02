import { useState } from "react"
import { Home, LayoutGrid, Clock, MapPin, Users, BarChart3, Settings, LogOutIcon, BellDotIcon, MessageSquareIcon, BellIcon } from "lucide-react"

function NavBar() {
  const [activeItem, setActiveItem] = useState("home")

  const handleItemClick = (item) => {
    setActiveItem(item)
  }

  const navItems = [
    { id: "home", icon: LayoutGrid, href: "/" },
    { id: "notification", icon: BellIcon, href: "#" },
    { id: "users", icon: Users, href: "#" },
    { id: "analytics", icon: BarChart3, href: "#" },
    { id: "settings", icon: Settings, href: "#" },
  ]

  const getActiveIndex = () => navItems.findIndex((item) => item.id === activeItem)

  return (
    <nav className="flex flex-col items-center bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 w-[70px] h-[98%] p-4 shadow-xl shadow-blue-500/20 rounded-2xl">
      {/* Logo */}
      <div className="mb-8 flex items-center justify-center w-10 h-10 bg-white/15 rounded-xl backdrop-blur-sm">
        <Home className="w-6 h-6 text-white" />
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center space-y-4 flex-1 relative">
        {/* Animated Background */}
        <div
          className="absolute bg-white w-[55px] h-10 rounded-l-full transition-all duration-500 ease-in-out ml-4"
          style={{
            transform: `translateY(${getActiveIndex() * 56}px)`,
          }}
        />

        {navItems.map((item, index) => {
          const IconComponent = item.icon
          const isActive = activeItem === item.id

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleItemClick(item.id)
              }}
              className={`
                flex items-center justify-center w-[50px] h-10 rounded-xl z-10 relative
                transition-all duration-300 ease-in-out
                ${isActive ? "text-blue-600 scale-110 ml-4" : "text-white"}
              `}
            >
              <IconComponent className="w-5 h-5 " />
            </a>
          )
        })}
      </div>
      <div className="mt-auto">
        <a
          href="#"
          className={`
            flex items-center justify-center w-[50px] h-10 rounded-xl z-10 relative
            transition-all duration-300 ease-in-out hover:scale-110 hover:bg-white/20
          `}
        >
          <LogOutIcon className="w-5 h-5" />
        </a>
      </div>
    </nav>
  )
}

export default NavBar
