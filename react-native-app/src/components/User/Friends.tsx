import React from "react";
import { connect } from "react-redux";
import { Text, View } from "../Themed";

const Friends = ({loginData}) => {
  return (
    <View>
      <Text>{loginData.email} {loginData.password}</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { loginData: state.sign };
};
export default connect(mapStateToProps)(Friends);
