export const addSupport = (data) => {
  return (dispatch) => {
    fetch('/add/support', {
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => dispatch({ type: 'ADD_SUPPORT', payload: data }))
      .catch(error => console.error(error))
  }
}
