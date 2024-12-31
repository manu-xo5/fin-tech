import { Text, TextProps } from "react-native";

interface HeaderProps extends TextProps {}

const Header: React.FC<HeaderProps> = ({ style, ...props }) => {
  return (
    <Text
      style={[
        {
          fontSize: 17,
          fontWeight: "semibold",
        },
        style,
      ]}
      {...props}
    />
  );
};

export default Header;
