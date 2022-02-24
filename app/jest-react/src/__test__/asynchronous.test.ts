export {}

test('callbacks - the data is peanut butter', (done) => {
  const fetchData: (callback: (str: string) => void) => Promise<void> = (callback) => {
    return new Promise(() => {
      setTimeout(() => callback('peanut butter'), 1000);
    })
  }

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

describe('promises', () => {
  const fetchData: () => Promise<string> = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('peanut butter'), 1000);
    })
  }

  test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter')
    })  
  })

  test('the fetch fails with an error', () => {
    expect.assertions(0)
    return fetchData().catch(e => expect(e).toMatch('error'))
  })

  test('the data is peanut butter using `.resolves`', () => {
    return expect(fetchData()).resolves.toBe('peanut butter')
  })

  test.skip('the fetch fails with an error using `.rejects`', () => {
    return expect(fetchData()).rejects.toMatch('error')
  })
})

describe('async/await', () => {
  const fetchData: () => Promise<string> = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('peanut butter'), 1000);
    })
  }

  test('the data is peanut butter', async () => {
    const data = await fetchData()
    expect(data).toBe('peanut butter')
  })

  test('the fetch fails with an error', async () => {
    expect.assertions(0)
    try {
      await fetchData()
    } catch(e) {
      expect(e).toMatch('error')
    }
  })

  test('the data is peanut butter using `.resolves`', () => {
    return expect(fetchData()).resolves.toBe('peanut butter')
  })

  test.skip('the fetch fails with an error using `.rejects`', () => {
    return expect(fetchData()).rejects.toMatch('error')
  })
})