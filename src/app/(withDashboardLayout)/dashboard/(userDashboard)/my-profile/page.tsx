// "use client";

// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Avatar,
//   Button,
//   Input,
//   Divider,
// } from "@nextui-org/react";
// import { useState } from "react";

// const MyProfile = () => {
//   const [editMode, setEditMode] = useState(false);
//   const [profileData, setProfileData] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "+123 456 7890",
//     address: "123 Main Street, City, Country",
//   });

//   const handleEditToggle = () => {
//     setEditMode(!editMode);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setProfileData({
//       ...profileData,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="mt-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 flex flex-col items-center">
//       <Card className="w-full max-w-2xl shadow-xl">
//         <CardHeader className="flex justify-between items-center">
//           <div className="flex items-center gap-4">
//             <Avatar
//               size="lg"
//               src="https://i.pravatar.cc/300"
//               color="primary"
//               alt="Profile Picture"
//               className="border border-white shadow-lg"
//             />
//             <div className="flex flex-col">
//               <h2 className="text-xl font-bold">{profileData.name}</h2>
//               <p className="text-sm text-gray-500">{profileData.email}</p>
//             </div>
//           </div>
//           <Button color="primary" onClick={handleEditToggle}>
//             {editMode ? "Cancel" : "Edit Profile"}
//           </Button>
//         </CardHeader>
//         <Divider />
//         <CardBody>
//           <div className="space-y-4">
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Input
//                 label="Name"
//                 variant="bordered"
//                 name="name"
//                 value={profileData.name}
//                 disabled={!editMode}
//                 onChange={handleInputChange}
//                 className="w-full"
//               />
//               <Input
//                 label="Email"
//                 variant="bordered"
//                 name="email"
//                 value={profileData.email}
//                 disabled={!editMode}
//                 onChange={handleInputChange}
//                 className="w-full"
//               />
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Input
//                 label="Phone"
//                 variant="bordered"
//                 name="phone"
//                 value={profileData.phone}
//                 disabled={!editMode}
//                 onChange={handleInputChange}
//                 className="w-full"
//               />
//               <Input
//                 label="Address"
//                 variant="bordered"
//                 name="address"
//                 value={profileData.address}
//                 disabled={!editMode}
//                 onChange={handleInputChange}
//                 className="w-full"
//               />
//             </div>
//             {editMode && (
//               <div className="flex justify-end">
//                 <Button color="success" onClick={handleEditToggle}>
//                   Save Changes
//                 </Button>
//               </div>
//             )}
//           </div>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default MyProfile;


"use client"; // Make this component a client component
import { useAppSelector } from "@/redux/hooks";
import React from "react";

const MyProfile: React.FC = () => {
  // Get user data from Redux store
  const { user } = useAppSelector((state) => state.user); // Adjust based on your Redux state shape

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          My Profile
        </h1>
        <div className="space-y-4">
          {/* Profile Card */}
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">User Id</span>
            <span className="text-gray-600">{user?.userId}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Name:</span>
            <span className="text-gray-600">{user?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Email:</span>
            <span className="text-gray-600">{user?.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Role:</span>
            <span className="text-gray-600">{user?.role}</span>
          </div>
        </div>
        {/* <div className="mt-6">
          <button
            onClick={() => alert("Edit Profile feature coming soon!")}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Edit Profile
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default MyProfile;
