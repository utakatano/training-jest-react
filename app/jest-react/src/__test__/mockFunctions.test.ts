export {}

const myMock = jest.fn()

test('`.mock` property', () => {
  const a = new myMock()
  const b = {}
  const bound = myMock.bind(b)
  bound()

  console.log(myMock.mock.instances)
})

test('Mock Return Values', () => {
  console.log(myMock())

  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true)
  console.log(myMock(), myMock(), myMock(), myMock())
})

test('Mock filterTestFn', () => {
  const filterTestFn = jest.fn()

  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false)

  const result = [11, 12].filter(num => filterTestFn(num))

  console.log(result);
  console.log(filterTestFn.mock.calls[0][0])
  console.log(filterTestFn.mock.calls[1][0])
})