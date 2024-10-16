import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../type/type.navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styleInputTime } from "./styles.css";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
export default function InputTime() {
  const [currentTime, setCurrentTime] = useState(dayjs());
  const yeahNow = Number(currentTime.format("YYYY"));
  const monthNow = Number(currentTime.format("MM"));
  const dayNow = Number(currentTime.format("DD"));
  const hourNow = `${currentTime.hour()}`;
  const minuteNow = `${currentTime.minute()}`;
  const [yeah, setYeah] = useState<number>(yeahNow);
  const [month, setMonth] = useState<number>(monthNow);
  const [day, setDay] = useState<number>(dayNow);
  const [hour, setHour] = useState<string>(hourNow);
  const [minute, setMinute] = useState<string>(minuteNow);
  const [title, setTitle] = useState<string>("");
  const [errorInput ,setErrorInput] = useState<string>("");
  const [errorTime ,setErrorTime] = useState<string>("");
  const navigation = useNavigation<HomeScreenNavigationProp>();
 
  const updateTime = () => {
    setCurrentTime(dayjs()); 
  };
 
  useEffect(() => {
    
    const timer = setInterval(updateTime, 1000);

    
    return () => {
      clearInterval(timer);
    };
  }, []);

  const renderYeah = () => {
    const listYeah = [];

    for (let i = yeahNow; i < yeahNow + 50; i++) {
      listYeah.push(<Picker.Item key={i} label={`năm ${i}`} value={i} />);
    }
    return listYeah;
  };

  const renderMonth = () => {
    const listMonth = [];
    let index = 0;
    if (yeah === yeahNow) {
      index = monthNow;
    } else {
      index = 1;
    }
    for (let i = index; i < 13; i++) {
      listMonth.push(<Picker.Item key={i} label={`tháng ${i}`} value={i} />);
    }
    return listMonth;
  };

  const renderDay = () => {
    const listDay = [];
    let totalDay = 0;
    let index = 0;
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10 ||
      month === 12
    ) {
      totalDay = 31;
    }
    if (month === 4 || month === 6 || month === 9 || month === 11) {
      totalDay = 30;
    }
    if (month === 2) {
      if (yeah % 4 === 0 || (yeah % 100 === 0 && yeah % 400 === 0)) {
        totalDay = 29;
       
      } else {
        totalDay = 28;
       
      }
    }
    if (yeah === yeahNow && month === monthNow) {
      index = dayNow;
    } else {
      index = 1;
    }
    for (let i = index; i <= totalDay; i++) {
      listDay.push(<Picker.Item key={i} label={`ngày ${i}`} value={i} />);
    }
    return listDay;
  };

  const renderHour = () => {
    const listHour = [];
    let index = 0;
    if (yeah === yeahNow && month === monthNow && day === dayNow) {
      index = Number(hourNow);
    }
    for (let i = index; i <= 23; i++) {
      listHour.push(<Picker.Item key={i} label={`${i} giờ`} value={`${i}`} />);
    }
    return listHour;
  };

  const renderMinute = () => {
    const listMinute = [];
    let index = 0;
    if (
      yeah === yeahNow &&
      month == monthNow &&
      hour === hourNow &&
      day === dayNow
    ) {
      index = Number(minuteNow);
    }
    for (let i = index; i <= 59; i++) {
      listMinute.push(
        <Picker.Item key={i} label={`${i} phút`} value={`${i}`} />
      );
    }
    return listMinute;
  };

  
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/img/bg.png")}
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={styleInputTime.overlay} />
        <View style={styleInputTime.lableFirst}>
          <Text style={styleInputTime.label}>Tên cho bộ đếm thời gian</Text>
          <TextInput
            style={styleInputTime.textInput}
            placeholder="vui lòng nhâp ..."
            onChangeText={(value) => {
              setTitle(value);
            }}
            onPress={Keyboard.dismiss}
            multiline={true}
          />
          {errorInput&&(
            <Text style={styleInputTime.textError}>{errorInput}</Text>
          )}
        </View>
        <View style={styleInputTime.inputTime}>
          <View style={styleInputTime.input}>
            <Text style={styleInputTime.label}>chọn năm</Text>
            <View style={styleInputTime.customPicker}>
              <Picker
                selectedValue={yeah}
                onValueChange={(itemValue) => setYeah(+itemValue)}
              >
                {renderYeah()}
              </Picker>
            </View>
          </View>
          <View style={styleInputTime.input}>
            <Text style={styleInputTime.label}>chọn tháng</Text>
            <View style={styleInputTime.customPicker}>
              <Picker
                selectedValue={month}
                onValueChange={(itemValue) => setMonth(+itemValue)}
              >
                {renderMonth()}
              </Picker>
            </View>
          </View>
          <View style={styleInputTime.input}>
            <Text style={styleInputTime.label}>chọn ngày</Text>
            <View style={styleInputTime.customPicker}>
              <Picker
                selectedValue={day}
                onValueChange={(itemValue) => setDay(+itemValue)}
              >
                {renderDay()}
              </Picker>
            </View>
          </View>
          <View style={styleInputTime.input}>
            <Text style={styleInputTime.label}>chọn giờ</Text>
            <View style={styleInputTime.customPicker}>
              <Picker
                selectedValue={hour}
                onValueChange={(itemValue) => setHour(itemValue)}
              >
                {renderHour()}
              </Picker>
            </View>
          </View>
          <View style={styleInputTime.input}>
            <Text style={styleInputTime.label}>chọn phút</Text>
            <View style={styleInputTime.customPicker}>
              <Picker
                selectedValue={minute}
                onValueChange={(itemValue) => setMinute(itemValue)}
              >
                {renderMinute()}
              </Picker>
            </View>
            {errorTime&&(
              <Text style={styleInputTime.textError}>{errorTime}</Text>
            )}
          </View>
        </View>
        <View style={styleInputTime.container}>
          <TouchableOpacity
            style={styleInputTime.button}
            onPress={() =>
            {
              const dayInput = `${yeah}-${month}-${day} ${hour}:${minute}`
              const miliseconInput = dayjs(dayInput).valueOf()-dayjs().valueOf()
              const remainder  = miliseconInput % 1000;
              let countdown = miliseconInput - remainder;
              if(remainder >=500){
                 countdown += 1000
              }
              
              if(!title){
                setErrorInput("vui lòng nhập tên cho bộ đếm")
              }
              if(miliseconInput<1000){
                setErrorTime("vui lòng nhập thời gian chp bộ đếm")
              }
              if(title && miliseconInput>=1000){
                setErrorInput("")
                setErrorTime("")
                navigation.navigate("countdown", { title: title, countdown: countdown,name:"home" })
              }
              
            }
            }
          >
            <Text style={styleInputTime.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
