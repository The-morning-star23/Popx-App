import { BsFillCameraFill } from "react-icons/bs";

const AccountSettingsPage = () => {
  const profileImageUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop";

  return (
    <div className="bg-white h-full p-6">
      <h1 className="text-2xl font-bold">Account Settings</h1>
      
      <div className="flex items-center space-x-4 mt-6">
        <div className="relative">
          <img 
            src={profileImageUrl}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-primary-purple p-2 rounded-full cursor-pointer">
             {/* USE the new icon component and style it */}
            <BsFillCameraFill className="text-white text-base" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Marry Doe</h2>
          <p className="text-gray-500">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="mt-6 text-gray-600">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <hr className="border-t border-dashed border-gray-300 my-8" />
    </div>
  );
};

export default AccountSettingsPage;