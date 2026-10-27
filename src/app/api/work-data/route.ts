import { NextResponse } from "next/server";

const workData = [
  {
    image: "/images/work/lica-blood-bank-snippet.jpg",
    title: "LICA Blood Bank",
    type: "Blood Bank Information System - BBIS",
    projectType: "Company Project",
    client: "Hospital Blood Bank - RSUD Indramayu",
    slug: "!#",
  },
  {
    image: "/images/work/lica-viewer-snippet.jpg",
    title: "LICA Viewer",
    type: "Laboratory Information System - LIS",
    projectType: "Company Project",
    client: "Laboratorium - RST Tk. II dr. Soedjono Magelang",
    slug: "!#",
  },
  {
    image: "/images/work/reca-play-snippet.jpg",
    title: "RECA Play",
    type: "Sport Virtual Assistance - SVA",
    projectType: "Company Project",
    client:
      "Sportive Hub Padel Court & Ludo Sports Kitchen and Coffee Bandung ",
    slug: "https://reca-play.com",
  },
  {
    image: "/images/work/lica-landing-page-snippet.jpg",
    title: "LICA Landing Page",
    type: "Landing Page",
    projectType: "Company Project",
    client: "PT Indohadetama Solusi Digital",
    slug: "https://indohadetamasolusidigital.com",
  },
  {
    image: "/images/work/isola-landing-page-snippet.jpg",
    title: "ISOLA Company Profile",
    type: "Company Profile",
    projectType: "Company Project",
    client: "PT Indohadetama Solusi Digital",
    slug: "https://isola-woad.vercel.app",
  },
  {
    image: "/images/work/bdg-clubdepadel-snippet.jpg",
    title: "BDG CLUB DE PADEL",
    type: "Community Management System",
    projectType: "Freelance Project",
    client: "Bandung Club De Padel",
    slug: "https://bdgclubdepadel.vercel.app",
  },
  {
    image: "/images/work/khofiatul-awaliyah-snippet.jpg",
    title: "Khofiatul Awaliyah",
    type: "Web Portfolio",
    projectType: "Freelance Project",
    client: "Khofiatul Awaliyah",
    slug: "",
  },
];

export const GET = async () => {
  return NextResponse.json({
    workData,
  });
};
