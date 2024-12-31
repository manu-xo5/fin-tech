import { Text, TextProps } from "react-native";

interface HeadingProps extends TextProps {}

const Heading: React.FC<HeadingProps> = ({ style, ...props }) => {
  return (
    <Text
      style={[
        {
          fontSize: 34,
          fontWeight: "bold",
        },
        style,
      ]}
      {...props}
    />
  );
};

export default Heading;
