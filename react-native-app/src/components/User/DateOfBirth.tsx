import React from "react";
import DatePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";

export default class DateOfBirth extends React.Component {
  state = {
    date: new Date(1598051730000)
  };

  render() {
    return (
      <DatePicker
        style={{ width: 200 }}
        mode="date"
        value={this.state.date}
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1900-01-01"
        maxDate="2021-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={(date) => {
          this.setState({ date: date });
        }}
      />
    );
  }
}
