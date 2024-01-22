import React from 'react';
import profileImage from '../../assets/profile.jpeg';

function ProfileImage() {
  return (
    <div>
      <img src={profileImage} alt='ProfileImage' style={{ borderRadius: '50%', width: '256px', height: '256px', borderColor: '#435C5C', border: '5px solid #435C5C' }} />
    </div>
  );
}

export default ProfileImage