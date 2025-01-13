import api, { type AxiosResponse } from 'axios'
import { GetUserPayload, User, UserResponse } from './types'
import { USERS_PER_REQUEST } from './constants'
import { userParser } from './parser'

export const fetchUsers =  (payload?: GetUserPayload): Promise<AxiosResponse<User[]>> => 
  api.get<UserResponse>('https://randomuser.me/api/', {
    params: {
      ...payload,
      noinfo: true,
      results: USERS_PER_REQUEST,
    }
  }).then(response => ({
    ...response,
    data: response.data.results.map(userParser)
  }))

