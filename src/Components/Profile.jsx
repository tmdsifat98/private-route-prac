import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const Profile = () => {
  const {user}=use(AuthContext)
  return (
    <div>
      {user.email}
    </div>
  );
};

export default Profile;