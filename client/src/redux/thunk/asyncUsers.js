const headers = { 'content-type': 'application/json' }

export const checkAuth = () => {
  return (dispatch) => {
    fetch('/getSession')
    .then(response => response.json())
    .then(data => {
      dispatch({ type: 'CHECK_SESSION', payload: data })
    })
    .catch(error => console.error(error))
  }
}

export const registerUser = (data) => {
  return (dispatch) => {
    fetch('/registration', {
      headers: {'content-type': 'application/json'},
      method: 'POST',
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => dispatch({ type: 'CHECK_SESSION', payload: data }))
    .catch(error => console.error(error))
  }
}

export const loginUser = (data) => {
  return (dispatch) => {
    fetch('/login', {
      headers,
      method: 'POST',
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(({ user }) => {
      dispatch({ type: 'CHECK_SESSION', payload: user })
    })
    .catch(error => console.error(error))
  }
}

// TODO: написать под это дело бэкенд
export const updateUser = (data) => {
  return (dispatch) => {
    fetch('/user', {
      headers,
      method: 'POST',
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(({ user }) => {
      dispatch({ type: 'CHECK_SESSION', payload: user })
    })
    .catch(error => console.error(error))
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    fetch('/logout')
    .then(response => response.json())
    .then(({ message }) => {
      if (message === 'Вы вышли из аккаунта') {
        dispatch({ type: 'CLEAR_SESSION', payload: {} })
      }
    })
    .catch(error => console.error(error))
  }
}
