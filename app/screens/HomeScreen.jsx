import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => props.navigation.navigate("DetailsScreen")}
      />
    </View>
  );
}

// import React from "react";
// import { View, Text, Button } from "react-native";

// export default function HomeScreen(props) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to details Screen"
//         onPress={() => props.navigation.navigate("Details")}
//       />
//     </View>
//   );
// }