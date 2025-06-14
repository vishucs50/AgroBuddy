export default function TransparentNav(){
    return (
      <>
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-green-400">
              🌾 AgroBuddy
            </div>
            <ul className="flex gap-6 text-green-300 font-medium">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/login">Login</a>
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