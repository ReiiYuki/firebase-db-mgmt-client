import React, { Fragment, PureComponent } from 'react'

import NavBar from 'components/NavBar'

export default class App extends PureComponent {
    state = {
      isFirebaseReady: false
    }
    render () {
      return (
        <Fragment>
          <NavBar />

        </Fragment>
      )
    }
}
