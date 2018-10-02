import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './Header'
import CookiesBanner from 'mfg/components/CookiesBanner'

import init from 'mfg/utils/init'

import 'mfg/styles/styles.scss'
import 'styles/styles.scss'

const options = {
  site: 'CHANGE_THIS_TO_DESIRED SITE'
}
init(options)

const Layout = ({children}) => (
  <>
    <Helmet>
      <html lang='en' />
      <title>Madfinger Web</title>
    </Helmet>

    <Header />

    <div>
      {children}
    </div>

    <CookiesBanner />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
