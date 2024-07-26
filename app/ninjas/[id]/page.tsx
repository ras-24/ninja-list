import { notFound } from "next/navigation";

interface Ninja {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
  };
}

async function fetchNinja(id: string): Promise<Ninja | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store", // Ensure data is fresh
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function NinjaDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const ninja = await fetchNinja(id);

  if (!ninja) {
    notFound();
  }

  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>Email: {ninja.email}</p>
      <p>Phone: {ninja.phone}</p>
      <p>Website: {ninja.website}</p>
      <p>City: {ninja.address.city}</p>
    </div>
  );
}
