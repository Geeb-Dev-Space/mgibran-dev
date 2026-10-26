"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ChangeEvent } from "react";

// Types
interface FormData {
  name: string;
  number: string;
  email: string;
  message: string;
}
interface SocialLink {
  title: string;
  href: string;
}
interface ContactInfo {
  label: string;
  link: string;
}
interface ContactData {
  socialLinks: SocialLink[];
  contactInfo: ContactInfo[];
}
interface PageDataResponse {
  contactLinks?: ContactData;
}
interface FormSubmitResponse {
  success: string | boolean;
  message?: string;
}

const initialFormData: FormData = {
  name: "",
  number: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState<FormData>(initialFormData);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data", {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error("Failed to fetch contact data");
        }

        const data: PageDataResponse = await res.json();

        setContactData(data.contactLinks ?? null);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        console.error("Error fetching contact data:", error);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  const reset = () => {
    setFormData({ ...initialFormData });
  };

  const handleSubmit = async (
    e: Parameters<NonNullable<React.ComponentProps<"form">["onSubmit"]>>[0],
  ) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitted(false);
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/geebdev.space@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const data: FormSubmitResponse = await response.json();

      if (data.success === true || data.success === "true") {
        setSubmitted(true);
        reset();
      } else {
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Contact Me</h2>
            <p className="text-xl text-primary">( 05 )</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-7 sm:gap-12">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <Label htmlFor="name" className="label">
                      Name *
                    </Label>
                    <Input
                      required
                      className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="number" className="label">
                      Phone *
                    </Label>
                    <Input
                      required
                      className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                      id="number"
                      type="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="label">
                    Email *
                  </Label>
                  <Input
                    required
                    className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="label">
                    Message *
                  </Label>
                  <Textarea
                    required
                    className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>
                {submitted && (
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/images/icon/success-icon.svg"}
                      alt="success-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-muted-foreground">
                      Great!!! Email has been Successfully Sent. We will get in
                      touch asap.
                    </p>
                  </div>
                )}
                {errorMessage && (
                  <p className="text-destructive" role="alert">
                    {errorMessage}
                  </p>
                )}
                <Button
                  variant="outline"
                  type="submit"
                  className="relative overflow-hidden cursor-pointer w-fit h-full py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                >
                  <span className="relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-300">
                    Send Now
                  </span>
                </Button>
              </div>
            </form>
            <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end">
              <div className="flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6">
                {contactData?.socialLinks?.map((value, index) => (
                  <div key={index}>
                    <Link
                      href={value.href}
                      className="text-base sm:text-lg font-normal text-muted-foreground hover:text-primary"
                    >
                      {value.title}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-5 lg:gap-11 items-end">
                {contactData?.contactInfo?.map((value, index) => (
                  <div key={index}>
                    <Link
                      href={value.link}
                      className="text-base lg:text-lg text-black font-normal border-b border-black pb-3 hover:text-primary hover:border-primary"
                    >
                      {value.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
