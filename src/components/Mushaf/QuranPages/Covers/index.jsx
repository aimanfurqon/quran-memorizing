import { View } from "react-native";

const AyahCovers = ({
  covers,
  // START – DEVELOPMENT VARIABLES
  firstWords = [],
  invisibles = [],
  blockings = [],
  blockings1 = [],
  blockings2 = [],

  // END – DEVELOPMENT VARIABLES
}) => {
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        elevation: 2,
        zIndex: 2,
      }}
    >
      {/* START – USED DURING DEVELOPMENT ONLY */}
      {/* {firstWords.length > 0 &&
        firstWords.map((item) => {
          const { top, right, height, width } = item;
          return (
            <View
              key={`${top}-${right}`}
              style={{
                position: "absolute",
                top: `${top}%`,
                right: `${right}%`,
                width: `${width}%`,
                height: `${height}%`,
                backgroundColor: "rgba(200,200,0,0.5)",
              }}
            />
          );
        })}
      {invisibles.length > 0 &&
        invisibles.map((item) => {
          const { top, right, height, width } = item;
          return (
            <View
              key={`${top}-${right}`}
              style={{
                position: "absolute",
                top: `${top}%`,
                right: `${right}%`,
                width: `${width}%`,
                height: `${height}%`,
                backgroundColor: "rgba(0,255,0,0.3)",
              }}
            />
          );
        })} */}

      {/* END – USED DURING DEVELOPMENT ONLY*/}
      {covers.length > 0 &&
        covers.map((item) => {
          const { top, right, height, width } = item;
          return (
            <View
              key={`${top}-${right}`}
              style={{
                position: "absolute",
                top: `${top}%`,
                right: `${right}%`,
                width: `${width}%`,
                height: `${height}%`,
                backgroundColor: "#f8f5e9",
              }}
            />
          );
        })}
      {blockings.length > 0 &&
        blockings.map((item) => {
          const { top, right, height, width } = item;
          return (
            <View
              key={`${top}-${right}`}
              style={{
                position: "absolute",
                top: `${top}%`,
                right: `${right}%`,
                width: `${width}%`,
                height: `${height}%`,
                backgroundColor: "rgba(174, 175, 114, 0.2)",
              }}
            />
          );
        })}
      {blockings1.length > 0 &&
        blockings1.map((item) => {
          const { top, right, height, width } = item;
          return (
            <View
              key={`${top}-${right}`}
              style={{
                position: "absolute",
                top: `${top}%`,
                right: `${right}%`,
                width: `${width}%`,
                height: `${height}%`,
                backgroundColor: "rgba(164, 114, 176, 0.2)",
              }}
            />
          );
        })}
      {blockings2.length > 0 &&
        blockings2.map((item) => {
          const { top, right, height, width } = item;
          return (
            <View
              key={`${top}-${right}`}
              style={{
                position: "absolute",
                top: `${top}%`,
                right: `${right}%`,
                width: `${width}%`,
                height: `${height}%`,
                backgroundColor: "rgba(4, 59, 92, 0.2)",
              }}
            />
          );
        })}
    </View>
  );
};

export default AyahCovers;
