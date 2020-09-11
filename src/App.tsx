import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Detail } from 'containers'

const App: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/detail">
        <Detail />
      </Route>
    </Switch>
  )
}

export default App
