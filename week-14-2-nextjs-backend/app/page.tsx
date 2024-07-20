import axios from "axios";


interface Address {
  city: string;
  state: string;
  houseNumber: string;
}

interface User {
  name: string;
  email: string;
  address: Address;
}

async function getUserDetails() {
  await new Promise((r) => setTimeout(r, 5000))
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
  return response.data;
}

// async component
export default async function Home() {
  const userData: User = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {userData?.name}
          </div>
          {userData?.email}
        </div>
      </div>
    </div>
  );
}
