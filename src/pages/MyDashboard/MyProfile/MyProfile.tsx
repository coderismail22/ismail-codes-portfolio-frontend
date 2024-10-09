import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

const MyProfile = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // TODO: Add Server Url
        const response = await fetch(
          "https://fsdg-latest-v2.vercel.app/api/admin/auth-check",
          {
            method: "GET",
            credentials: "include",
          }
        );

        console.log("authres", response);

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const onSubmit = async (data) => {
    if (data.newPassword !== data.confirmPassword) {
      return Swal.fire("Error", "Passwords do not match", "error");
    }

    try {
      // Fetch request
      // TODO: Add Server Url
      const response = await fetch(
        "https://fsdg-latest-v2.vercel.app/api/admin/change-password",
        {
          method: "POST",
          credentials: "include", // Ensure cookies are included
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
          }),
        }
      );

      if (response.ok) {
        Swal.fire("Success", "Password changed successfully", "success");
        reset(); // Reset form after success
      } else {
        Swal.fire("Error", "Password change failed", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Password change failed", "error");
    }
  };

  // Loading Spinner
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <RotatingLines
          visible={true}
          height="46"
          width="46"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    );
  }

  //   if (!isAuthenticated) {
  //     return <Navigate to="/login" />;
  //   }

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5 overflow-hidden">
      <h1 className="sm:text-2xl md:text-4xl lg:text-5xl uppercase text-blue-500">
        Welcome
      </h1>
      <h1 className="sm:text-3xl md:text-5xl lg:text-6xl uppercase font-bold">
        To Dashboard
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          type="password"
          placeholder="Old Password"
          {...register("oldPassword", { required: "Old Password is required" })}
          className={`px-4 py-2 border ${
            errors.oldPassword ? "border-red-500" : "border-gray-300"
          } rounded-md`}
        />
        {errors.oldPassword && (
          <span className="text-red-500">{errors.oldPassword.message}</span>
        )}

        <input
          type="password"
          placeholder="New Password"
          {...register("newPassword", { required: "New Password is required" })}
          className={`px-4 py-2 border ${
            errors.newPassword ? "border-red-500" : "border-gray-300"
          } rounded-md`}
        />
        {errors.newPassword && (
          <span className="text-red-500">{errors.newPassword.message}</span>
        )}

        <input
          type="password"
          placeholder="Confirm New Password"
          {...register("confirmPassword", {
            required: "Please confirm your new password",
          })}
          className={`px-4 py-2 border ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          } rounded-md`}
        />
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}

        <button
          type="submit"
          className="px-5 py-2 bg-blue-500 text-white rounded-md uppercase font-bold"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
