const apiURL = process.env.REACT_APP_API_URL

function client(endpoint, token, customConfig = {}) {
  const headers = new Headers({
    'Authorization': `Bearer ${token}`,
  })
  const config = {
    method: 'GET',
    headers,
    ...customConfig,
  }

  // console.log(`config in client: ${JSON.stringify(config)}`);
  return window.fetch(`${apiURL}/${endpoint}`, config).then(async response => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export {client}
