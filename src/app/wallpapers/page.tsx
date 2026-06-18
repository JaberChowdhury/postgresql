import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FormComponent from "@/components/form";
import WallpaperGrid, { Wallpaper } from "@/components/WallpaperGrid";
import client from "@/lib/db";
import { buttonVariants } from "@/components/ui/button";

const WallpapersPage = async () => {
  const result = await client.query<Wallpaper>(
    "SELECT * FROM wallpapers ORDER BY id DESC",
  );
  
  return (
    <div className="min-h-screen flex flex-col p-6 lg:p-12 max-w-7xl mx-auto space-y-8">
      {/* Header with Back Button */}
      <div className="flex items-center space-x-4 mb-4 mt-8">
        <Link href="/" className={buttonVariants({ variant: "ghost", size: "icon", className: "rounded-full" })}>
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to Home</span>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Wallpaper Collection</h1>
          <p className="text-muted-foreground">Manage and view your saved wallpapers.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[400px_1fr] gap-8 items-start">
        <div className="sticky top-6">
          <FormComponent />
        </div>
        <WallpaperGrid wallpapers={result.rows} />
      </div>
    </div>
  );
};

export default WallpapersPage;
