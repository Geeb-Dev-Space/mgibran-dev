import { NextResponse } from "next/server";

const workData = [
  {
    image: "/images/work/lica-blood-bank-snippet.png",
    title: "LICA Blood Bank",
    type: "Blood Bank Information System - BBIS",
    projectType: "Company Project",
    client: "Hospital Blood Bank - RSUD Indramayu",
    slug: "!#",
  },
  {
    image: "/images/work/lica-viewer-snippet.png",
    title: "LICA Viewer",
    type: "Laboratory Information System - LIS",
    projectType: "Company Project",
    client: "Laboratorium - RST Tk. II dr. Soedjono Magelang",
    slug: "!#",
  },
  {
    image: "/images/work/reca-play-snippet.png",
    title: "RECA Play",
    type: "Sport Virtual Assistance - SVA",
    projectType: "Company Project",
    client:
      "Sportive Hub Padel Court & Ludo Sports Kitchen and Coffee Bandung ",
    slug: "https://reca-play.com",
  },
  {
    image: "/images/work/lica-landing-page-snippet.png",
    title: "LICA Landing Page",
    type: "Landing Page",
    projectType: "Company Project",
    client: "PT Indohadetama Solusi Digital",
    slug: "https://indohadetamasolusidigital.com",
  },
  {
    image: "/images/work/isola-landing-page-snippet.png",
    title: "ISOLA Company Profile",
    type: "Company Profile",
    projectType: "Company Project",
    client: "PT Indohadetama Solusi Digital",
    slug: "https://isola-woad.vercel.app",
  },
  {
    image: "/images/work/bcdp-snippet.png",
    title: "BDG CLUB DE PADEL",
    type: "Community Management System",
    projectType: "Freelance Project",
    client: "Bandung Club De Padel",
    slug: "https://bdgclubdepadel.vercel.app",
  },
];

export const GET = async () => {
  return NextResponse.json({
    workData,
  });
};
