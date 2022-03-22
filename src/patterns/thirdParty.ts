
export interface Project {
    id: string;
    title: string;
};

export interface ThirdPartyLib {
    getAllProjects: () => Promise<Project[]>
    getProject: (id: string) => Promise<Project>;
}

export class ThirdPartyClass implements ThirdPartyLib {

    async getAllProjects(): Promise<Project[]> {
        const url = "https://api-eu-central-1.graphcms.com/v2/cknj18lbkgo6301xn2k0bbgrt/master?operationName=MyQuery&query=query%20MyQuery%20%7B%0A%20%20projects%20%7B%0A%20%20%20%20id%0A%20%20%20%20description%0A%20%20%20%20title%0A%20%20%7D%0A%7D%0A";

        const response = await fetch(url);
        const json = await response.json();
        return json.data.projects;
    }

    async getProject(id: string): Promise<Project> {
        const url = `https://api-eu-central-1.graphcms.com/v2/cknj18lbkgo6301xn2k0bbgrt/master?operationName=MyQuery&query=query%20MyQuery%20%7B%0A%20%20project(where%3A%20%7Bid%3A%20%22${id}%22%7D)%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20description%0A%20%20%7D%0A%7D%0A`;
        const response = await fetch(url);
        const json = await response.json();
        return json.data.project;
    }
}