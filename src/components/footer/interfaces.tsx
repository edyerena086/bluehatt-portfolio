// Imoprt general interface
import {callToActionPropsType, LinkItemsPropsInterface} from '@common/interfaces'

export interface SocialMediaPropsInterface extends LinkItemsPropsInterface {}

export interface SiteMapPropsInterface extends LinkItemsPropsInterface {}

export interface ContactFormPropsInterface {
  title: string
  emails?: string
}

export interface FooterPropsInterface {
  socialMedia: LinkItemsPropsInterface
  siteMap: LinkItemsPropsInterface
}
