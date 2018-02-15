import React, { Fragment } from 'react'

import {Helmet} from 'react-helmet'

export default props => (
  <Fragment>
    <Helmet>
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
    </Helmet>
    <nav>
      <div className='nav-wrapper light-blue darken-1'>
        <span className='brand-logo center'>Firebase DB</span>
        <ul id='nav-mobile'>
          <li><a href='sass.html'><i className='material-icons'>menu</i></a></li>
        </ul>
      </div>
    </nav>
  </Fragment>
)
