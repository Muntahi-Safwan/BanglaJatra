import { Table } from "flowbite-react";

const TableRow = ({ user }) => {
    const { email, photo_url } = user;
    return (
        <div>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="text-center font-semibold text-xl bg-[#6EE98E] m-4 text-slate-900">
                    {email}
                </Table.Cell>
                <Table.Cell>
                    <img
                        className="rounded-full w-10 h-10"
                        src={photo_url}
                    ></img>
                </Table.Cell>
            </Table.Row>
        </div>
    );
};

export default TableRow;
