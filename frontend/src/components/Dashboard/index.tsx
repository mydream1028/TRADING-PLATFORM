import { Link } from "react-router-dom";

import { IUser } from "../../types";

interface DashboardComponentProps {
  users: IUser[];
}
export const DashboardComponent: React.FC<DashboardComponentProps> = ({users}) => {
  return (
    <div className=" bg-white h-full rounded-lg px-10 py-5">
      <table className="table w-full text-center">
        <thead className="bg-gray-700 text-white text-2xl">
          <tr>
            <th className="p-5 rounded-tl-lg">No</th>
            <th className="p-5">Name</th>
            <th className="p-5">Token</th>
            <th className="p-5 rounded-tr-lg">Detail</th>
          </tr>
        </thead>
        <tbody className="text-xl">
          {users.map((item, index) => (
            <tr className="border-b bg-gray-100 border-white" key={index}>
              <td className="p-5">{index + 1}</td>
              <td className="p-5">{item.name}</td>
              <td className="p-5">{item.token}</td>
              <td className="p-5 text-blue-500"><Link to={`/user/${item._id}`}>Detail View</Link></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className="bg-gray-700 p-5 rounded-b-lg"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
