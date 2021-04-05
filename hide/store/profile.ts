import { createStore } from 'pinia'
import axios from 'axios'
import { Page, Profile, MyPages } from '@/@types'

export const useProfileStore = createStore({
  id: 'profile',
  state: () => ({
    profile: {} as Profile,
    pages: [] as Page[],
    mypages: {} as MyPages[],
    isReady: false,
    profileReady: false,
    widgets: []
  }),
  actions: {
    async getProfileByUsername(username: string) {
      this.patch({
        profileReady: false
      })
      try {
        const url = `${process.env.tautanUrl}/profiles/${username}`
        const response = await axios.get(url)
        // console.log('getProfileByUsername store', response)
        const data = response.data.data

        const { pages, ...profile } = data
        this.getPagesByName(data.pages[0].name)
        this.patch({
          profile,
          pages,
          profileReady: true,
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getPagesByName(username: string) {
      this.patch({
        isReady: false
      })
      try {
        const url = `${process.env.tautanUrlTest}/pages/getPageByName/${username}`
        const response = await axios.get(url)
        const data = response.data.data

        const { ...mypages } = data
        this.patch({
          mypages,
          isReady: true,
          widgets: data.widgets
        })

        // console.log('mypages store', mypages)
        // console.log('profile', this.state.profile)
      } catch (error) {
        console.log(error)
      }
    },
  },
})
