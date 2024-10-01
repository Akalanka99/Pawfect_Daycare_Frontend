import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('You need to log in first');
          return;
        }

        const response = await axios.get('http://localhost:8080/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        setError('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full lg:w-[505px] bg-white border-2 rounded-3xl items-center flex flex-col justify-center p-6 lg:p-8 my-12 lg:my-[100px]">
      <h3 className="text-center text-2xl lg:text-[31px] font-semibold">Profile</h3>
      <div className="pt-6">
        <p>Email: {user.email}</p>
        <p>Name: {user.name}</p>
      </div>
    </div>
  );
};

export default Profile;
