"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
export default function Users({ users, pagination }) {
  const router = useRouter();
  const isPrev = Number(pagination.page) === 1;
  const isNext = Number(pagination.page) === pagination.totalPages;
  const handleDelete = async (id) => {
    const userConfirmed = confirm("Are you sure you want to delete this item?");
    if (!userConfirmed) return;
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      toast.success("User deleted successfully!");
      router.refresh();
    } catch (error) {
      toast.error(error.message);
      console.error("There was a problem with the delete operation:", error);
    }
  };
  const handleRole = async (id, role) => {
    try {
      const formData = new FormData();
      formData.append("role", role);
      const response = await fetch(`/api/users/${id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.status === 400) {
        return toast.error("Maximum of 5 admin accounts allowed");
      }
      if (!response.ok) {
        return toast.error("Network response was not ok");
      }
      if (response.ok) {
        toast.success("Role updated successfully!");
        router.refresh();
      }
    } catch (error) {
      console.error("There was a problem with the update operation:", error);
      toast.error(error.message);
    }
  };
  return (
    <div className="max-w-262.5">
      <div className="bg-green/10 border border-green/30 min-h-[60vh] p-4 lg:p-8 rounded-lg shadow-md mt-8">
        {users.length === 0 && (
          <div className="w-fit mx-auto text-center">
            <Image
              src="/images/dashboard/empty.png"
              width={400}
              height={400}
              loading="eager"
              alt="empty"
            />
            <p className="text-gray-500 text-xl mt-8 font-inter">
              There is no user yet!
            </p>
          </div>
        )}
        {users.length > 0 && (
          <Table className="">
            <Thead>
              <Tr className="text-left border-b border-green/50 !py-4">
                <Th className="py-2">Name</Th>
                <Th className="py-2">Email</Th>
                <Th className="py-2">Role</Th>
                <Th className="py-2">Access</Th>
                <Th className="py-2">Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users?.map((user) => (
                <Tr key={user._id}>
                  <Td className="py-2">{user.name}</Td>
                  <Td className="py-2">{user.email}</Td>
                  <Td className="py-2">{user.role}</Td>
                  <Td className="py-2">
                    <select
                      onChange={(e) => handleRole(user._id, e.target.value)}
                      defaultValue={user.role}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </Td>
                  <Td className="py-2">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-red-500 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M10 5h4a2 2 0 1 0-4 0M8.5 5a3.5 3.5 0 1 1 7 0h5.75a.75.75 0 0 1 0 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0 1 15.026 22H8.974a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5zm2 4.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zM14.25 9a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75"
                        />
                      </svg>
                    </button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </div>
      <div className="flex justify-end mt-8 gap-2 items-center">
        <Link
          href={
            isPrev
              ? "/dashboard/users?page=1"
              : `/dashboard/users?page=${Number(pagination.page) - 1}`
          }
          className={`px-3 py-1 border rounded-md ${isPrev ? "cursor-not-allowed opacity-50 border-gray-200" : "hover:bg-gray-200"}`}
        >
          Prev
        </Link>
        {Array.from({ length: pagination.totalPages }, (_, i) => (
          <Link
            key={i}
            href={`/dashboard/users?page=${i + 1}`}
            className={`px-3 py-1 border rounded-md ${pagination.page.toString() === (i + 1).toString() ? "bg-orange  border-orange text-white" : "hover:bg-gray-200"}`}
          >
            {i + 1}
          </Link>
        ))}

        <Link
          href={
            isNext
              ? `/dashboard/users?page=${pagination.totalPages}`
              : `/dashboard/users?page=${Number(pagination.page) + 1}`
          }
          className={`px-3 py-1 border rounded-md ${isNext ? "cursor-not-allowed opacity-50 border-gray-200" : "hover:bg-gray-200"}`}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
