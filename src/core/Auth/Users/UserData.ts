
export interface UserDataUsername {
  firstname: string
  lastname: string
}

export interface UserDataEmail {
  address: string
  verified: boolean
}

export interface UserData {
  name: string | UserDataUsername
  emails: UserDataEmail[]
}
