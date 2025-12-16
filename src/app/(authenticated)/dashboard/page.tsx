import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();
  console.log(session?.user);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
