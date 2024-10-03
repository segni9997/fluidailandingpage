import React from 'react';

// Define the type for the component's props
interface ProfileWithFacebookIconProps {
  profileImageUrl?: string;  // Optional string for a single profile image
  multipleImages?: string[];
  sites?:any
  
}

const ProfileWithFacebookIcon: React.FC<ProfileWithFacebookIconProps> = ({ profileImageUrl, multipleImages ,sites}) => {
  return (
    <div className="relative inline-block">
      {/* Profile Image */}
      <div className="w-16 h-16 rounded-full overflow-hidden">
        {multipleImages && multipleImages.length > 0 ? (
          <div className="grid grid-cols-2 gap-0 w-full h-full">
            {multipleImages.map((image, index) => (
            <>
              <img key={index} src={image} alt={`Profile ${index}`} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
              {sites}
            </div>
            </>
            ))}
          </div>
        ) : (
          profileImageUrl && (
          <>
            <img src={profileImageUrl} alt="Profile" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
            {sites}
          </div>
          </>
          )
        )}
      </div>

      {/* Facebook Icon */}
     
    </div>
  );
};

export default ProfileWithFacebookIcon;
