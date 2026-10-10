

function UserProfile() {
    return (
        <div className="bg-blue-700 p-4 rounded-md" >
            <h2>User Profile</h2>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
        </div>
    );
}

function UserSettings() {
    return (
        <div className="bg-green-700 p-4 rounded-md" >
            <h2>User Settings</h2>
            <p>Notification Preferences: Enabled</p>
            <p>Privacy Settings: Public</p>
        </div>
    );
}

function UserActivity() {
    return (
        <div className="bg-red-700 p-4 rounded-md" >
            <h2>User Activity</h2>
            <p>Last Login: 2024-06-01</p>
            <p>Recent Actions: Updated profile, Changed password</p>
        </div>
    );
}

function UserDashboard() {
    return (
        <div>
            <h1>User Dashboard</h1>
            <UserProfile />
            <UserSettings />
            <UserActivity />
        </div>
    );
}

export { UserProfile, UserSettings, UserActivity };
export default UserDashboard;