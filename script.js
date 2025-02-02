"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Thème clair/sombre
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", function () {
    body.classList.toggle("light-theme");
    themeToggle.textContent = body.classList.contains("light-theme")
      ? "🌞"
      : "🌙";
  });

  // Navigation active au scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar ul li a");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

  // Gestion des projets et de la modal
  const projects = document.querySelectorAll(".portfolio-card");
  const modal = document.getElementById("project-modal");
  const closeModal = document.getElementById("close-modal");
  const projectTitle = document.getElementById("project-title");
  const projectDescription = document.getElementById("project-description");
  const mainImage = document.getElementById("main-image");
  const thumbnails = document.querySelector(".thumbnails");
  const projectTools = document.getElementById("project-tools");

  // Données des projets
  const projectData = [
    {
      title: "Vidéo cérémonie de remise des prix Edukki",
      description: " Dans le cadre du concours Edukki 2024, j’ai supervisé et participé à la réalisation de la vidéo officielle de la cérémonie de remise des prix, organisée à l’ONU. Ce projet, l’un des plus ambitieux que j’ai mené, m’a permis de travailler aux côtés des apprentis tout en gérant chaque étape clé : préparation, tournage et montage final. Ce projet m’a appris à coordonner une équipe sur un événement de grande envergure, à capturer des moments clés dans un environnement prestigieux, et à produire un rendu vidéo reflétant la qualité et le professionnalisme attendus pour une telle occasion. Cette expérience a également renforcé mes compétences en organisation, gestion de projet, et adaptation aux contraintes techniques et logistiques d’un tournage en direct",
      images: ["img/projet1.jpg", "img/projet1-2.jpg", "img/projet1-3.jpg"],
      tools: ["Premiere Pro", "After Effects", "Photoshop"]
    },
    {
      title: "Catalogue de boissons",
      description: "Un projet de design pour un catalogue réalisé avec InDesign et Illustrator.",
      images: [
        "img/catalogue-boissons.jpg",
        "img/catalogue-boissons2.jpg",
        "img/catalogue-boissons3.jpg"
      ],
      tools: ["InDesign", "Illustrator", "Photoshop"]
    },
      
       {
      title: "Dépliant de présentation MARSTRAINING",
      description: "Un projet vidéo comprenant retouche, color grading, et animation.",
      images: ["img/projet1.jpg", "img/projet1-2.jpg", "img/projet1-3.jpg"],
      tools: ["Premiere Pro", "After Effects", "Photoshop"]
    },
  ];

  // Affiche la modal lorsqu'un projet est cliqué
  projects.forEach((project, index) => {
    project.addEventListener("click", () => {
      const data = projectData[index];
      projectTitle.textContent = data.title;
      projectDescription.textContent = data.description;
      mainImage.src = data.images[0];
      thumbnails.innerHTML = data.images
        .map((img) => `<img src="${img}" alt="Thumbnail">`)
        .join("");
      projectTools.innerHTML = data.tools
        .map((tool) => `<li>${tool}</li>`)
        .join("");
      modal.style.display = "flex";

      // Change l'image principale au clic sur une miniature
      const thumbnailImages = document.querySelectorAll(".thumbnails img");
      thumbnailImages.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
          mainImage.src = thumbnail.src;
        });
      });
    });
  });

  // Ferme la modal au clic sur la croix
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Ferme la modal en cliquant en dehors
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
