"use client";
import InputBox from "@/components/InputBox";
import ShapeButton from "@/components/ShapeButton";
import { trackContactFormSubmit } from "@/lib/gtm";
import { contactYupSchema } from "@/yup/contactYupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactYupSchema),
  });
  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message);
    console.log(data);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        reset();
        setLoading(false);
        toast.success("Email sent successfully");
        trackContactFormSubmit({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        });
        reset();
      } else {
        setLoading(false);
        const errorText = await response.text();
        toast.error(`Failed to send email: ${errorText}`);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="py-12 lg:py-20 bg-light">
      <div className="container md:!px-28 lg:!px-8 grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8899755754123!2d90.421937676023!3d23.751302588740497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b93b621c3675%3A0x8fa9a41022284755!2sTaltola%20Market!5e0!3m2!1sen!2sbd!4v1756882112689!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md min-h-[300px] md:min-h-[350px]"
          ></iframe>
        </div>
        <div>
          <div>
            <h5 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-orange font-inter">
              GET IN TOUCH
            </h5>
            <p className="mt-3 lg:mt-4 mb-8 lg:mb-10 font-medium sm:text-lg font-roboto text-darkSlate">
              Have a question or comment? To contact us, please complete the
              form below.
            </p>
          </div>
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputBox label="Full Name" error={errors?.name} {...register("name")} />
            <InputBox label="Email address" error={errors?.email} {...register("email")} />
            <InputBox label="Mobile Number" error={errors?.phone} {...register("phone")} />
            <InputBox label="Message" className="min-h-20" error={errors?.message} {...register("message")} />
            <ShapeButton
              name={loading ? "SENDING..." : "SEND MAIL"}
              className="text-orange group-hover:text-black hoverEffect"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
