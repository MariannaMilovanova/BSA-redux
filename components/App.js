import React from 'react'
import AddUser from '../containers/AddUser'
import MatchUsers from '../containers/VisibleUserList'

const App = () => (
  <div className='body-ofThePage'>
        <h1 className='header'> Join the club! Party Hard!</h1>
        <p className='sub-header'>Add your NickName to the party guests! Make sure that you are truly U.N.I.Q.U.E. guy ;)</p>
        <img className='img' src='https://raw.githubusercontent.com/MariannaMilovanova/pictures/master/glass.png'/>
    <AddUser />
    <MatchUsers />
  </div>
)

export default App