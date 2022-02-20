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