"use client";

import { useState, useEffect } from "react";
import { projects as initialProjects } from "../../../components/ProjectsCarousel";
import Link from "next/link";
import Image from "next/image";
import { Edit, Trash, Plus, Save, X } from "lucide-react";

// W rzeczywistej aplikacji dane byłyby przechowywane w bazie danych
// Na potrzeby demonstracji używamy lokalnego stanu

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditProject = (project: any) => {
    setEditingProject({...project});
    setIsModalOpen(true);
  };

  const handleDeleteProject = (id: number) => {
    if (confirm("Czy na pewno chcesz usunąć ten projekt?")) {
      setProjects(projects.filter(p => p.id !== id));
      // Tu byłby kod do zapisania zmian w bazie danych
    }
  };

  const handleSaveProject = () => {
    if (editingProject) {
      if (editingProject.id) {
        // Aktualizacja istniejącego projektu
        setProjects(projects.map(p => p.id === editingProject.id ? editingProject : p));
      } else {
        // Dodawanie nowego projektu
        const newId = Math.max(...projects.map(p => p.id)) + 1;
        setProjects([...projects, {...editingProject, id: newId}]);
      }
      // Tu byłby kod do zapisania zmian w bazie danych
      setIsModalOpen(false);
      setEditingProject(null);
    }
  };

  const handleNewProject = () => {
    setEditingProject({
      id: 0,  // Tymczasowe ID, zostanie zaktualizowane przy zapisie
      name: "",
      slug: "",
      image: "/placeholder.svg?height=600&width=400",
      description: "",
      fullDescription: "",
      technologies: [],
      features: [],
      client: "",
      year: new Date().getFullYear(),
      url: ""
    });
    setIsModalOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditingProject({...editingProject, [name]: value});
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLTextAreaElement>, field: string) => {
    const value = e.target.value.split('\n').filter(item => item.trim() !== '');
    setEditingProject({...editingProject, [field]: value});
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Panel Administratora - Projekty</h1>
          <div className="flex gap-4">
            <Link href="/admin" className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-white">
              Dashboard
            </Link>
            <Link href="/" className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-white">
              Powrót do strony głównej
            </Link>
          </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Lista projektów</h2>
            <button 
              onClick={handleNewProject}
              className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white"
            >
              <Plus className="w-4 h-4 mr-2" /> Dodaj nowy projekt
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-3 px-4">ID</th>
                  <th className="text-left py-3 px-4">Miniatura</th>
                  <th className="text-left py-3 px-4">Nazwa</th>
                  <th className="text-left py-3 px-4">Slug</th>
                  <th className="text-left py-3 px-4">Klient</th>
                  <th className="text-left py-3 px-4">Rok</th>
                  <th className="text-left py-3 px-4">Akcje</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(project => (
                  <tr key={project.id} className="border-b border-zinc-800 hover:bg-zinc-800">
                    <td className="py-3 px-4">{project.id}</td>
                    <td className="py-3 px-4">
                      <div className="relative w-16 h-16 rounded overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4">{project.name}</td>
                    <td className="py-3 px-4">{project.slug}</td>
                    <td className="py-3 px-4">{project.client}</td>
                    <td className="py-3 px-4">{project.year}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleEditProject(project)}
                          className="p-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
                          aria-label="Edytuj"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteProject(project.id)}
                          className="p-2 bg-red-600 hover:bg-red-700 rounded text-white"
                          aria-label="Usuń"
                        >
                          <Trash className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal edycji projektu */}
      {isModalOpen && editingProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {editingProject.id ? `Edycja: ${editingProject.name}` : 'Nowy projekt'}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-zinc-800 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <label className="block text-gray-400 mb-2">Nazwa projektu</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={editingProject.name} 
                    onChange={handleChange}
                    className="w-full p-3 bg-zinc-800 rounded border border-zinc-700 text-white"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-400 mb-2">Slug (URL)</label>
                  <input 
                    type="text" 
                    name="slug" 
                    value={editingProject.slug} 
                    onChange={handleChange}
                    className="w-full p-3 bg-zinc-800 rounded border border-zinc-700 text-white"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-400 mb-2">URL obrazu</label>
                  <input 
                    type="text" 
                    name="image" 
                    value={editingProject.image} 
                    onChange={handleChange}
                    className="w-full p-3 bg-zinc-800 rounded border border-zinc-700 text-white"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-400 mb-2">Krótki opis</label>
                  <input 
                    type="text" 
                    name="description" 
                    value={editingProject.description} 
                    onChange={handleChange}
                    className="w-full p-3 bg-zinc-800 rounded border border-zinc-700 text-white"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-400 mb-2">Klient</label>
                  <input 
                    type="text" 
                    name="client" 
                    value={editingProject.client} 
                    onChange={handleChange}
                    className="w-full p-3 bg-zinc-800 rounded border border-zinc-700 text-white"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-400 mb-2">Rok realizacji</label>
                  <input 
                    type="number" 
                    name="year" 
                    value={editingProject.year} 
                    onChange={handleChange}
                    className="w-full p-3 bg-zinc-800 rounded border border-zinc-700 text-white"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-400 mb-2">URL projektu</label>
                  <input 
                    type="text" 
                    name="url" 
                    value={editingProject.url} 
                    onChange={handleChange}
                    className="w-full p-3 bg-zinc-800 rounded border border-zinc-700 text-white"
                  />
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <label className="block text-gray-400 mb-2">Pełny opis</label>
                  <textarea 
                    name="fullDescription" 
                    value={editingProject.fullDescription} 
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 bg-zinc-800 rounded border border-zinc-700 text-white"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-400 mb-2">
                    Technologie (każda w nowej linii)
                  </label>
                  <textarea 
                    value={editingProject.technologies.join('\n')} 
                    onChange={(e) => handleArrayChange(e, 'technologies')}
                    rows={4}
                    className="w-full p-3 bg-zinc-800 rounded border border-zinc-700 text-white"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-400 mb-2">
                    Funkcjonalności (każda w nowej linii)
                  </label>
                  <textarea 
                    value={editingProject.features.join('\n')} 
                    onChange={(e) => handleArrayChange(e, 'features')}
                    rows={6}
                    className="w-full p-3 bg-zinc-800 rounded border border-zinc-700 text-white"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 mr-2 bg-zinc-800 hover:bg-zinc-700 rounded text-white"
              >
                Anuluj
              </button>
              <button 
                onClick={handleSaveProject}
                className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white"
              >
                <Save className="w-4 h-4 mr-2" /> Zapisz projekt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 