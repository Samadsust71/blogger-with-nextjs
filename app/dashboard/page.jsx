import { getKindeServerSession, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
const ProfilePage = async () => {
  const { getUser } = getKindeServerSession();
  const {isAuthenticated} = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const user = await getUser();
  return <div className="flex flex-col items-center justify-center h-screen ">
    <h1 className="text-4xl font-bold text-center">Hey {user?.given_name || ""} Welcome to your profile!</h1>
  </div>;
};

export default ProfilePage;
