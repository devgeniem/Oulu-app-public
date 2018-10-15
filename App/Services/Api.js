// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'https://ouluappapi.production.geniem.io/api/') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 30 second timeout...
    timeout: 30000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const fetchEvents = (token, categories, subcategories, from, to, search, limit, page) => api.get(
    'event',
    { categories, subcategories, from, to, search, limit, page },
    {headers: { 'Authorization': `Bearer ${token}` }}
  )
  const fetchAds = (token) => api.get('/ad', { mobile: true }, {headers: { 'Authorization': `Bearer ${token}` }})
  const anonUser = (deviceid) => api.post('/anonuser', { deviceid })
  const login = (username, password) => api.post('/login', { username, password })
  const logout = (token) => api.get('/logout', {}, {headers: { 'Authorization': `Bearer ${token}` }})
  const user = (token) => api.get('/me', {}, {headers: { 'Authorization': `Bearer ${token}` }})
  const updateUser = (token, updatedFields) => api.post('/me', updatedFields, {headers: { 'Authorization': `Bearer ${token}` }})
  const updateSearchParameters = (token, searchParameters) => api.post('/me', {searchParameters}, {headers: { 'Authorization': `Bearer ${token}` }})
  const activateDevice = (token, deviceid) => api.post('/user/device', {deviceid}, {headers: { 'Authorization': `Bearer ${token}` }})
  const deactivateDevice = (token, deviceid) => api.delete('/user/device', {deviceid}, {headers: { 'Authorization': `Bearer ${token}` }})
  const fetchPolls = (token) => api.get('/voting', {}, {headers: { 'Authorization': `Bearer ${token}` }})
  const submitPoll = (token, answers, id) => api.post(`votingresult/${id}`, { answers }, {headers: { 'Authorization': `Bearer ${token}` }})
  const participate = (token, userId, eventId) => api.post(`event/${eventId}/participate`, {user: userId}, {headers: { 'Authorization': `Bearer ${token}` }})
  const deleteStatistics = (token) => api.post('me/deleteStatistics', {}, {headers: { 'Authorization': `Bearer ${token}` }})
  const fetchLinks = (token) => api.get('links', {}, {headers: { 'Authorization': `Bearer ${token}` }})

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    fetchEvents,
    anonUser,
    login,
    logout,
    user,
    updateSearchParameters,
    activateDevice,
    deactivateDevice,
    fetchPolls,
    participate,
    submitPoll,
    deleteStatistics,
    fetchAds,
    updateUser,
    fetchLinks
  }
}

// let's return back our create method as the default.
export default {
  create
}
