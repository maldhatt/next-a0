export default function DashboardPage() {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Welcome</h2>
            <p className="text-muted-foreground">This is your dashboard. You can add widgets and content here.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Statistics</h2>
            <p className="text-muted-foreground">Display your important statistics and metrics here.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <p className="text-muted-foreground">Show a list of recent activities or notifications here.</p>
          </div>
        </div>
      </div>
    )
  }
  
  