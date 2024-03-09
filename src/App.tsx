import React from 'react';
import './App.css';
import teamData from './CollegeBasketballTeams.json'; // Import JSON data

// Header function to render the header section
function Header() {
  return (
    <div>
      <header className="App-header">
        {/* Header card containing the title and description */}
        <div className="header-card">
          <h1 className="underline">March Madness College Basketball Teams</h1>{' '}
          {/* Heading section */}
          <p>
            This site lists all the current teams to compete in March Madness
          </p>
        </div>
      </header>
    </div>
  );
}

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
// TeamList function to render the list of teams
function TeamList() {
  return (
    <div className="team-list">
      {/* Grid layout for displaying teams */}
      <div className="team-grid">
        {/* Map through the teamData and render TeamCard for each team */}
        {teamData.teams.map((team, index) => (
          // call function from TeamCard.tsx
          <TeamCard
            key={index}
            schoolName={team.school}
            mascotName={team.name}
            location={`${team.city}, ${team.state}`} // Location (City, State)
          />
        ))}
      </div>
    </div>
  );
}

// App component to render the entire application
function App() {
  return (
    <div className="App">
      {/* Render Header component */}
      <Header />
      {/* Render TeamList component */}
      <TeamList />
    </div>
  );
}

export default App;
