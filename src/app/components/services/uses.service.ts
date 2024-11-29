import { Injectable } from "@angular/core";
import { Uses } from "../model/uses.model";

@Injectable({
    providedIn: "root",
})

export class UsesService {
    private workstation: Uses[] = [
        {id: 1, name: 'DESKTOP-FIOLV8T', description: 'Equipped with an Intel Core i7, 16GB RAM, 512GB SSD + 1TB HDD, NVIDIA GTX 1660, and Windows 10 Pro. It includes a 500W PSU, USB 3.0 ports, HDMI, Ethernet, and audio connections.'},
        {id: 2, name: 'Tecno Pova 5 Pro 5G', description: 'Features a 6.78" FHD+ AMOLED display, MediaTek Dimensity 6080 chipset, 8GB RAM, 256GB storage, and 5000mAh battery with 68W fast charging. It has a 50MP rear camera and 16MP front camera, running Android 13 with HiOS 13.'},
        {id: 3, name: 'Xiaomi Pad 6', description: 'The Xiaomi Pad 6 has an 11-inch 2.8K display, powered by a Snapdragon 870, 6GB RAM, and 128GB storage. It supports a 13MP rear camera, 8MP front camera, and has a 8000mAh battery with 33W fast charging.'}
    ];

    private development: Uses[] = [
        {id: 1, name: 'Visual Studio Code', description: 'Visual Studio Code (VSCode) is a lightweight, open-source code editor developed by Microsoft, designed for building and debugging modern web and cloud applications. It supports a wide range of programming languages through extensions, offers features like IntelliSense (code completion), debugging, Git integration, and a built-in terminal. VSCode is highly customizable and is available on Windows, macOS, and Linux.'},
        {id: 2, name: 'Pycharm', description: 'PyCharm is an integrated development environment (IDE) developed by JetBrains, specifically for Python programming. It offers powerful features like intelligent code completion, project navigation, a built-in debugger, and testing tools. PyCharm supports web development frameworks like Django and Flask, provides version control integration, and includes tools for database management and virtual environments. Available in both free and paid versions, it runs on Windows, macOS, and Linux.'},
    ];

    private design: Uses[] = [
        {id: 1, name: 'Figma', description: 'Figma is a cloud-based design tool used for UI/UX design, prototyping, and collaboration. It allows teams to create, edit, and share designs in real time, making it ideal for collaborative workflows. Figma supports vector graphics, interactive prototypes, and has extensive plugin support. It works across platforms, including Windows, macOS, and web browsers.'},
        {id: 2, name: 'Spline', description: 'Spline is a 3D design tool that allows users to create, design, and collaborate on interactive 3D content directly in the browser. It offers an intuitive interface for modeling, animating, and rendering 3D objects and scenes, with real-time collaboration features. Spline is used for designing 3D websites, interactive applications, and prototypes, and it integrates seamlessly with other design and development tools.'},
    ];



    getWorkStation(): Uses[] {
        return this.workstation;
    }

    getDevelopment(): Uses[] {
        return this.development;
    }

    getDesign(): Uses[] {
        return this.design;
    }
    
}