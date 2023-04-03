import {
  AppBar,
  Box,
  Container,
  styled,
  StyledComponentProps,
  Theme,
} from "@mui/material";
import { FC } from "react";

interface MainHeaderProps {}

interface StyledButtonProps extends StyledComponentProps<"root"> {
  // Define any additional props for the component here
  children?: React.ReactNode;
}

const MainHeader: FC<MainHeaderProps> = ({}) => {
  return (
    <StyledMainHeader>
      <Container>
        <h1>Header4</h1>
      </Container>
    </StyledMainHeader>
  );
};

export default MainHeader;

const StyledMainHeader: React.FC<StyledButtonProps> = styled(AppBar)(
  () => ({})
);
