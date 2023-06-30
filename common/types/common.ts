export interface NavigationObjectType {
  href: string,
  title: string,
  icon: string,
  size: {
  	width: number,
  	height: number
  }
}

export interface KeyValueMapping {
  key: string,
  value: string | number
}

export interface Mapping {
  [key: string]: string | number | boolean | Object
}
