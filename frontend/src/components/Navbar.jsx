import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const desktopBaseClass = "nav-item flex items-center gap-3 px-4 py-3 mx-2 rounded-lg cursor-pointer active:scale-95 duration-150 transition-colors"
  const desktopActiveClass = "bg-secondary-container text-on-secondary-container"
  const desktopInactiveClass = "text-primary-fixed-dim hover:text-white hover:bg-primary-container"

  const mobileBaseClass = "mobile-nav-item flex flex-col items-center justify-center transition-all active:scale-90 duration-200 cursor-pointer"
  const mobileActiveClass = "text-primary"
  const mobileInactiveClass = "text-on-surface-variant hover:text-primary"

  return (
    <>
      {/* Navigation Drawer (Desktop Only) */}
      <aside className="hidden lg:flex flex-col h-screen py-6 bg-primary fixed left-0 top-0 w-64 border-r border-outline-variant z-50">
        <div className="px-6 mb-10">
          <h1 className="font-headline-md text-headline-md font-bold text-white">PaddyPulse</h1>
        </div>
        <nav className="flex-1 space-y-2">
          <NavLink to="/" className={({ isActive }) => `${desktopBaseClass} ${isActive ? desktopActiveClass : desktopInactiveClass}`}>
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </NavLink>
          <NavLink to="/field-monitoring" className={({ isActive }) => `${desktopBaseClass} ${isActive ? desktopActiveClass : desktopInactiveClass}`}>
            <span className="material-symbols-outlined">potted_plant</span>
            <span className="font-label-md text-label-md">Field Monitoring</span>
          </NavLink>
          <NavLink to="/ai-insights" className={({ isActive }) => `${desktopBaseClass} ${isActive ? desktopActiveClass : desktopInactiveClass}`}>
            <span className="material-symbols-outlined">psychology</span>
            <span className="font-label-md text-label-md">AI Insights</span>
          </NavLink>
          <NavLink to="/analytics" className={({ isActive }) => `${desktopBaseClass} ${isActive ? desktopActiveClass : desktopInactiveClass}`}>
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-label-md text-label-md">Analytics</span>
          </NavLink>
          <NavLink to="/carbon-credits" className={({ isActive }) => `${desktopBaseClass} ${isActive ? desktopActiveClass : desktopInactiveClass}`}>
            <span className="material-symbols-outlined">eco</span>
            <span className="font-label-md text-label-md">Carbon Credits</span>
          </NavLink>
        </nav>
        <div className="px-2 mt-auto">
          <NavLink to="/settings" className={({ isActive }) => `${desktopBaseClass} ${isActive ? desktopActiveClass : desktopInactiveClass}`}>
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </NavLink>
        </div>
      </aside>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 bg-surface border-t border-outline-variant z-50 shadow-sm">
        <NavLink to="/" className={({ isActive }) => `${mobileBaseClass} ${isActive ? mobileActiveClass : mobileInactiveClass}`}>
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-md text-[10px]">Dashboard</span>
        </NavLink>
        <NavLink to="/field-monitoring" className={({ isActive }) => `${mobileBaseClass} ${isActive ? mobileActiveClass : mobileInactiveClass}`}>
          <span className="material-symbols-outlined">potted_plant</span>
          <span className="font-label-md text-[10px]">Monitoring</span>
        </NavLink>
        <NavLink to="/ai-insights" className={({ isActive }) => `${mobileBaseClass} ${isActive ? mobileActiveClass : mobileInactiveClass}`}>
          <span className="material-symbols-outlined">psychology</span>
          <span className="font-label-md text-[10px]">AI</span>
        </NavLink>
        <NavLink to="/analytics" className={({ isActive }) => `${mobileBaseClass} ${isActive ? mobileActiveClass : mobileInactiveClass}`}>
          <span className="material-symbols-outlined">analytics</span>
          <span className="font-label-md text-[10px]">Analytics</span>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => `${mobileBaseClass} ${isActive ? mobileActiveClass : mobileInactiveClass}`}>
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-md text-[10px]">Settings</span>
        </NavLink>
      </nav>
    </>
  )
}
