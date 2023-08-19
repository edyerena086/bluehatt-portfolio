type navbarItem = {
  name: string
  to: string
  showOff?: boolean
}

export interface NavbarPropsInterface {
  items: navbarItem[]
}

export interface HeaderPropsInterface {
  navbar: navbarItem[]
}