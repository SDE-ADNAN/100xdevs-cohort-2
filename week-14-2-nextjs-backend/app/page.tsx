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
  const response = await axios.get("http://localhost:3000/api/user")
  return response.data;
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
