"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SoftwareItem {
  name: string;
  icon: string;
  os: string;
  type: string;
  usage: number;
}

interface SoftwareData {
  softwares?: SoftwareItem[];
}

const MOBILE_LIMIT = 6; // di bawah md
const DESKTOP_LIMIT = 8; // md ke atas

const Softwares = () => {
  const [softwareData, setSoftwareData] = useState<SoftwareData | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: { softwareData?: SoftwareData } = await res.json();
        setSoftwareData(data.softwareData ?? null);
      } catch (error) {
        console.error("Error fetching software data:", error);
      }
    };

    fetchData();
  }, []);

  const softwares = softwareData?.softwares ?? [];

  const getVisibilityClass = (index: number) => {
    if (expanded || index < MOBILE_LIMIT) return "flex";
    if (index < DESKTOP_LIMIT) return "hidden md:flex";
    return "hidden";
  };

  return (
    <section>
      <div className="border-t border-muted overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={"/images/home/education-skill/edu-skill-vector.svg"}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>Softwares</h2>
              <p className="text-xl text-primary">( 04 )</p>
            </div>
            <div className="flex flex-col items-center gap-10 xl:gap-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 xl:gap-7 w-full">
                {softwares.map((value, index) => {
                  const usage = Math.min(100, Math.max(0, value.usage));

                  return (
                    <div
                      key={`${value.name}-${index}`}
                      className={`${getVisibilityClass(index)} p-4 xl:p-6 border border-muted rounded-lg flex-col gap-5 sm:gap-8 items-center justify-between`}
                    >
                      <div className="flex flex-col items-center gap-3 text-center">
                        <Image
                          src={value.icon}
                          alt={value.name}
                          width={70}
                          height={70}
                        />
                        <p className="text-black font-normal">{value.name}</p>
                        <span className="rounded-full border border-muted bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
                          {value.type}
                        </span>
                      </div>

                      <div className="w-full">
                        <div className="mb-1 flex justify-end text-xs text-muted-foreground">
                          {usage}%
                        </div>
                        <div
                          role="progressbar"
                          aria-label={`${value.name} usage`}
                          aria-valuenow={usage}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          className="h-1.5 w-full overflow-hidden rounded-full bg-muted"
                        >
                          <div
                            className="h-full rounded-full bg-primary"
                            style={{ width: `${usage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {softwares.length > MOBILE_LIMIT && (
                <button
                  type="button"
                  onClick={() => setExpanded((prev) => !prev)}
                  aria-expanded={expanded}
                  className={`no-print relative overflow-hidden rounded-full border border-muted px-6 py-2 text-sm transition-colors hover:border-primary hover:text-white ${
                    softwares.length <= DESKTOP_LIMIT ? "md:hidden" : ""
                  }`}
                >
                  <span className="relative z-10">
                    {expanded ? "See less" : "See more"}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Softwares;
