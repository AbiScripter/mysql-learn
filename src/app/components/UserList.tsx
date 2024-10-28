// app/components/UserList.tsx
import { prisma } from "../lib/prisma";

export default async function UserList() {
  const users = await prisma.user.findMany();

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-2 border rounded">
            {user.name} (ID: {user.id})
          </li>
        ))}
      </ul>
    </div>
  );
}
