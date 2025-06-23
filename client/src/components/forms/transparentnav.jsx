export default function TransparentNav(){
    return (
      <>
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-green-400">
              <img
                src="/Screenshot_2025-06-14_170116-removebg-preview.png"
                alt="Logo"
                className="h-12 w-auto"
              />
            </div>
            <ul className="flex gap-6 text-green-300 font-medium">
            
              <li>
                <a href="/Login">Login</a>
              </li>
              <li>
                <a href="/register">Register</a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}