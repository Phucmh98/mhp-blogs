import { Project } from '@/app/(admin)/dashboard/projects/components/data-table-project'
import { create } from 'zustand'

type ProjectState = {
    projects :Project[],
    setProjects: (projects: Project[]) => void;

}

export const useProjectStore = create<ProjectState>((set) => ({
    projects: [],
    setProjects: (projects) => {
        set({ projects})
        
    }

}))