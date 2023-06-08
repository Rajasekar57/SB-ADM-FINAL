import React from 'react'
import {Outlet , Link} from 'react-router-dom'

function Profile() {
  return <>
  <div>
    <h1>Profile</h1>
    <h3>The sub Components are :</h3>
    <ul>
      <Link to="details"><li>ProfileDetails</li></Link>
      <Link to="reset"><li>ResetPassword</li></Link>
    </ul>
    <Outlet/>
    </div>

    </>
}

export default Profile