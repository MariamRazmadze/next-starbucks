import CityList from "./CityList";
import { StyledSidebar } from "@/styles/locator/StyledSidebar";

interface SideBarProps {
  setMapPosition: React.Dispatch<React.SetStateAction<[number, number]>>;
}

export default function Sidebar({ setMapPosition }: SideBarProps) {
  return (
    <StyledSidebar>
      <CityList setMapPosition={setMapPosition} />
    </StyledSidebar>
  );
}
