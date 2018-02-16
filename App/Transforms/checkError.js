export const checkErrorType = (response) => {
  const error = {}
  if (response.problem === 'CLIENT_ERROR') {
    error.key = response.data.error
  } else if (response.problem === 'NETWORK_ERROR') {
    error.key = 'network_error'
  } else {
    error.key = 'server_error'
  }
  return error
}
