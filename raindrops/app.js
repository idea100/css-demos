import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

function App () {
  var arr120 = []
  for (let i = 0; i < 120; i++) {
    arr120.push(i)
  }
  return (
    <div className="container">
      <div className="window"></div>

      <div className="raindrops">
        <div className="borders">
          {
            arr120.map(item => <div className="border"></div>)
          }
        </div>

        <div className="drops">
          {
            arr120.map(item => <div className="raindrop"></div>)
          }
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
