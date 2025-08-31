import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import ImagePlaceHolder from "../assets/items-placeholder.jpeg";
import { AspectRatio } from "./ui/aspect-ratio";
import { Badge } from "./ui/badge";

type ProductCardProps = {
  href?: string;
  imageUrl: string;
  title: string;
  price: number;
  rating?: number;            // e.g. 4.8
  sold?: string | number;     // e.g. "2rb+"
  location?: string;          // e.g. "Jakarta Utara"
  freeShipping?: boolean;     // Gratis Ongkir
  officialStore?: boolean;    // Badge "Official"
  onAddToCart?: () => void;
};

const formatIDR = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export function ProductCard({
  href = "#",
  imageUrl = ImagePlaceHolder,
  title,
  price,
  rating,
  sold,
  location,
  freeShipping,
  officialStore,
  onAddToCart,
}: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-2xl border bg-background shadow-sm transition-all hover:shadow-md max-w-md ">
      <div className="p-3">
        {/* Image */}
        <div className="relative">
          <AspectRatio ratio={4/3} className="overflow-hidden rounded-xl bg-muted">
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>

          {/* badges/top-right actions */}
          <button
            type="button"
            className="absolute right-2 top-2 z-10 rounded-full bg-background/80 p-1.5 opacity-0 shadow-sm ring-1 ring-border backdrop-blur transition-opacity group-hover:opacity-100"
            aria-label="Tambah ke wishlist"
          >
            <Heart className="h-4 w-4" />
          </button>

          {officialStore && (
            <Badge className="absolute left-2 top-2 z-10">Official</Badge>
          )}
        </div>

        {/* Content */}
        <CardContent className="px-0 pt-3">
          {/* Title (2 lines clamp) */}
          <a href={href} className="block">
            <h1 className="line-clamp-2 text-sm font-medium leading-snug hover:underline">
              {title}
            </h1>
          </a>

          {/* Price */}
          <div className="mt-1 text-lg font-semibold tracking-tight">
            {formatIDR(price)}
          </div>

          {/* Rating / Sold */}
          <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
            {typeof rating === "number" && (
              <span className="inline-flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-current" />
                {rating.toFixed(1)}
              </span>
            )}
            {sold !== undefined && <span>• Terjual {sold}</span>}
          </div>

          {/* Location */}
          {location && (
            <div className="mt-1 text-xs text-muted-foreground">{location}</div>
          )}

          {/* Gratis ongkir */}
          {freeShipping && (
            <Badge variant="secondary" className="mt-2">
              Gratis Ongkir
            </Badge>
          )}
        </CardContent>

        {/* Footer actions */}
        <CardFooter className="px-0 pt-2">
          
        </CardFooter>
      </div>
    </Card>
  );
}
