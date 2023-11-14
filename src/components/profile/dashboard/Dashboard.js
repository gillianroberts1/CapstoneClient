import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../firebase/context/AuthContext';
import { Link } from 'react-router-dom';
import './css/Dashboard.css';

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUser) {
          const userId = currentUser.id;
          const response = await fetch(`/api/users/${userId}`);
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [currentUser]);

  return (
    <div className='dashboard-container'>
        <p className='dashboard-title'>Dashboard</p>
      <div className='dashboard-card'>
        {user ? (
          <>
            <div className='distance'>
              <p className='title'>Total distance walked</p>
              <p className='data'>{user.totalDistance} miles</p>
            </div>
            <div className='walkies'>
              <p className='title'>Total walkies attended</p>
              <p className='data'>{user.walkies ? user.walkies.length : 0}</p>
            </div>
            <div className='group-walkies'>
              <p className='title'>Total group walkies attended</p>
              <p className='data'>{user.groupWalkies ? user.groupWalkies.length : 0}</p>
            </div>
            <div className='favourites'>
              <p className='title'>Favourited members</p>
              {user.favourites && user.favourites.length > 0 ? (
                <ul>
                  {user.favourites.map((favoriteUser) => (
                    <li key={favoriteUser.id}><p className='data'>{favoriteUser.firstName}</p></li>
                  ))}
                </ul>
              ) : (
                <p>
                  <Link to='/members' className='data'>Add member</Link>
                </p>
              )}
            </div>
          </>
        ) : (
          <p className='data'>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;