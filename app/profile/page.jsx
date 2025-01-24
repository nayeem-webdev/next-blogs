"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Profile() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user);

  if (!user) {
    redirect("/");
  }

  const {
    id,
    email,
    family_name,
    given_name,
    picture,
    username,
    phone_number,
  } = user;

  async function handleUserUpdate() {
    try {
      console.log("User data is being updated");

      revalidatePath("/profile");

      redirect(`/profile`);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  }

  if (!user.family_name) {
    await handleUserUpdate(); 
  }

  return (
    <div className="container mx-auto px-5 pb-28">
      <div
        className="container mx-auto h-[30vh] rounded-lg border-2 border-purple-600 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/247899/pexels-photo-247899.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-5 text-center">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-4">
            Welcome To Your Profile
          </h2>
          <p className="max-w-lg mx-auto text-center text-white/70">
            Here you will find all we have... about you. Have a look at your
            details... Let us know if you want to change anything.
          </p>
        </div>
      </div>
      {user && (
        <div className="max-w-4xl mx-auto mt-20">
          <div className="profile-picture text-center mb-4">
            <img
              src={picture || "https://via.placeholder.com/96"}
              alt="Profile Picture"
              className="w-24 h-24 rounded-full mx-auto"
            />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">
            Name:{" "}
            {`${given_name || "Not provided"} ${family_name || ""}`.trim()}
          </h2>
          <p className="text-sm text-gray-400 text-center mb-4">ID: {id}</p>
          <div className=" text-center">
            <p className="text-base">
              <span className="font-semibold">Email:</span>{" "}
              {email || "Not provided"}
            </p>
            <p className="text-base">
              <span className="font-semibold">Username:</span>{" "}
              {username || "Not provided"}
            </p>
            <p className="text-base">
              <span className="font-semibold">Phone Number:</span>{" "}
              {phone_number || "Not provided"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
