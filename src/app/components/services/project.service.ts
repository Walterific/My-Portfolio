import { Injectable } from "@angular/core";
import { Project } from "../model/project.model";

@Injectable({
    providedIn: "root",
})

export class ProjectService {
    private project: Project[] = [
        { id: 1, name: 'PESO', description: 'Job Portal for job hunters', link: 'peso.northcal.com', img: 'assets/img/project__img1.png'},
        { id: 2, name: 'PESO', description: 'Job Portal for job hunters', link: 'peso.northcal.com', img: 'assets/img/project__img1.png'},
        { id: 3, name: 'PESO', description: 'Job Portal for job hunters', link: 'peso.northcal.com', img: 'assets/img/project__img1.png'},
        { id: 4, name: 'PESO', description: 'Job Portal for job hunters', link: 'peso.northcal.com', img: 'assets/img/project__img1.png'},
        { id: 5, name: 'PESO', description: 'Job Portal for job hunters', link: 'peso.northcal.com', img: 'assets/img/project__img1.png'},
        { id: 6, name: 'PESO', description: 'Job Portal for job hunters', link: 'peso.northcal.com', img: 'assets/img/project__img1.png'},
        { id: 7, name: 'PESO', description: 'Job Portal for job hunters', link: 'peso.northcal.com', img: 'assets/img/project__img1.png'},
        { id: 8, name: 'PESO', description: 'Job Portal for job hunters', link: 'peso.northcal.com', img: 'assets/img/project__img1.png'},
    ];

    getProjects(): Project[] {
        return this.project;
    }
}

