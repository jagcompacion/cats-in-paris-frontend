import { GestureResponderEvent, TouchableOpacity } from "react-native";

type ButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const Button = ({ onPress, disabled, children }: ButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-indigo-500 px-6 py-3"
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;
