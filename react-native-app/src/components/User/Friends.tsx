import React from "react";
import { connect } from "react-redux";
import { Text, View } from "../Themed";

const Friends = ({loginData}) => {
  return (
    <View>
      <Text>{loginData.email} Is that it</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { loginData: state.sign };
};
export default connect(mapStateToProps)(Friends);
