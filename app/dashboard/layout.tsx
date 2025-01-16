import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/ui/avatar';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <SideNav />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top bar */}
        <header className="bg-white dark:bg-gray-800 shadow-sm h-16 flex items-center justify-end px-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </header>

        {/* Page content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

