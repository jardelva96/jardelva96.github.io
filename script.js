document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: "FaceGeek",
            description: "A social network for nerds, built with HTML, CSS, and JavaScript. It connects developers and tech enthusiasts through interactive feeds and groups.",
            image: "https://via.placeholder.com/350x200",
            github: "https://github.com/jardelva96/facegeek",
            liveDemo: "https://jardelva96.github.io/facegeek"
        },
        {
            title: "DevConnect",
            description: "A platform for developers to share and discuss code snippets. Built with React and Node.js.",
            image: "https://via.placeholder.com/350x200",
            github: "https://github.com/jardelva96/devconnect",
            liveDemo: "https://jardelva96.github.io/devconnect"
        },
        {
            title: "Python Finance App",
            description: "A finance tracker built with Django and React, providing detailed analysis of personal finances.",
            image: "https://via.placeholder.com/350x200",
            github: "https://github.com/jardelva96/finance-app",
            liveDemo: "https://jardelva96.github.io/finance-app"
        }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.github}" target="_blank">View on GitHub</a>
            <a href="${project.liveDemo}" target="_blank">Live Demo</a>
        `;
        projectList.appendChild(projectCard);
    });
});
