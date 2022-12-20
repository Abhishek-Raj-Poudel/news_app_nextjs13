import { categories } from "../constants";
import { usePathname } from "next/navigation";
import Navlink from "./Navlink";

function Navlinks() {
  const pathname = usePathname();
  //   here we split the link into array on / and take the last value in the array
  // if that is true then make our category option true
  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b">
      {categories.map((category) => (
        <Navlink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default Navlinks;
