import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt, FaUser, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosPublic";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/users");
      return res.data;
    },
  });
  console.log(users);
  const handleMakeStaff = (user) => {
    axiosSecure.put(`/api/users/assign/${user.uid}`).then((res) => {
      alert(`${user.name} is now staff`);
      refetch();
    });
  };

  const handleDeleteUser = (user) => {
    axiosSecure.delete(`/api/users/${user.id}`).then((res) => {
      alert(`${user.name} is removed from database`);
      refetch();
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between m-4">
        <h5>All Users</h5>
        <h5>Total Users: {users.length}</h5>
      </div>

      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[870px]">
            {/* head */}
            <thead className="bg-blue1 text-white rounded-lg">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "USER" ? (
                      <button
                        onClick={() => handleMakeStaff(user)}
                        className="btn btn-xs btn-circle bg-blue1 text-white"
                      >
                        <FaUsers />
                      </button>
                    ) : (
                      user.role
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-xs bg-blue1 text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
