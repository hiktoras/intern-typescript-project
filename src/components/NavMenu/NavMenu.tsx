import { NavMenuData } from "../../types";
import NavMenuItem from "../NavMenuItem/NavMenuItem";

export interface NavMenuProps {
  navMenuDataList: NavMenuData[];
}

const NavMenu = ({ navMenuDataList }: NavMenuProps) => {
  return (
    <ul>
      {navMenuDataList.map((nData) => (
        <NavMenuItem navMenuData={nData} />
      ))}
    </ul>
  );
};

export default NavMenu;
