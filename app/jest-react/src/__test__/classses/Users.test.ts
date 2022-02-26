import axios from 'axios'
import { Users } from '../../classes/Users'

jest.mock('axios')

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  (axios.get as any).mockResolvedValue({data: users})

  return Users.all().then(data => expect(data).toEqual(users))
})