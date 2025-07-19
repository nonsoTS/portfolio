"use client";
import { useState } from "react";
// import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import {
//   Drawer,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FaPaperPlane } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import * as emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactModal = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  // const isDesktop = useMediaQuery("(min-width: 768px)");

  // if (isDesktop) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="cursor-pointer">
        {children}
      </DialogTrigger>
      <DialogContent className="bg-neutral-900 text-secondary">
        <DialogHeader>
          <DialogTitle>
            <p className="text-center text-3xl lg:text-5xl font-semibold font_bold">
              Let’s Connect
            </p>
          </DialogTitle>
          <DialogDescription className="text-xs lg:text-base text-center">
            Whether you have a question, need help with your project, or just
            want to explore how we can work together, I’d love to hear from you
          </DialogDescription>
        </DialogHeader>
        <ProfileForm />
      </DialogContent>
    </Dialog>
  );
  // }

  // return (
  //   <Drawer open={open} onOpenChange={setOpen}>
  //     <DrawerTrigger asChild>{children}</DrawerTrigger>
  //     <DrawerContent className="bg-neutral-900 text-secondary">
  //       <DrawerHeader className="text-left">
  //         <DrawerTitle>
  //           <p className="text-3xl font-semibold font_bold">Let’s Connect</p>
  //         </DrawerTitle>
  //         <DrawerDescription className="text-xs">
  //           Whether you have a question, need help with your project, or just
  //           want to explore how we can work together, I’d love to hear from you.
  //         </DrawerDescription>
  //       </DrawerHeader>
  //       <ProfileForm className="px-4" />
  //       <DrawerFooter className="pt-2"></DrawerFooter>
  //     </DrawerContent>
  //   </Drawer>
  // );
};

const ProfileForm = ({ className }: any) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      // subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      // subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      setLoading(true);

      emailjs.init({
        publicKey: "mPM-qv86-HSVuD_iy",
        blockHeadless: true,
        limitRate: {
          id: "app",
          throttle: 10000,
        },
      });

      emailjs.send("service_jr83xpf", "template_uxzv0nu", values).then(
        (response: any) => {
          toast.success("Success!!", {
            description: "Your message has been sent. " + response?.text,
            position: "top-right",
          });
          resetForm();
          setLoading(false);
        },
        // @typescript-eslint/no-explicit-any
        (error: any) => {
          toast.error("Uh oh! Something went wrong.", {
            description:
              "Please check your connection and try again!" + error?.text,
            position: "top-right",
          });
          setLoading(false);
        }
      );
    },
  });

  return (
    <div
      className={`grid grid-cols-1 grid-row-5 items-start justify-between gap-y-3 w-full text-black px-3 lg:px-10 mt-4 lg:mt-8 ${className}`}
    >
      <div className="w-full flex flex-col md:flex-row gap-x-0 md:gap-x-5 gap-y-3 lg:gap-y-0 items-end md:items-start justify-between">
        <div className="flex flex-col items-start justify-between w-full lg:max-w-sm gap-y-2">
          <Label
            htmlFor="name"
            className="text-xs lg:text-sm font-semibold text-secondary"
          >
            Name *
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            className="w-full bg-neutral-600 border-white focus:border-[#D3E97A] focus-visible:ring-[#D3E97A] caret-[#D3E97A]"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />

          <p className="text-red-800 text-xs">
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : " "}
          </p>
        </div>

        <div className="flex flex-col items-start justify-between w-full lg:max-w-sm gap-y-2">
          <Label
            htmlFor="email"
            className="text-xs lg:text-sm font-semibold text-secondary"
          >
            Email address *
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            className="bg-neutral-600 border-white focus:border-[#D3E97A] focus-visible:ring-[#D3E97A] caret-[#D3E97A]"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          <p className="text-red-800 text-xs">
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null}
          </p>
        </div>
      </div>

      {/* <div className="flex flex-col items-start justify-between w-full gap-y-2">
        <Label
          htmlFor="subject"
          className="text-xs lg:text-sm font-semibold text-secondary"
        >
          Subject *
        </Label>

        <Input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject of message"
          className="w-full bg-neutral-600 border-white focus:border-[#D3E97A] focus-visible:ring-[#D3E97A] caret-[#D3E97A]"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
        />

        {formik.touched.subject && formik.errors.subject ? (
          <div className="text-red-800 text-xs">{formik.errors.subject}</div>
        ) : null}
      </div> */}

      <div className="flex flex-col items-start justify-between w-full gap-y-2 mt-2 lg:mt-0">
        <Label
          htmlFor="message"
          className="text-xs lg:text-sm font-semibold text-secondary"
        >
          How can I help you?
        </Label>
        <Textarea
          placeholder="Type your message here."
          id="message"
          name="message"
          className="bg-neutral-600 w-full border-white focus:border-[#D3E97A] focus-visible:ring-[#D3E97A] caret-[#D3E97A]"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />

        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-800 text-xs">{formik.errors.message}</div>
        ) : null}
      </div>

      <div className="text-center mt-2">
        <i className="font-semibold text-secondary text-sm">
          Fields marked with an asterisk (*) are required!
        </i>
      </div>

      <div className="w-full flex flex-row items-center justify-center">
        <button
          className="relative flex flex-row items-center justify-center gap-x-3 bg-transparent text-[#D3E97A] rounded-full px-10 py-1.5 lg:py-3 w-fit min-w-72 h-fit min-h-8 lg:min-h-14 font_regular font-semibold text-lg border-2 border-[#D3E97A] hover:text-black hover:bg-[#D3E97A] hover:border-[#D3E97A] hover:gap-x-5 duration-300 cursor-pointer"
          type="submit"
          onClick={() => formik.handleSubmit()}
          disabled={loading}
        >
          {loading ? (
            /* From Uiverse.io by ashish-yadv */
            <div className="loader">
              <li className="ball"></li>
              <li className="ball"></li>
              <li className="ball"></li>
            </div>
          ) : (
            <>
              Send message
              <FaPaperPlane className="" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
