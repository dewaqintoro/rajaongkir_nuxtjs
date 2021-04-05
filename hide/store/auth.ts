import { createStore } from 'pinia'
import jwtDecode from 'jwt-decode'

interface TokenDto {
  _id: string
  exp: number
  iat: number
}

export const useAuthStore = createStore({
  id: 'auth',
  state: () => ({
    _id: '',
    user: {},
    token: '',
    isAuthenticated: false,
  }),
  actions: {
    setUser(context: any, token: string) {
      const decoded = jwtDecode(token) as TokenDto
      this.patch({
        _id: decoded._id,
        token,
        isAuthenticated: true,
      })

      context.app.$cookies.set('_t', token)

      return true
    },
  },
})
