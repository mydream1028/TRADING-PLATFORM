import { Link } from "react-router-dom";

interface NavbarItem {
  icon: React.ReactNode;
  label: string;
  url: string;
}

interface NavbarProps {
  list: Array<NavbarItem>;
  onClick: (index:number) => void;
  navState: number
}
export const NavbarComponent: React.FC<NavbarProps> = ({list, onClick, navState}) => {
  return (
    <nav className="min-w-80 h-fill-available bg-blue-800 text-white pt-10">
      {list.map((item, index) => (
        <Link
          className={`flex items-center gap-2 px-10 py-2 text-xl ${
            index == navState ? "bg-blue-600" : "hover:bg-blue-600"
          }`}
          to={item.url}
          key={index}
          onClick={() => onClick(index)}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
