import { createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getInitialNotification: null,
  openNotification: ['eventID']
})

export const FCMTypes = Types
export default Creators
