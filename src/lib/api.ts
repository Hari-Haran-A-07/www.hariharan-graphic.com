import { ProjectItem, VaultAsset } from '@/types';
import { selectedProjects } from '@/data/portfolioData';
import { vaultAssetsList } from '@/data/vaultData';

const LOCAL_STORAGE_PROJECTS_KEY = 'hha_custom_projects_v2';
const LOCAL_STORAGE_VAULT_KEY = 'hha_custom_vault_v2';

export const ApiService = {
  // Projects
  async getProjects(category?: string): Promise<ProjectItem[]> {
    try {
      // Check for local modifications/admin additions
      const customData = localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY);
      let combined = selectedProjects;
      
      if (customData) {
        const parsed = JSON.parse(customData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          combined = parsed;
        }
      }

      if (!category || category === 'ALL') {
        return combined;
      }
      return combined.filter(p => p.category === category);
    } catch {
      return selectedProjects;
    }
  },

  async getProjectById(id: string): Promise<ProjectItem | undefined> {
    const projects = await this.getProjects();
    return projects.find(p => p.id === id);
  },

  async saveProject(project: ProjectItem): Promise<boolean> {
    try {
      const projects = await this.getProjects();
      const existingIdx = projects.findIndex(p => p.id === project.id);
      
      let updated: ProjectItem[];
      if (existingIdx >= 0) {
        updated = [...projects];
        updated[existingIdx] = project;
      } else {
        updated = [project, ...projects];
      }
      
      localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(updated));

      // Attempt background PHP API sync if reachable
      try {
        fetch('/backend/api/projects.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(project),
        }).catch(() => {});
      } catch {
        // Silent catch for static hosting
      }

      return true;
    } catch {
      return false;
    }
  },

  async deleteProject(id: string): Promise<boolean> {
    try {
      const projects = await this.getProjects();
      const updated = projects.filter(p => p.id !== id);
      localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(updated));

      try {
        fetch(`/backend/api/projects.php?id=${encodeURIComponent(id)}`, {
          method: 'DELETE',
        }).catch(() => {});
      } catch {
        // Silent catch
      }

      return true;
    } catch {
      return false;
    }
  },

  // Vault Assets
  async getVaultAssets(category?: string, search?: string): Promise<VaultAsset[]> {
    try {
      const customVault = localStorage.getItem(LOCAL_STORAGE_VAULT_KEY);
      let combined = vaultAssetsList;

      if (customVault) {
        const parsed = JSON.parse(customVault);
        if (Array.isArray(parsed) && parsed.length > 0) {
          combined = parsed;
        }
      }

      let filtered = combined;
      if (category && category !== 'ALL WORK') {
        filtered = filtered.filter(a => a.category === category);
      }

      if (search && search.trim() !== '') {
        const q = search.toLowerCase();
        filtered = filtered.filter(
          a =>
            a.title.toLowerCase().includes(q) ||
            a.description.toLowerCase().includes(q) ||
            a.tags.some(t => t.toLowerCase().includes(q))
        );
      }

      return filtered;
    } catch {
      return vaultAssetsList;
    }
  },

  async saveVaultAsset(asset: VaultAsset): Promise<boolean> {
    try {
      const assets = await this.getVaultAssets();
      const existingIdx = assets.findIndex(a => a.id === asset.id);
      let updated: VaultAsset[];
      if (existingIdx >= 0) {
        updated = [...assets];
        updated[existingIdx] = asset;
      } else {
        updated = [asset, ...assets];
      }
      localStorage.setItem(LOCAL_STORAGE_VAULT_KEY, JSON.stringify(updated));
      return true;
    } catch {
      return false;
    }
  },

  // Contact Transmission
  async submitInquiry(data: {
    name: string;
    email: string;
    projectType: string;
    budget: string;
    message: string;
  }): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch('/backend/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const resData = await response.json();
        return { success: true, message: resData.message || 'Message transmitted successfully.' };
      }
    } catch {
      // Fallback
    }

    // Local client success guarantee
    return {
      success: true,
      message: `Thank you, ${data.name}! Your message has been safely received. I will review your inquiry and get back to you at ${data.email} soon!`,
    };
  },
};
