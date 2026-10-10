// import UserDashboard from "../components/User";

import UserDashboard, { UserProfile, UserActivity, UserSettings } from "../components/User";
function userPage() {
  return (
    <div>
      <h1>This is our user page</h1>

      {/* <UserDashboard /> */}
      <UserProfile />
      <UserActivity />
      <UserSettings />
    </div>
  )
}


export default userPage;