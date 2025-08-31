import { Link, Outlet } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "../components/ui/button";
import { Separator } from "@/components/ui/separator";


function LayoutSearch() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [query, setQuery] = useState("");
    function onSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // TODO: handle search
        // e.g., router.push(`/search?q=${encodeURIComponent(query)}`)
        console.log("search:", query);
    }
    return (

        <div className=" h-screen">
            {/* Header */}
            <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex h-16 w-full items-center gap-4 px-4 sm:px-6">
                    {/* Left: Logo */}
                    <a href="/" className="flex items-center gap-2 shrink-0" aria-label="Home">
                        {/* Replace with your logo image if needed */}
                        <div className="h-8 w-8 rounded-lg bg-primary" />
                        <span className="font-semibold tracking-tight">YourBrand</span>
                    </a>


                    {/* Center: Search bar with button */}
                    <div className="flex-1 max-w-full">
                        <form onSubmit={onSearch} className="flex items-center justify-end gap-2">
                            <div className="relative w-full">
                                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6 opacity-60" />
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="pl-9"
                                    aria-label="Search"
                                />
                            </div>
                            <Button isLoading={isLoading} className="whitespace-nowrap">Search</Button>
                        </form>
                    </div>
                    <Separator orientation="vertical" className="my-3" />
                    {/* Right: Auth buttons */}
                    <nav className="flex items-center gap-2 ml-auto">
                        <Link to="/login" className={buttonVariants({ variant: "outline" })}>
                            Sign In
                        </Link>
                        <Link to="/signup" className={buttonVariants()}>
                            Sign Up
                        </Link>
                    </nav>
                </div>
            </header>

            <div className="flex-1 flex flex-col">
                {/* Page Content */}
                <main className="p-4 flex-1 overflow-y-auto">
                    <Outlet /> {/* This renders the current page */}
                </main>
            </div>


        </div>
    );
};

export default LayoutSearch;