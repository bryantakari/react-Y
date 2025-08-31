import ImageItemPlaceholder from "../assets/items-placeholder.jpeg"
import { ProductCard } from "@/components/product-item";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";


export default function Items() {

    return (
        <div>
            <Carousel className="my-3">
                
                <CarouselContent className="gap-4">
                    <CarouselItem key="1" className="w-20">
                        <Skeleton className="h-80 " />
                    </CarouselItem>
                    <CarouselItem key="2" className="w-80">
                        <Skeleton className="mt-2 h-50" />
                        <Skeleton className="mt-2 h-10" />
                        <Skeleton className="mt-2 h-10" />
                    </CarouselItem>
                    <CarouselItem key="3" className="w-80">
                        <Skeleton className="mt-2 h-10" />
                        <Skeleton className="mt-2 h-10" />
                        <Skeleton className="mt-2 h-10" />
                        <Skeleton className="mt-2 h-40" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext />
            </Carousel>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 items-stretch w-full">
                <ProductCard
                    imageUrl={ImageItemPlaceholder}
                    title="Product 1"
                    price={100000}
                    rating={4.5}
                    sold={2000}
                    location="Jakarta"
                    freeShipping
                    officialStore
                    onAddToCart={() => console.log("Add to cart")}
                />
                <ProductCard
                    imageUrl={ImageItemPlaceholder}
                    title="Product 1"
                    price={100000}
                    rating={4.5}
                    sold={2000}
                    location="Jakarta"
                    freeShipping
                    officialStore
                    onAddToCart={() => console.log("Add to cart")}
                />
                <ProductCard
                    imageUrl={ImageItemPlaceholder}
                    title="Product 1"
                    price={100000}
                    rating={4.5}
                    sold={2000}
                    location="Jakarta"
                    freeShipping
                    officialStore
                    onAddToCart={() => console.log("Add to cart")}
                />
                <ProductCard
                    imageUrl={ImageItemPlaceholder}
                    title="Product 1"
                    price={100000}
                    rating={4.5}
                    sold={2000}
                    location="Jakarta"
                    freeShipping
                    officialStore
                    onAddToCart={() => console.log("Add to cart")}
                />
                <ProductCard
                    imageUrl={ImageItemPlaceholder}
                    title="Product 1"
                    price={100000}
                    rating={4.5}
                    sold={2000}
                    location="Jakarta"
                    freeShipping
                    officialStore
                    onAddToCart={() => console.log("Add to cart")}
                />
                <ProductCard
                    imageUrl={ImageItemPlaceholder}
                    title="Product 1"
                    price={100000}
                    rating={4.5}
                    sold={2000}
                    location="Jakarta"
                    freeShipping
                    officialStore
                    onAddToCart={() => console.log("Add to cart")}
                />
                <ProductCard
                    imageUrl={ImageItemPlaceholder}
                    title="Product 1"
                    price={100000}
                    rating={4.5}
                    sold={2000}
                    location="Jakarta"
                    freeShipping
                    officialStore
                    onAddToCart={() => console.log("Add to cart")}
                />
                <ProductCard
                    imageUrl={ImageItemPlaceholder}
                    title="Product 1"
                    price={100000}
                    rating={4.5}
                    sold={2000}
                    location="Jakarta"
                    freeShipping
                    officialStore
                    onAddToCart={() => console.log("Add to cart")}
                />
                <ProductCard
                    imageUrl={ImageItemPlaceholder}
                    title="Product 1"
                    price={100000}
                    rating={4.5}
                    sold={2000}
                    location="Jakarta"
                    freeShipping
                    officialStore
                    onAddToCart={() => console.log("Add to cart")}
                />
                <ProductCard
                    imageUrl={ImageItemPlaceholder}
                    title="Product 1"
                    price={100000}
                    rating={4.5}
                    sold={2000}
                    location="Jakarta"
                    freeShipping
                    officialStore
                    onAddToCart={() => console.log("Add to cart")}
                />
                <ProductCard
                    imageUrl={ImageItemPlaceholder}
                    title="Product 1"
                    price={100000}
                    rating={4.5}
                    sold={2000}
                    location="Jakarta"
                    freeShipping
                    officialStore
                    onAddToCart={() => console.log("Add to cart")}
                />
                <ProductCard
                    imageUrl={ImageItemPlaceholder}
                    title="Product 1"
                    price={100000}
                    rating={4.5}
                    sold={2000}
                    location="Jakarta"
                    freeShipping
                    officialStore
                    onAddToCart={() => console.log("Add to cart")}
                />
                <ProductCard
                    imageUrl={ImageItemPlaceholder}
                    title="Product 1"
                    price={100000}
                    rating={4.5}
                    sold={2000}
                    location="Jakarta"
                    freeShipping
                    officialStore
                    onAddToCart={() => console.log("Add to cart")}
                />
                <ProductCard
                    imageUrl={ImageItemPlaceholder}
                    title="Product 1"
                    price={100000}
                    rating={4.5}
                    sold={2000}
                    location="Jakarta"
                    freeShipping
                    officialStore
                    onAddToCart={() => console.log("Add to cart")}
                />
            </div>
        </div>
        
    );
}