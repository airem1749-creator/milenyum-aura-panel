<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { PlusCircle, Edit3 } from 'lucide-react';

export default function ProjectForm({ onAddProject, editingProject, onUpdateProject }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('PLC Otomasyon');
  const [priority, setPriority] = useState('Orta');

  useEffect(() => {
    if (editingProject) {
      setTitle(editingProject.title);
      setCategory(editingProject.category);
      setPriority(editingProject.priority);
    }
  }, [editingProject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingProject) {
      onUpdateProject({
        ...editingProject,
        title,
        category,
        priority
      });
    } else {
      onAddProject({
        id: Date.now(),
        title,
        category,
        priority,
        status: 'Planlanıyor',
        date: new Date().toLocaleDateString('tr-TR')
      });
    }

    setTitle('');
    setCategory('PLC Otomasyon');
    setPriority('Orta');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
        {editingProject ? <Edit3 className="w-5 h-5 text-indigo-600" /> : <PlusCircle className="w-5 h-5 text-indigo-600" />}
        {editingProject ? 'Proje / Görev Düzenle' : 'Yeni Otomasyon Projesi Ekle'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">PROJE / GÖREV ADI</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Örn: Konveyör Bandı PLC Entegrasyonu"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">KATEGORİ</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
          >
            <option value="PLC Otomasyon">PLC Otomasyon</option>
            <option value="Yazılım Entegrasyonu">Yazılım Entegrasyonu</option>
            <option value="Konveyör Sistemleri">Konveyör Sistemleri</option>
            <option value="Ar-Ge Çalışması">Ar-Ge Çalışması</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">ÖNCELİK SEVİYESİ</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
          >
            <option value="Düşük">Düşük</option>
            <option value="Orta">Orta</option>
            <option value="Yüksek">Yüksek</option>
          </select>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-indigo-100 flex items-center gap-2"
        >
          {editingProject ? 'Güncellemeyi Kaydet' : 'Projeyi Listeye Ekle'}
        </button>
      </div>
    </form>
  );
=======
import React, { useState, useEffect } from 'react';
import { PlusCircle, Edit3 } from 'lucide-react';

export default function ProjectForm({ onAddProject, editingProject, onUpdateProject }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('PLC Otomasyon');
  const [priority, setPriority] = useState('Orta');

  useEffect(() => {
    if (editingProject) {
      setTitle(editingProject.title);
      setCategory(editingProject.category);
      setPriority(editingProject.priority);
    }
  }, [editingProject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingProject) {
      onUpdateProject({
        ...editingProject,
        title,
        category,
        priority
      });
    } else {
      onAddProject({
        id: Date.now(),
        title,
        category,
        priority,
        status: 'Planlanıyor',
        date: new Date().toLocaleDateString('tr-TR')
      });
    }

    setTitle('');
    setCategory('PLC Otomasyon');
    setPriority('Orta');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
      <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
        {editingProject ? <Edit3 className="w-5 h-5 text-indigo-600" /> : <PlusCircle className="w-5 h-5 text-indigo-600" />}
        {editingProject ? 'Proje / Görev Düzenle' : 'Yeni Otomasyon Projesi Ekle'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">PROJE / GÖREV ADI</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Örn: Konveyör Bandı PLC Entegrasyonu"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">KATEGORİ</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
          >
            <option value="PLC Otomasyon">PLC Otomasyon</option>
            <option value="Yazılım Entegrasyonu">Yazılım Entegrasyonu</option>
            <option value="Konveyör Sistemleri">Konveyör Sistemleri</option>
            <option value="Ar-Ge Çalışması">Ar-Ge Çalışması</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">ÖNCELİK SEVİYESİ</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
          >
            <option value="Düşük">Düşük</option>
            <option value="Orta">Orta</option>
            <option value="Yüksek">Yüksek</option>
          </select>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-indigo-100 flex items-center gap-2"
        >
          {editingProject ? 'Güncellemeyi Kaydet' : 'Projeyi Listeye Ekle'}
        </button>
      </div>
    </form>
  );
>>>>>>> 4f18e74658cb3e92fcdc1822d57525650e9d3a7f
}