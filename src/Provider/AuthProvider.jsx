import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
// import axios from "axios";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [filteredTutors, setFilteredTutors] = useState([]);
  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update User
  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // Login User
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  GoogleLogin
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Logout User
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // OnAuthStateChange
  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      // Token Generate

      if (currentUser?.email) {
        const userInfo = { email: currentUser.email };
        axios
          .post("https://langveta-server.vercel.app/jwt", userInfo, {
            withCredentials: true,
          })
          .then()
          .catch((error) => console.log(error));
      }

      // console.log("user in the auth state change", currentUser);
    });
    return () => {
      unSubsCribe();
    };
  }, []);

  const authInfo = {
    createUser,
    updateUser,
    loginUser,
    googleLogin,
    logOutUser,
    user,
    setUser,
    loading,
    setLoading,
    filteredTutors,
    setFilteredTutors,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};
export default AuthProvider;
