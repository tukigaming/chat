import React from "react";
import { auth, googleProvider } from "./firebase";

const SignIn = () => {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <button onClick={signInWithGoogle}>Iniciar sesión con Google</button>
    </div>
  );
};

export default SignIn;