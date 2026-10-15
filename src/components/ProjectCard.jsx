<<<<<<< HEAD
import React from 'react';
import { Trash2, Edit2, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function ProjectCard({ project, onDelete, onEdit, onStatusChange }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Tamamlandı':
        return <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" /> Tamamlandı</span>;
      case 'Devam Ediyor':
        return <span className="bg-amber-50 text-amber-600 border border-amber-200 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Devam Ediyor</span>;
      default:
        return <span className="bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> Planlanıyor</span>;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Yüksek': return 'text-rose-600 bg-rose-50 border-rose-200';
      case 'Orta': return 'text-amber-600 bg-amber-50 border-amber-200';
      default: return 'text-sky-600 bg-sky-50 border-sky-200';
    }
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start gap-4 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-lg">{project.category}</span>
          <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${getPriorityColor(project.priority)}`}>
            {project.priority} Öncelik
          </span>
        </div>
        <h3 className="font-semibold text-slate-800 text-base mb-1">{project.title}</h3>
        <p className="text-xs text-slate-400 mb-4">Kayıt Tarihi: {project.date}</p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getStatusBadge(project.status)}
          <select
            value={project.status}
            onChange={(e) => onStatusChange(project.id, e.target.value)}
            className="text-xs border border-slate-200 rounded-lg px-2 py-1 bg-slate-50 focus:outline-none"
          >
            <option value="Planlanıyor">Planlanıyor</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
            <option value="Tamamlandı">Tamamlandı</option>
          </select>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onEdit(project)}
            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
            title="Düzenle"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(project.id)}
            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
            title="Sil"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
=======
import React from 'react';
import { Trash2, Edit2, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function ProjectCard({ project, onDelete, onEdit, onStatusChange }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Tamamlandı':
        return <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" /> Tamamlandı</span>;
      case 'Devam Ediyor':
        return <span className="bg-amber-50 text-amber-600 border border-amber-200 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Devam Ediyor</span>;
      default:
        return <span className="bg-slate-100 text-slate-600 border border-slate-200 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> Planlanıyor</span>;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Yüksek': return 'text-rose-600 bg-rose-50 border-rose-200';
      case 'Orta': return 'text-amber-600 bg-amber-50 border-amber-200';
      default: return 'text-sky-600 bg-sky-50 border-sky-200';
    }
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start gap-4 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-lg">{project.category}</span>
          <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${getPriorityColor(project.priority)}`}>
            {project.priority} Öncelik
          </span>
        </div>
        <h3 className="font-semibold text-slate-800 text-base mb-1">{project.title}</h3>
        <p className="text-xs text-slate-400 mb-4">Kayıt Tarihi: {project.date}</p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getStatusBadge(project.status)}
          <select
            value={project.status}
            onChange={(e) => onStatusChange(project.id, e.target.value)}
            className="text-xs border border-slate-200 rounded-lg px-2 py-1 bg-slate-50 focus:outline-none"
          >
            <option value="Planlanıyor">Planlanıyor</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
            <option value="Tamamlandı">Tamamlandı</option>
          </select>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => onEdit(project)}
            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
            title="Düzenle"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(project.id)}
            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
            title="Sil"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
>>>>>>> 4f18e74658cb3e92fcdc1822d57525650e9d3a7f
}