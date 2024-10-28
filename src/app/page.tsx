// import { prisma } from "./lib/prisma";

// export default async function EmployeesPage() {
//   // Fetch employees from Prisma
//   const employees = await prisma.employees.findMany();

//   return (
//     <div>
//       <h1>Employees List</h1>
//       <ul>
//         {employees.map((employee) => (
//           <li key={employee.employee_id}>
//             {employee.first_name} {employee.last_name} - {employee.email}/hr
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// app/page.tsx
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">User Management</h1>
      <UserForm />
      <UserList />
    </main>
  );
}
