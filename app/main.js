import { render } from 'react-dom'
import routes from './routes'
import React from 'react'
import { Router } from 'react-router'

render(<Router routes={routes} />, document.getElementById('root'))
