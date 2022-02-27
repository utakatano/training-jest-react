import defaultExport, {bar, foo} from '../../utils/fooBarBaz'

jest.mock('../../utils/fooBarBaz', () => {
  const originalModule = jest.requireActual('../../utils/fooBarBaz')

  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo'
  }
})

test('should do a partial mock', () => {
  const defaultExportResult = defaultExport()
  expect(defaultExportResult).toBe('mocked baz')
  expect(defaultExport).toHaveBeenCalled()

  expect(foo).toBe('mocked foo')
  expect(bar()).toBe('bar')
})