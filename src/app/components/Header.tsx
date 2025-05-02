import { UtensilsIcon } from "lucide-react";
import { APP_NAME } from "../../constants/app";

export const Header = () => {
  return (
    <header>
      <div>
        <UtensilsIcon className="h-8 w-8 mr-3" />
        <h1>{APP_NAME}</h1>
      </div>
    </header>
  );
};
