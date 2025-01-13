export type GetUserPayload = {
  page?: number
}

export type User = Pick<UserResponse['results'][0], 'gender' | 'name' | 'email' | 'phone'> & {
  id: string,
  username: string,
  registered: Date,
  avatar: string,
  location: Pick<UserResponse['results'][0]['location'], 'country' | 'city'>
}

export type UserResponse = { 
  results: {
    gender: UserGender,
    name: {
      title: UserNameTitle,
      first: string,
      last: string
    },
    location: UserLocation,
    email: string,
    login: {
      uuid: string,
      username: string,
      password: string,
      salt: string,
      md5: string,
      sha1: string,
      sha256: string
    },
    dob: {
      date: string,
      age: number
    },
    registered: {
      date: string,
      age: number
    },
    phone: string,
    cell: string,
    id: {
      name: string,
      value: string
    },
    picture: UserPicture,
    nat: string
  }[]
}

export type UserLocation = {
  street: {
    number: number,
    name: string
  },
  city: string,
  state: string,
  country: string,
  postcode: number,
  coordinates: {
    latitude: string,
    longitude: string
  },
  timezone: {
    offset: string,
    description: string
  }
}

export type UserPicture = {
  large: string,
  medium: string,
  thumbnail: string
}

export type UserNameTitle = 'Mr' | 'Mrs' |'Miss' | 'Monsieur'

export type UserGender = 'female' | 'male'
