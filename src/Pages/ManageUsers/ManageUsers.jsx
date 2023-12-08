import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const ManageUsers = () => {
    const [users, setusers] = useState([]);
    const url = `https://bangla-jatra-server.vercel.app/users`;
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setusers(data));
    }, []);
    return (
        <div className="my-12">
            <div>
                <h1 className="text-3xl font-bold text-center my-12">
                    Manage Users
                </h1>
            </div>
            <div className="">
                <Table striped>
                    <Table.Head>
                        <Table.HeadCell>User email</Table.HeadCell>
                        <Table.HeadCell>User Image</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {users?.map((user) => (
                            <TableRow key={user._id} user={user}></TableRow>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default ManageUsers;
