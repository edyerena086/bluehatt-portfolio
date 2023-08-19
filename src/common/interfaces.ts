export type callToActionPropsType = {
  title?: string
  name: string
  to?: string
  type: string
  showOff?: boolean
}

export interface LinkItemsPropsInterface {
  name: string
  items: callToActionPropsType[]
}