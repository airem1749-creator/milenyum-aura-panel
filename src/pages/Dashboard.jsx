<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProjectForm from '../components/ProjectForm';
import ProjectCard from '../components/ProjectCard';
import { FolderKanban, Search } from 'lucide-react';

export default function Dashboard() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('milenyum_projects');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, title: 'Otomatik Hat Konveyör PLC Kodlaması', category: 'PLC Otomasyon', priority: 'Yüksek', status: 'Devam Ediyor', date: '15.10.2026' },
      { id: 2, title: 'MİLENYUM AURA Web Paneli API Entegrasyonu', category: 'Yazılım Entegrasyonu', priority: 'Orta', status: 'Planlanıyor', date: '15.10.2026' }
    ];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    localStorage.setItem('milenyum_projects', JSON.stringify(projects));
  }, [projects]);

  const handleAddProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  const handleUpdateProject = (updated) => {
    setProjects(projects.map(p => p.id === updated.id ? updated : p));
    setEditingProject(null);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setProjects(projects.map(p => p.id === id ? { ...p, status: newStatus } : p));
  };

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* İstatistik Özet Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">TOPLAM PROJE</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{projects.length}</h3>
            </div>
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><FolderKanban className="w-6 h-6" /></div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">DEVAM EDEN</p>
              <h3 className="text-2xl font-bold text-amber-600 mt-1">{projects.filter(p => p.status === 'Devam Ediyor').length}</h3>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><FolderKanban className="w-6 h-6" /></div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">TAMAMLANAN</p>
              <h3 className="text-2xl font-bold text-emerald-600 mt-1">{projects.filter(p => p.status === 'Tamamlandı').length}</h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><FolderKanban className="w-6 h-6" /></div>
          </div>
        </div>

        {/* Ekleme / Düzenleme Formu */}
        <ProjectForm 
          onAddProject={handleAddProject} 
          editingProject={editingProject} 
          onUpdateProject={handleUpdateProject} 
        />

        {/* Arama ve Liste Başlığı */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-lg font-bold text-slate-800">Proje Listesi & Takibi</h2>
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Proje ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Proje Kartları Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
            <p className="text-slate-400 text-sm">Aradığınız kriterlere uygun proje bulunamadı.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onDelete={handleDeleteProject}
                onEdit={setEditingProject}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        )}

      </main>
    </div>
  );
=======
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProjectForm from '../components/ProjectForm';
import ProjectCard from '../components/ProjectCard';
import { FolderKanban, Search } from 'lucide-react';

export default function Dashboard() {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('milenyum_projects');
    if (saved) {
      return JSON.parse(saved);
    }
    return [
      { id: 1, title: 'Otomatik Hat Konveyör PLC Kodlaması', category: 'PLC Otomasyon', priority: 'Yüksek', status: 'Devam Ediyor', date: '15.10.2026' },
      { id: 2, title: 'MİLENYUM AURA Web Paneli API Entegrasyonu', category: 'Yazılım Entegrasyonu', priority: 'Orta', status: 'Planlanıyor', date: '15.10.2026' }
    ];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    localStorage.setItem('milenyum_projects', JSON.stringify(projects));
  }, [projects]);

  const handleAddProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  const handleUpdateProject = (updated) => {
    setProjects(projects.map(p => p.id === updated.id ? updated : p));
    setEditingProject(null);
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setProjects(projects.map(p => p.id === id ? { ...p, status: newStatus } : p));
  };

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* İstatistik Özet Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">TOPLAM PROJE</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{projects.length}</h3>
            </div>
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><FolderKanban className="w-6 h-6" /></div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">DEVAM EDEN</p>
              <h3 className="text-2xl font-bold text-amber-600 mt-1">{projects.filter(p => p.status === 'Devam Ediyor').length}</h3>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><FolderKanban className="w-6 h-6" /></div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400">TAMAMLANAN</p>
              <h3 className="text-2xl font-bold text-emerald-600 mt-1">{projects.filter(p => p.status === 'Tamamlandı').length}</h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><FolderKanban className="w-6 h-6" /></div>
          </div>
        </div>

        {/* Ekleme / Düzenleme Formu */}
        <ProjectForm 
          onAddProject={handleAddProject} 
          editingProject={editingProject} 
          onUpdateProject={handleUpdateProject} 
        />

        {/* Arama ve Liste Başlığı */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-lg font-bold text-slate-800">Proje Listesi & Takibi</h2>
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Proje ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Proje Kartları Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
            <p className="text-slate-400 text-sm">Aradığınız kriterlere uygun proje bulunamadı.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onDelete={handleDeleteProject}
                onEdit={setEditingProject}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        )}

      </main>
    </div>
  );
>>>>>>> 4f18e74658cb3e92fcdc1822d57525650e9d3a7f
}