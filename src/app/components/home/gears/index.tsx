"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

interface GearItem {
  name: string;
  image: string;
  detail: string[];
  url: string;
}

const Gears = () => {
  const [gearData, setGearData] = useState<GearItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: { gearData?: GearItem[] } = await res.json();
        setGearData(data.gearData ?? []);
      } catch (error) {
        console.error("Error fetching gear data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="bg-muted">
        <div className="container">
          <div className="py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Gears</h2>
              <p className="text-xl text-primary">( 06 )</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 xl:gap-7">
              {gearData.map((value) => (
                <div
                  key={value.name}
                  className="group relative flex flex-col items-center justify-between gap-5 sm:gap-8 rounded-lg border border-border bg-background p-4 xl:p-6 transition-colors hover:border-primary"
                >
                  <div className="flex w-full flex-col items-center gap-3 text-center">
                    <div className="relative aspect-square w-full max-w-[160px]">
                      <Image
                        src={value.image}
                        alt={value.name}
                        fill
                        sizes="160px"
                        className="object-contain"
                      />
                    </div>
                    <Link
                      href={value.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-black font-normal after:absolute after:inset-0"
                    >
                      {value.name}
                      <ArrowUpRight
                        size={14}
                        aria-hidden="true"
                        className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>

                  <ul className="flex flex-wrap justify-center gap-2">
                    {value.detail.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-muted bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gears;
