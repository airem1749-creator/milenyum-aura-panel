<<<<<<< HEAD
import React from 'react';
import { Layers, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg text-white">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              MİLENYUM AURA
            </span>
            <span className="text-xs block text-slate-400">Otomasyon & Proje Yönetim Paneli</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700 text-slate-300">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Aktif Sürüm v1.0</span>
        </div>
      </div>
    </nav>
  );
=======
import React from 'react';
import { Layers, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg text-white">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              MİLENYUM AURA
            </span>
            <span className="text-xs block text-slate-400">Otomasyon & Proje Yönetim Paneli</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700 text-slate-300">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Aktif Sürüm v1.0</span>
        </div>
      </div>
    </nav>
  );
>>>>>>> 4f18e74658cb3e92fcdc1822d57525650e9d3a7f
}