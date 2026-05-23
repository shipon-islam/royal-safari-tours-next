"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function TourCardPage({ tourPackages, pagination }) {
  const router = useRouter();
  const isPrev = Number(pagination.page) === 1;
  const isNext = Number(pagination.page) === pagination.totalPages;
  //for deleting a blog
  const handleDelete = async (id) => {
    const userConfirmed = confirm("Are you sure you want to delete this item?");
    if (!userConfirmed) return;
    try {
      const res = await fetch(`/api/tour-package/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      router.refresh();
      toast.success("Tour package deleted successfully!");
    } catch (error) {
      console.error("There was a problem with the delete operation:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="md:w-4/5 mx-auto">
      <div className="flex justify-between mt-8">
        <h1 className="text-2xl font-bold">Tour Packages</h1>
        <Link
          className="bg-orange text-white px-4 py-2 rounded-xl"
          href="/dashboard/tour-packages/create"
        >
          {" "}
          Create new package
        </Link>
      </div>
      <div className="mt-20">
        {tourPackages.length === 0 && (
          <div className="w-fit mx-auto text-center">
            <Image
              src="/images/dashboard/empty.png"
              width={400}
              height={400}
              alt="empty"
            />
            <p className="text-gray-500 text-xl mt-8 font-inter">
              There is no tour package yet!
            </p>
          </div>
        )}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 ">
          {tourPackages?.map((pkg) => (
            <div key={pkg._id} className="shadow-md p-4 rounded-md ">
              <div className="flex justify-between items-center mb-2">
                <h5 className="font-semibold  py-1 capitalize">{pkg.title}</h5>
                <div className="flex gap-2 items-center">
                  <Link
                    href={`/dashboard/tour-packages/edit/${pkg.slug}`}
                    className="relative top-0.5"
                  >
                    <button className="cursor-pointer hover:text-blue-500 hover:border-blue-500">
                      <Icon
                        icon="fluent:edit-24-regular"
                        width="20"
                        height="20"
                      />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(pkg._id)}
                    className="cursor-pointer hover:text-red-500 hover:border-red-500"
                  >
                    <Icon
                      icon="mingcute:delete-2-line"
                      width="20"
                      height="20"
                    />
                  </button>
                </div>
              </div>
              <Link
                href={`/packages/${pkg.slug}`}
                className="text-sm text-gray-500 mb-2 block"
              >
                <Image
                  src={`/api/uploads/tour-packages/${pkg.image}`}
                  width={500}
                  height={200}
                  alt="tour package"
                  loading="eager"
                  className="rounded-md object-cover w-full h-50"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8 gap-2 items-center">
        <Link
          href={
            isPrev
              ? "/dashboard/tour-packages?page=1"
              : `/dashboard/tour-packages?page=${Number(pagination.page) - 1}`
          }
          className={`px-3 py-1 border rounded-md ${isPrev ? "cursor-not-allowed opacity-50 border-gray-200" : "hover:bg-gray-200"}`}
        >
          Prev
        </Link>
        {Array.from({ length: pagination.totalPages }, (_, i) => (
          <Link
            key={i}
            href={`/dashboard/tour-packages?page=${i + 1}`}
            className={`px-3 py-1 border rounded-md ${pagination.page === (i + 1).toString() ? "bg-orange  border-orange text-white" : "hover:bg-gray-200"}`}
          >
            {i + 1}
          </Link>
        ))}

        <Link
          href={
            isNext
              ? `/dashboard/tour-packages?page=${pagination.totalPages}`
              : `/dashboard/tour-packages?page=${Number(pagination.page) + 1}`
          }
          className={`px-3 py-1 border rounded-md ${isNext ? "cursor-not-allowed opacity-50 border-gray-200" : "hover:bg-gray-200"}`}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
