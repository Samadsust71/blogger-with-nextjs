import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const ProfilePage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  
  return <div className="flex flex-col items-center justify-center h-screen ">
    <h1 className="text-4xl font-bold text-center">Hey {user?.given_name || ""} Welcome to your profile!</h1>
  </div>;
};

export default ProfilePage;
