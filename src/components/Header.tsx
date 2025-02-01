import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-support-red rounded-sm"></div>
          <span className="font-semibold text-support-navy">
            Helpful Information
          </span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="w-[100px]">
              <Globe className="mr-2 h-4 w-4" />
              EN
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[100px]">
            <DropdownMenuItem>NL</DropdownMenuItem>
            <DropdownMenuItem>FR</DropdownMenuItem>
            <DropdownMenuItem>DE</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;