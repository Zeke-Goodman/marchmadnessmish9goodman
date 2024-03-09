import React from 'react';

interface TeamCardProps {
  schoolName: string;
  mascotName: string;
  location: string;
}

function TeamCard({ schoolName, mascotName, location }: TeamCardProps) {
  return (
    <div className="team-card">
      <div className="team-info">
        <h2>{schoolName}</h2>
        <p>Mascot: {mascotName}</p>
        <p>Location: {location}</p>
      </div>
    </div>
  );
}

export default TeamCard;
