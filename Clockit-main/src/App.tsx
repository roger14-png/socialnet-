import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { SocketProvider } from "@/contexts/SocketContext";
import { MediaPlayerProvider } from "@/contexts/MediaPlayerContext";
import { MediaNotification } from "@/components/media/MediaNotification";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { OfflineIndicator } from "@/components/OfflineIndicator";

import Index from "./pages/Index";
import Music from "./pages/Music";
import Stories from "./pages/Stories";
import Groups from "./pages/Groups";
import GroupDetail from "./pages/GroupDetail";
import Profile from "./pages/Profile";
import Reels from "./pages/Reels";
import { Live } from "./pages/Live";
import LiveFeed from "./pages/LiveFeed";
import Chat from "./pages/Chat";
import Auth from "./pages/Auth";
import AuthCallback from "./pages/AuthCallback";
import SpotifyCallback from "./pages/SpotifyCallback";
import Onboarding from "./pages/Onboarding";
import Settings from "./pages/Settings";
import Appearance from "./pages/Appearance";
import Search from "./pages/Search";
import Discover from "./pages/Discover";
import DownloadedMusic from "./pages/DownloadedMusic";
import Podcasts from "./pages/Podcasts";
import OfflineReels from "./pages/OfflineReels";
import Notifications from "./pages/Notifications";
import Post from "./pages/Post";
import Snap from "./pages/Snap";
import CameraTest from "./pages/CameraTest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <SocketProvider>
            <MediaPlayerProvider>
              <MediaNotification />
              <PWAInstallPrompt />
              <OfflineIndicator />
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/home" element={<Navigate to="/" replace />} />

                  <Route path="/stories" element={<Stories />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/library" element={<Navigate to="/music" replace />} />

                  <Route path="/groups" element={<Groups />} />
                  <Route path="/groups/:id" element={<GroupDetail />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/profile/:userId" element={<Profile />} />
                  <Route path="/reels" element={<Reels />} />
                  <Route path="/live" element={<Live />} />
                  <Route path="/live/:id" element={<Live />} />
                  <Route path="/live-feed" element={<LiveFeed />} />

                  <Route path="/chat" element={<Chat />} />
                  <Route path="/messages" element={<Navigate to="/chat" replace />} />

                  <Route path="/auth" element={<Auth />} />
                  <Route path="/auth/callback" element={<AuthCallback />} />
                  <Route path="/auth/spotify/callback" element={<SpotifyCallback />} />
                  <Route path="/onboarding" element={<Onboarding />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/settings/:sectionId" element={<Settings />} />
                  <Route path="/settings/appearance" element={<Appearance />} />
                  <Route path="/downloads" element={<DownloadedMusic />} />
                  <Route path="/podcasts" element={<Podcasts />} />
                  <Route path="/offline-reels" element={<OfflineReels />} />

                  <Route path="/search" element={<Search />} />
                  <Route path="/explore" element={<Discover />} />
                  <Route path="/discover" element={<Discover />} />
                  <Route path="/for-you" element={<Navigate to="/" replace />} />

                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/post" element={<Post />} />
                  <Route path="/create" element={<Navigate to="/snap" replace />} />

                  <Route path="/camera-test" element={<CameraTest />} />
                  <Route path="/snap" element={<Snap />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </TooltipProvider>
            </MediaPlayerProvider>
          </SocketProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;