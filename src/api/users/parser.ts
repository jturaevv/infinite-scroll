import { User, UserResponse,  } from './types'

export const userParser = (response: UserResponse['results'][0]): User => {
  const {
    gender,
    name,
    email,
    phone,
    login: { username, uuid: id },
    registered,
    picture: { medium: avatar },
    location,
  } = response

  return {
    id,
    username,
    gender,
    name,
    email,
    phone,
    registered: new Date(registered.date),
    avatar,
    location: {
      country: location.country,
      city: location.city
    }
  }
}
