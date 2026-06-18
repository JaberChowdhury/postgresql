"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export type Wallpaper = {
  id: number;
  title: string;
  link: string;
  tags: string[];
};

const WallpaperGrid = ({ wallpapers }: { wallpapers: Wallpaper[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full justify-center items-center">
      {wallpapers.map((wallpaper) => (
        <Card
          key={wallpaper.id}
          className="overflow-hidden group cursor-pointer rounded-xl"
        >
          {/* Image wrapper for stable layout */}
          <div className="relative w-full aspect-3/4 overflow-hidden">
            <Image
              src={wallpaper.link}
              alt={wallpaper.title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              loading="lazy"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-3 space-y-2">
            <h2 className="text-sm font-medium truncate">{wallpaper.title}</h2>

            <div className="flex flex-wrap gap-1">
              {wallpaper.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-muted px-2 py-0.5 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
export default WallpaperGrid;
