import React from "react";
import { Text, Button, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Onboarding from "react-native-onboarding-swiper";

const Skip = ({ ...props }) => (
  <Button {...props} title="Lewati" color="#000000" />
);
const Next = ({ ...props }) => (
  <Button {...props} title="Selanjutnya" color="#000000" />
);
const Done = ({ ...props }) => (
  // <TouchableOpacity style={{ marginHorizontal: 8 }} {...props}>
  //   <Text style={{ fontSize: 16 }}>Selesai</Text>
  // </TouchableOpacity>
  <Button {...props} title="Selesai" color="#000000" />
);

const FirstBoard = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace("Welcome")}
      onDone={() => navigation.navigate("Welcome")}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../../assets/ready7.png")} />,
          title: "Baca!",
          subtitle: "Baca Qur'an mu, dan dapatkan pahala dari-Nya",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../../assets/ready6.png")} />,
          title: "Progress!",
          subtitle: "Progress menghafal akan tercatat di aplikasi",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../../assets/ready5.png")} />,
          title: "Dengarkan!",
          subtitle: "Dengarkan berbagai macam qari internasional",
        },
      ]}
    />
  );
};

export default FirstBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
