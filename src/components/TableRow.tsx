import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2 } from 'lucide-react';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

interface User {
  id: string;
  name: string;
  email: string;
  status: 'Active' | 'Inactive';
  role: string;
}

interface TableRowProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

const statusColors: Record<string, string> = {
  Active: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
  Inactive: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
};

export function TableRow({ user, onEdit, onDelete }: TableRowProps) {
  return (
    <motion.tr
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
    >
      <td className="py-3 px-4 text-sm text-slate-800 dark:text-white font-medium">
        {user.name}
      </td>
      <td className="py-3 px-4 text-sm text-slate-600 dark:text-slate-400">
        {user.email}
      </td>
      <td className="py-3 px-4 text-sm text-slate-600 dark:text-slate-400">
        {user.role}
      </td>
      <td className="py-3 px-4">
        <Badge variant={user.status === 'Active' ? 'default' : 'secondary'} className={statusColors[user.status]}>
          {user.status}
        </Badge>
      </td>
      <td className="py-3 px-4">
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit(user)}
            className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(user.id)}
            className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </td>
    </motion.tr>
  );
}

export default TableRow;
