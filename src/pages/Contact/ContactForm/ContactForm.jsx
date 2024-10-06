import { useForm } from "react-hook-form";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Swal from "sweetalert2";

const ContactForm = () => {
    // Initialize useForm hook
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    // State for reCAPTCHA
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [loading, setLoading] = useState(false); // State for loading spinner

    // Handle CAPTCHA verification
    const onCaptchaChange = (value) => {
        setCaptchaVerified(!!value); // Enable/disable submit based on CAPTCHA verification
    };

    const onSubmit = async (data) => {
        if (captchaVerified) {
            setLoading(true); // Start loading
            try {
                // TODO: Add Server Url
                const res = await axios.post(
                    "https://fsdg-latest-v2.vercel.app/api/sendmail/want-to-join-email",
                    data,
                    {
                        headers: { "Content-Type": "application/json" },
                    }
                );
                Swal.fire("Success!", "Email sent successfully.", "success");
                reset();
            } catch (err) {
                Swal.fire("Error!", "Could not send email.", "error");
                console.error("Error sending email:", err);
            } finally {
                setLoading(false); // Stop loading
            }
        } else {
            Swal.fire("Error!", "Please complete the CAPTCHA verification.", "error");
        }
    };

    return (
        <div className="max-w-[500px] flex flex-col items-center justify-center h-screen mb-20 lg:mt-20">
            <h1 className="font-yeseva font-bold text-[28px] text-center uppercase mt-28">
                Want to have a meeting
            </h1>
            <h1 className="font-yeseva font-bold text-[28px] mb-10 text-center uppercase">
                Send a message
            </h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="font-lato text-sm w-[300px] xs:w-[400px] sm:w-[500px] md:w-[600px]"
            >
                {/* Full Name */}
                <div className="mb-4 w-full">
                    <label className="text-[#687279]" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Full Name is required" })}
                        className="w-full block border border-slate-500 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                {/* Country */}
                <div className="mb-4 w-full">
                    <label className="text-[#687279]" htmlFor="country">
                        Country
                    </label>
                    <input
                        type="text"
                        id="country"
                        {...register("country", { required: "Country is required" })}
                        className="w-full block border border-slate-500 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
                    />
                    {errors.country && (
                        <p className="text-red-500">{errors.country.message}</p>
                    )}
                </div>

                {/* Occupation */}
                <div className="mb-4 w-full">
                    <label className="text-[#687279]" htmlFor="occupation">
                        Occupation
                    </label>
                    <input
                        type="text"
                        id="occupation"
                        {...register("occupation", { required: "Occupation is required" })}
                        className="w-full block border border-slate-500 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
                    />
                    {errors.occupation && (
                        <p className="text-red-500">{errors.occupation.message}</p>
                    )}
                </div>

                {/* Email */}
                <div className="mb-4 w-full">
                    <label className="text-[#687279]" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        })}
                        className="w-full block border border-slate-500 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
                    />
                    {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                    )}
                </div>

                {/* Contact Number */}
                <div className="mb-4 w-full">
                    <label className="text-[#687279]" htmlFor="contact">
                        Contact Number
                    </label>
                    <input
                        type="text"
                        id="contact"
                        {...register("contact", {
                            required: "Contact number is required",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Only numeric values are allowed",
                            },
                        })}
                        className="w-full block border border-slate-500 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
                    />
                    {errors.contact && (
                        <p className="text-red-500">{errors.contact.message}</p>
                    )}
                </div>

                {/* reCAPTCHA */}
                <div className="mb-4 w-full flex justify-center">
                    <ReCAPTCHA
                        sitekey="6LfmdFIqAAAAANBVvLSt6TxI8FD4Dm3_o48zsHnB" // Replace with your actual site key from Google reCAPTCHA
                        onChange={onCaptchaChange}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`font-montserrat flex gap-2 items-center justify-center text-xl w-full h-[50px] p-2 mt-5 mb-16
            ${captchaVerified
                            ? "bg-[#FFCD05]"
                            : "bg-gray-400 cursor-not-allowed"
                        }`}
                    disabled={!captchaVerified || loading} // Disable the button if CAPTCHA is not verified or email is being sent
                >
                    {loading ? "Sending..." : "Submit"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
