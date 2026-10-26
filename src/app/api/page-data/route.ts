import { NextResponse } from "next/server";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "geebdev.space@gmail.com",
      icon: "/images/icon/svg/mail-icon.svg",
      link: "mailto:geebdev.space@gmail.com",
    },
    {
      type: "website",
      label: "www.geebdev.my.id",
      icon: "/images/icon/svg/web-icon.svg",
      link: "https://www.geebdev.my.id",
    },
  ],
  socialItems: [
    {
      platform: "instagram",
      icon: "/images/icon/instagram-icon.png",
      link: "https://www.instagram.com/mhd.gbrnrmdhn/",
    },
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.png",
      link: "https://www.linkedin.com/in/mgibranramadhan/",
    },
    {
      platform: "github",
      icon: "/images/icon/github-icon.png",
      link: "https://github.com/GibranRamadhannn",
    },
  ],
};

const educationData = {
  education: [
    {
      title: "University Of Technology Bandung - Discontinued",
      description:
        "An informatics engineering student who served as class representative for three semesters and was highly active in the information technology student association.",
    },
  ],
  skills: [
    {
      name: "NextJS",
      icon: "/images/home/education-skill/png/nextjs-icon.png",
      rating: 3,
    },
    {
      name: "Laravel",
      icon: "/images/home/education-skill/png/laravel-icon.png",
      rating: 4,
    },
    {
      name: "Go Lang",
      icon: "/images/home/education-skill/png/golang-icon.png",
      rating: 3,
    },
    {
      name: "React JS",
      icon: "/images/home/education-skill/png/react-icon.png",
      rating: 4,
    },
    {
      name: "PHP",
      icon: "/images/home/education-skill/png/php-icon.png",
      rating: 5,
    },
    {
      name: "NestJS",
      icon: "/images/home/education-skill/png/nestjs-icon.png",
      rating: 2,
    },
  ],
};

const contactLinks = {
  socialLinks: [
    {
      title: "Instagram",
      href: "https://www.instagram.com/mhd.gbrnrmdhn/",
    },
    {
      title: "Linked In",
      href: "https://www.linkedin.com/in/mgibranramadhan/",
    },
    {
      title: "Github",
      href: "https://github.com/GibranRamadhannn",
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "geebdev.space@gmail.com",
      link: "mailto:geebdev.space@gmail.com",
    },
  ],
};

export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks,
  });
};
