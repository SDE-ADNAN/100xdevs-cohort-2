import client from '@/db';


interface Address {
  city: string;
  state: string;
  houseNumber: string;
}

type User = { name: string | undefined; email: string | undefined; } | undefined

// async function getUserDetails() {
//   const response = await axios.get("http://localhost:3000/api/user")
//   return response.data;
// }
async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
    return {
      name: user?.username,
      email: user?.username,
    };
  } catch (e) {
    console.log(e);
  }
}

// async component
export default async function Home() {
  const userData: User = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded text-white">
          <div>
            Name: {userData?.name}
          </div>
          Email  : {userData?.email}
        </div>
      </div>
    </div>
  );
}
