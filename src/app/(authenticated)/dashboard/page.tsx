import { auth } from "@/auth";

export default async function Dashboard() {
  const session = await auth();
  const user = session?.user;

  const roles = user?.roles ?? [];
  const permissions = user?.permissions ?? [];

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Dashboard</h1>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Welcome, {user?.name ?? "User"}</h2>
        <p style={{ color: "#555" }}>{user?.email}</p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>Roles</h3>
        {roles.length > 0 ? (
          <ul>
            {roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        ) : (
          <p>No roles assigned.</p>
        )}
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h3>Permissions</h3>
        {permissions.length > 0 ? (
          <ul>
            {permissions.map((perm) => (
              <li key={perm}>{perm}</li>
            ))}
          </ul>
        ) : (
          <p>No permissions assigned.</p>
        )}
      </section>
    </div>
  );
}