import { Colors } from "@/constants/Colors";
import { Text, View } from "react-native";

interface HomeCardProps {}

const HomeCard: React.FC<HomeCardProps> = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 200,
        borderRadius: 10,
        padding: 24,
        backgroundColor: "#f2f2f2",
        borderWidth: 0.1,
        borderColor: Colors.light.fg,
        shadowColor: "rgba(0,0,0,0.3)",
        shadowOffset: { width: -3, height: -6 },
        shadowRadius: -4,
      }}
    >
      <Text>Hello</Text>
    </View>
  );
};

export default HomeCard;
