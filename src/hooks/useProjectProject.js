// src/hooks/useProjectProject.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projectsData'; // Vérifie bien ce chemin !

export const useProjectData = () => {
  const { slug } = useParams(); // Récupère "maison-aurora"
  const [project, setProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);

  useEffect(() => {
    // Le console.log ici te dira si le hook se lance bien
    console.log("Hook lancé avec slug:", slug); 
    console.log("Data disponible:", projectsData);

    const found = projectsData.find((p) => p.slug === slug);
    setProject(found);
    
    // ... logique nextProject ...
  }, [slug]);

  return { project, nextProject };
};