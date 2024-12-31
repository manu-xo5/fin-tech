import { Text, View } from "react-native";
import Heading from "@/components/ui/text/Heading";
import { Pressable } from "react-native-gesture-handler";
import Icons from "./icons";
import { Colors } from "@/constants/Colors";

interface HomeHeaderProps {}

const HomeHeader: React.FC<HomeHeaderProps> = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Heading>Track It</Heading>

      <Pressable>
        <Text>
          <Icons.plusCircle color={Colors.light.accentPrimary} />
        </Text>
      </Pressable>
    </View>
  );
};

export default HomeHeader;
