import React, { useState } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { DataTable } from './components/DataTable';
import { MetricCard } from './components/MetricCard';
import { AddDataModal } from './components/AddDataModal';
import { EditModal } from './components/EditModal';
import { User, Users, Activity, TrendingUp, DollarSign } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  status: 'Active' | 'Inactive';
  role: string;
}

const initialUsers: User[] = [
  { id: '1', name: 'Sarah Johnson', email: 'sarah.j@example.com', status: 'Active', role: 'Admin' },
  { id: '2', name: 'Michael Chen', email: 'm.chen@example.com', status: 'Active', role: 'Editor' },
  { id: '3', name: 'Emily Davis', email: 'emily.d@example.com', status: 'Inactive', role: 'Viewer' },
  { id: '4', name: 'James Wilson', email: 'j.wilson@example.com', status: 'Active', role: 'Manager' },
  { id: '5', name: 'Lisa Anderson', email: 'lisa.a@example.com', status: 'Active', role: 'Editor' },
];

export default function App() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleAddUser = (data: { name: string; email: string; role: string; status: 'Active' | 'Inactive' }) => {
    const newUser: User = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
      role: data.role,
      status: data.status,
    };
    setUsers([...users, newUser]);
  };

  const handleEditUser = (data: { name: string; email: string; role: string; status: 'Active' | 'Inactive' }) => {
    if (!editingUser) return;
    setUsers(users.map(user => user.id === editingUser.id ? { ...user, ...data } : user));
    setEditingUser(null);
    setIsEditModalOpen(false);
  };

  const handleDeleteUser = (id: string) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEditClick = (user: User) => {
    setEditingUser(user);
    setIsEditModalOpen(true);
  };

  const metrics = [
    { title: 'Total Users', value: users.length, change: 12, icon: <Users className="h-5 w-5" />, color: 'indigo' },
    { title: 'Active Sessions', value: 128, change: 8, icon: <Activity className="h-5 w-5" />, color: 'emerald' },
    { title: 'Conversion Rate', value: '3.2%', change: -2, icon: <TrendingUp className="h-5 w-5" />, color: 'blue' },
    { title: 'Revenue', value: '$24.5K', change: 15, icon: <DollarSign className="h-5 w-5" />, color: 'purple' },
  ] as const;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <NavigationBar />
      <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="py-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Dashboard</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          <DataTable
            users={users}
            onAdd={() => setIsAddModalOpen(true)}
            onEdit={handleEditClick}
            onDelete={handleDeleteUser}
          />

          <AddDataModal
            isOpen={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
            onSubmit={handleAddUser}
          />

          <EditModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            onSubmit={handleEditUser}
            initialData={editingUser || { name: '', email: '', role: '', status: 'Active' }}
          />
        </div>
      </main>
    </div>
  );
}
