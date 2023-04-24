import React from "react";

const ProjectCard = ({
    project,
    searchTerm,
    renderMatchedInfo,
    activeDescription,
    setShowCarousel,
    activeGalleryImages,
    setActiveGalleryImages,
}) => {
    const {
        name,
        image,
        tagline,
        description,
        year,
        technologies,
        repository,
        galleryImages,
        link,
        month,
        tags,
        id,
    } = project;
    return <div>{project.name}</div>;
};

export default ProjectCard;
