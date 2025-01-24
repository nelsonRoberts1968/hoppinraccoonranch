
import React from 'react';
import { Link } from 'wouter';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Menu, Bell, Settings, User } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar>
            <SidebarHeader>
              <div className="flex items-center gap-2 px-4">
                <img src="/hop-icon.png" alt="Hop Icon" className="w-8 h-8" />
                <h2 className="text-xl font-bold">Hoppin Raccoon Ranch</h2>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/">Home</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        </div>

        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-background border-b md:pl-[280px]">
            <div className="md:hidden flex items-center gap-2">
              <img src="/hop-icon.png" alt="Hop Icon" className="w-6 h-6" />
              <h2 className="text-lg font-bold">Hoppin Raccoon</h2>
            </div>
            
            <div className="flex items-center gap-4 ml-auto">
              <button className="p-2 hover:bg-accent rounded-full">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-accent rounded-full">
                <Settings className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-accent rounded-full">
                <User className="h-5 w-5" />
              </button>
            </div>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger className="p-2">
                  <Menu className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <img src="/hop-icon.png" alt="Hop Icon" className="w-6 h-6" />
                    <h2 className="text-lg font-bold">Hoppin Raccoon Ranch</h2>
                  </div>
                  <nav className="flex flex-col gap-2">
                    <Link href="/" className="px-2 py-1 hover:bg-accent rounded-md">
                      Home
                    </Link>
                  </nav>
                </div>
              </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Main Content */}
          <main className="flex-1 p-6 md:p-6 mt-16 md:ml-[280px]">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t bg-background p-6 md:ml-[280px]">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © 2024 Hoppin Raccoon Ranch. All rights reserved.
              </div>
              <div className="flex gap-4 text-sm">
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default MainLayout;
