import { Navigate } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PrivateRoute({ children }: any) {
  const token = localStorage.getItem('token')

  return token ? children : <Navigate to="/login" />
}
