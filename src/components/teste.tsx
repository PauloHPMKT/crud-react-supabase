// import { useEffect, useState } from "react";
// import supabase from "./api/createClient";

// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// interface NewUser {
//   nome: string;
//   email: string;
//   salary: number | undefined;
// }

// function App() {
//   const [users, setUsers] = useState<User[] | null>([]);
//   const [formData, setFormData] = useState<NewUser>({
//     nome: "",
//     email: "",
//     salary: undefined,
//   });

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     console.log(formData);
//   }

//   async function fetchUsers() {
//     const { data } = await supabase.from("crud-users").select("*");
//     setUsers(data);
//   }

//   return (
//     <>
//       <h1>Hello React</h1>
//       <ul>
//         {users?.map((user: User) => (
//           <li key={user.id}>
//             {user.name} - idade: {user.age}
//           </li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="nome"
//           placeholder="Nome"
//           value={formData.nome}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <input
//           type="number"
//           name="salary"
//           placeholder="Salario"
//           value={formData.salary}
//           onChange={handleChange}
//         />

//         <button type="submit">Cadastrar</button>
//       </form>
//     </>
//   );
// }

// export default App;
