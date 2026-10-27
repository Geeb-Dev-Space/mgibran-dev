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

const softwareData = {
  softwares: [
    {
      name: "Visual Studio Code",
      icon: "/images/home/softwares/png/visual-studio-code-icon.png",
      os: "Windows",
      type: "IDE",
      usage: 90,
    },
    {
      name: "Figma",
      icon: "/images/home/softwares/png/figma-icon.png",
      os: "Windows",
      type: "UI/UX Design App",
      usage: 85,
    },
    {
      name: "Adobe Illustrator",
      icon: "/images/home/softwares/png/adobe-illustrator-icon.png",
      os: "Windows",
      type: "Graphic Design App",
      usage: 55,
    },
    {
      name: "Netbeans",
      icon: "/images/home/softwares/png/netbeans-icon.png",
      os: "Windows",
      type: "IDE",
      usage: 40,
    },
    {
      name: "Arduino IDE",
      icon: "/images/home/softwares/png/arduinoide-icon.png",
      os: "Windows",
      type: "IDE",
      usage: 32,
    },
    {
      name: "Putty",
      icon: "/images/home/softwares/png/putty-icon.png",
      os: "Windows",
      type: "Terminal & Serial Console Emulator",
      usage: 25,
    },
    {
      name: "Filezilla",
      icon: "/images/home/softwares/png/filezilla-icon.png",
      os: "Windows",
      type: "File Transfer Protocol",
      usage: 38,
    },
    {
      name: "Docker Dekstop",
      icon: "/images/home/softwares/png/docker-icon.png",
      os: "Windows",
      type: "GUI Based Development Environment",
      usage: 15,
    },
    {
      name: "Laragon",
      icon: "/images/home/softwares/png/laragon-icon.png",
      os: "Windows",
      type: "Local Development Environment",
      usage: 89,
    },
    {
      name: "Git Bash",
      icon: "/images/home/softwares/png/gitbash-icon.png",
      os: "Windows",
      type: "Unix/Linux Style Command Line",
      usage: 90,
    },
    {
      name: "Powershell",
      icon: "/images/home/softwares/png/powershell-icon.png",
      os: "Windows",
      type: "Shell Command Line Interface",
      usage: 95,
    },
    {
      name: "Notepad++",
      icon: "/images/home/softwares/png/notepad-plus-icon.png",
      os: "Windows",
      type: "Text Editor",
      usage: 56,
    },
    {
      name: "Dbeaver",
      icon: "/images/home/softwares/png/dbeaver-icon.png",
      os: "Windows",
      type: "Database Management",
      usage: 80,
    },
    {
      name: "Serial Tool",
      icon: "/images/home/softwares/png/serial-tool-icon.png",
      os: "Windows",
      type: "Debugging, Communication, Analysis Platform",
      usage: 34,
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

const gearData = [
  {
    name: "MSI Modern 14",
    image: "/images/home/gears/msi-modern-14.jpg",
    detail: ["Intel Core i5-1235U", "16 GB", "512 GB SSD", "Intel Iris Xe"],
    url: "https://id.msi.com/Business-Productivity/Modern-14-C5X",
  },
  {
    name: "Iphone 13",
    image: "/images/home/gears/iphone-13.webp",
    detail: ["A15 Bionic", "Super Retina XDR OLED", "4 GB RAM", "128 GB"],
    url: "https://www.digimap.co.id/products/iphone-13-mlpf3id-a?srsltid=AYCX9vKKByCAVO_6UfkYpHNw8B2WD-AB8CAWkeINfla0WXVWzeU_I-GH#",
  },
  {
    name: "Fantech Kanata VX9S",
    image: "/images/home/gears/fantech-kanata.webp",
    detail: ["A725F Sensor", "DPI 400-7.200 DPI", "6 Macro", "82 Gram"],
    url: "https://fantech.id/products/mouse-gaming-wireless-kanata-vx9-vx9s",
  },
  {
    name: "Huawei Freebuds SE 4 ANC",
    image: "/images/home/gears/huawei-se4-anc.jpg",
    detail: ["ANC 50 dB", "4 Preset EQ", "IP54", "Bluetooth 5.4"],
    url: "https://consumer.huawei.com/id/headphones/freebuds-se-4-anc/",
  },
  {
    name: "Womier K66",
    image: "/images/home/gears/womier-k66.jpg",
    detail: ["3 Tier Frosted Acrylic", "USB-C Wired", "547 Gram", "RGB LEDs"],
    url: "https://royalgear.ca/de/products/womier-k66?srsltid=AYCX9vLDjTJ9Gupd48W7Wp8PRuc3DqT24fl9s6Xl8R1l05FGBINT0loN",
  },
  {
    name: "Owlab QK65 Keycap Set Dye-Sub PBT",
    image: "/images/home/gears/owlab-qk65-keycap.webp",
    detail: ["Cherry Profile", "91 Keys"],
    url: "https://divinikey.com/products/owlab-qk65-keycaps-dye-sub-pbt?srsltid=AYCX9vICsNQVDYRcc_EDJAQpd3em5xFIkFWWKhlH6nAnY9NOGSx_ZS-I",
  },
];

export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    softwareData,
    contactLinks,
    gearData,
  });
};
