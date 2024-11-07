import React, { useState } from 'react';
import './voting.css';

function App2() {
  const [votes, setVotes] = useState({
    BRS: 0,
    BJP: 0,
    CONGRESS: 0,
  });

  const handleVote = (candidate) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [candidate]: prevVotes[candidate] + 1,
    }));
  };

  const getWinner = () => {
    const candidates = Object.keys(votes);
    const maxVotes = Math.max(...Object.values(votes));
    const winner = candidates.find(candidate => votes[candidate] === maxVotes);

    const secondMaxVotes = Math.max(...Object.values(votes).filter(vote => vote !== maxVotes));
    const voteDifference = maxVotes - (secondMaxVotes >= 0 ? secondMaxVotes : 0);

    return { winner, voteDifference };
  };

  const { winner, voteDifference } = getWinner();

  const candidates = [
    { name: 'BRS', image: 'https://assets.thehansindia.com/h-upload/2024/06/26/1457452-brs.webp' },
    { name: 'BJP', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ItmwTVi66-9Bxx7s539DQtohEJKvIVpB5Q&s' },
    { name: 'CONGRESS', image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Indian_National_Congress_hand_logo.png' },
  ];

  return (
    <div className="App">
      <h3 align="right"> 5F1</h3>
      <h1>Voting Application</h1>
      <h2>Choose a candidate:</h2>
      <table>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Votes</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.name}>
              <td>{candidate.name}</td>
              <td>{votes[candidate.name]}</td>
              <td>
                <img src={candidate.image} alt={candidate.name} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>
                <button onClick={() => handleVote(candidate.name)}>Vote</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {winner && (
        <div>
          <h3>Current Leader: {winner}</h3>
          <p>Leading by: {voteDifference} vote{voteDifference > 1 ? 's' : ''}</p>
        </div>
      )}
    </div>
  );
}

export default App2;
