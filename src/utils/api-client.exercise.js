function client(endpoint, customConfig = {}) {
  const config = {
    method: 'GET',
    ...customConfig,
  }

  return window
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
    .then( async (response) => {
      const data = await response.json();
      console.log(`data: ${data}`)
      console.log(`data: ${JSON.stringify(data)}`)
      if (response.ok) {
        console.log(`response.status ${response.status}`)
        console.log(`response is ok`)
        return data
      }
      else {
        console.log(`inside else of client`)
        return Promise.reject(data)
      }
    })
}

export {client}
