import React from 'react';
import './App.css';
import TeamCard from './TeamCard';
import teamData from './CollegeBasketballTeams.json'; // Import JSON data

function Header() {
  return (
    <div>
      <header className="App-header">
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

function TeamList() {
  return (
    <div className="team-list">
      <div className="team-grid">
        {teamData.teams.map((team, index) => (
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

function App() {
  return (
    <div className="App">
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
