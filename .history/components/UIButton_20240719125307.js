import { TouchableOpacity } from "react-native";

function UIButton({ onPress, icon }) {
  const Icon = icon;
  const styleTextButton = {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "white",
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}
