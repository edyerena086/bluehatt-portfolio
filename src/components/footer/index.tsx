// Import core libraries
import React, {FC} from 'react'

// Import components
import {Section} from '@components/index'

// Import utils
import {classy} from '@utils/index'

// Import sub-components
import SocialMedia from './socialMedia'
import SiteMap from './sitemap'
import ContactForm from './contactForm'

// Import interfaces
import {FooterPropsInterface} from './interfaces'

const Footer: FC<FooterPropsInterface> = ({socialMedia, siteMap}) => {
  const styleClasses = {
    footer: classy([
      'bg-black'
    ]),
    top: classy([
      'grid grid-cols-2 gap-4'
    ]),
    formWrapper: classy([]),
    sitemapSocial: classy([
      'flex justify-between'
    ]),
    socialInfo: classy([
      'w-2/3'
    ]),
  }

  return (
    <footer className={styleClasses.footer}>
      {/* Footer Top */}
      <Section isInverted>
        <section className={styleClasses.top}>
          {/* Contact form */}
          <section className={styleClasses.formWrapper}>
            <ContactForm title='Formulario' />
          </section>
          {/* Sitemap and Social Media */}
          <section className={styleClasses.sitemapSocial}>
            <SiteMap {...siteMap} />
            {/* Social Media nd contact info */}
            <section className={styleClasses.socialInfo}>
              <SocialMedia {...socialMedia} />
            </section>
          </section>
        </section>
      </Section>
    </footer>
  )
}

export default Footer
