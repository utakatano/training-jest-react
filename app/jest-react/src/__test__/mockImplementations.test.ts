export {}

const myMockFn = jest.fn(cb => cb(null, true))

test('myMockFn', () => {
  const result = myMockFn((err: any, val: any) => {
    return {err, val}
  })

  expect(result.err).toBeNull()
  expect(result.val).toBeTruthy()
})
