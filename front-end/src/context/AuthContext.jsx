import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const role = user?.role ? user.role.toLowerCase() : null;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    const normalizedUser = {
      ...userData,
      role: userData.role?.toLowerCase() || "user",
    };
    localStorage.setItem("user", JSON.stringify(normalizedUser));
    setUser(normalizedUser);
    setTimeout(() => {
      toast.success(`Welcome back, ${normalizedUser.fullName || "User"}!`);
    }, 300);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("You have been logged out.");
    // navigation should be handled in the component
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
