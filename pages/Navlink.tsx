import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

export default function Navlink({ category, isActive }: Props) {
  //when you click on it, it goes through the /news/(category-name)
  return (
    <Link
      className={`navLink ${
        isActive &&
        "underline decoration-yellow-500 underline-offset-4 font-bold text-lg"
      }`}
      href={`/news/${category}`}
    >
      {category}
    </Link>
  );
}
