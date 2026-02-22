import { StyleSheet } from "react-native";
import colors from "../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blueFonce,
    gap:15
  },
  input:{
    backgroundColor:'white',
    borderRadius:10,
    width: 300,
    margin:7,
    padding:5,
    paddingLeft:10,
  },
  button:{
    backgroundColor:'white',
    width:150,
    justifyContent:'center',
    alignItems:'center',
    margin:10,
    padding:10,
    borderRadius:10,
  }
});