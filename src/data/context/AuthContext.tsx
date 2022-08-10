import { createContext, useEffect, useState } from 'react'
import route from 'next/router'
import firebase from '../../firebase/config'
import Cookies from 'js-cookie'
import Usuario from '../../model/Usuario'

interface AuthContextProps {
  usuario?: Usuario
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken()
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor: usuarioFirebase.providerData[0].providerId,
    imagemUrl: usuarioFirebase.photoURL
  }
}

function gerenciarCookie(logado: boolean) {
  if (logado) {
    Cookies.set('admin-template-fornari-auth', logado, {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-fornari-auth')
  }
}

export function AuthProvider(props) {
  const [load, setLoad] = useState(true);
  const [usuario, setUsuario] = useState<Usuario>(null);

  async function configurarSessao(usuarioFirebase) {
    if (usuarioFirebase?.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase);
      setUsuario(usuario);
      gerenciarCookie(true);
      setLoad(false);
      return usuario.email
    } else {
      setUsuario(null);
      gerenciarCookie(false);
      setLoad(false);
      return false
    }
  }

  async function loginGoogle() {
    try {
      setLoad(true);
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )

      configurarSessao(resp.user)
      route.push('/');
    } finally {
      setLoad(false);
    }
  }

  async function logout() {
    try {
      setLoad(true);
      await firebase.auth().signOut();
      await configurarSessao(null);
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-fornari-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(configurarSessao)
      return () => cancel()
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      usuario,
      loginGoogle,
      logout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext