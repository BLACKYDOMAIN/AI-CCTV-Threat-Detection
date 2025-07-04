import React from 'react';
import Signup from './pages/Signup';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import LiveFeed from './pages/LiveFeed';
import Alerts from './pages/Alerts';
import Complaint from './pages/Complaint';
import SnapshotGallery from './pages/SnapshotGallery';
import RiskAnalytics from './pages/RiskAnalytics';
import AlertLogs from './pages/AlertLogs';
import BehaviorHistory from './pages/BehaviorTracking';
import RealTimeNotifications from './components/NotificationPanel';
import SystemSettings from './pages/SystemSettings';
import DataExport from './pages/DataExport';
import Help from './pages/Help';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';

const routes = [
  { path: '/', element: <Signup /> },               // Default = Signup
  { path: '/login', element: <AdminLogin /> },
  { path: '/admin', element: <AdminLogin /> },      // ✅ Fixed 404 issue
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/live', element: <LiveFeed /> },
  { path: '/alerts', element: <Alerts /> },
  { path: '/complaint', element: <Complaint /> },
  { path: '/gallery', element: <SnapshotGallery /> },
  { path: '/analytics', element: <RiskAnalytics /> },
  { path: '/alert-logs', element: <AlertLogs /> },
  { path: '/history', element: <BehaviorHistory /> },
  { path: '/notifications', element: <RealTimeNotifications /> },
  {
    path: '/settings',
    element: <PrivateRoute element={<SystemSettings />} allowedRoles={['Admin']} />
  },
  {
    path: '/export',
    element: <PrivateRoute element={<DataExport />} allowedRoles={['Admin', 'Analyst']} />
  },
  { path: '/help', element: <Help /> },
  { path: '*', element: <NotFound /> }
];

export default routes;
