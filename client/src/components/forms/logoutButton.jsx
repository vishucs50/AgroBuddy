import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/Login");
    } catch (error) {
      toast.error("Logout failed");
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800 ml-2"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
