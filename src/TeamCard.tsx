import React from 'react';

// Define props interface for TeamCard component
interface TeamCardProps {
  schoolName: string; // School name prop
  mascotName: string; // Mascot name prop
  location: string; // Location prop
}

// TeamCard component to render information about a basketball team
function TeamCard({ schoolName, mascotName, location }: TeamCardProps) {
  return (
    <div className="team-card">
      {/* Container for team information */}
      <div className="team-info">
        {/* Heading with school name */}
        <h2>{schoolName}</h2>
        {/* Paragraph showing mascot name */}
        <p>Mascot: {mascotName}</p>
        {/* Paragraph showing location */}
        <p>Location: {location}</p>
      </div>
    </div>
  );
}

export default TeamCard;
