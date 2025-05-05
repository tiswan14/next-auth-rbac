import { getUsers } from "@/lib/data";

type User = {
    id: string;
    name: string | null;
    email: string | null;
    role: string;
};

const UserTable = async () => {
    const users: User[] | undefined = await getUsers();

    if (!users || users.length === 0) {
        return <h2 className="text-2xl text-center font-bold text-gray-900">User tidak ditemukan</h2>;
    }

    return (
        <table className="w-full bg-white mt-3">
            <thead className="border-b border-gray-100">
                <tr>
                    <th className="py-3 px-6 text-left text-sm">No</th>
                    <th className="py-3 px-6 text-left text-sm">Name</th>
                    <th className="py-3 px-6 text-left text-sm">Email</th>
                    <th className="py-3 px-6 text-left text-sm">Role</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={user.id}>
                        <td className="py-3 px-6">{index + 1}</td>
                        <td className="py-3 px-6">{user.name}</td>
                        <td className="py-3 px-6">{user.email}</td>
                        <td className="py-3 px-6">{user.role}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
