import { auth } from "@/auth"
export const metadata = {
    title: "Dashboard",
}

const Dashboard = async () => {
    const session = await auth();

    return (

        <div className="max-w-screen-xl mx-auto py-6 p-4">
            <h1 className="text-2xl text-center font-bold text-gray-900">Dashboard</h1>
            <h2 className="text-xl text-center font-bold text-gray-900">Selamat Datang {session?.user?.name}</h2>
        </div>
    );
}

export default Dashboard;
