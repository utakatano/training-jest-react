export {}

const fetchData = (callback: (str: string) => void) => {
  setTimeout(() => {
    callback('peanut butter')
  }, 1000)
}

test('callbacks - the data is peanut butter', (done) => {
  function callback(data: string) {
    try {
      expect(data).toBe('peanut butter')
      done()
    } catch(error) {
      done(error)
    }
  }

  fetchData(callback)
})
