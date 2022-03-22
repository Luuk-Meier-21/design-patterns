import { Project, ThirdPartyClass, ThirdPartyLib } from "./thirdParty";


export class ProjectsProxy implements ThirdPartyLib {
    service = new ThirdPartyClass();
    projects: any = [];

    async getAllProjects(): Promise<Project[]> {
        const data = await this.service.getAllProjects();
        this.projects = data;
        return this.projects;
    }

    async getProject(id: string) {
      // Check if a project is saved on the given id:
      const data = this.projects.filter((a: Project) => a.id == id)[0];

      if (data) {
        return data                                // Return saved response.
      } else {
        return await this.service.getProject(id)   // No response found for id, fetch for id.
      }
    }
}

const proxy = new ProjectsProxy();

(async () => {
  proxy.getAllProjects().then(projects => {
    // All projects are saved.
  
    proxy.getProject("cl0glcw24guwf0cxr5tkp9rql").then(project => {
      // getProject returns a saved response.
    })
  })
  
  proxy.getProject("cl0glcw24guwf0cxr5tkp9rql").then(a => {
      // Projects is not saved.
      // getProject returns a new fetched response.
  })
})
