import React, { useState, useEffect } from "react";
import GoTo from "./GoTo";
import News from "./News";
import Student from "./Student";
import StatusBar from "./StatusBar";
import Addtion from "./Addition";
import Money from "./Money";
import Time from "./Time";
import ProgressCourse from "./ProgressCourse";
import Profile from "./Profile";
import Evaluation from "./Evaluation";
import Lulus from "./Lulus";
import Supermarket from "./Supermarket";
import Cafe from "./Cafe";
import Inventory from "./Inventory";
import ResponsiveNews from "./ResponsiveNews";
import Overlay from "./Overlay";
import itemList from "./goods.json";
import "../css/modeMain.css";

import BackpackIcon from "../assets/assetsIcon/backpack.png";

import CafeMorning from "../assets/assetsBackground/Cafe/Cafe-Morning.jpg";
import CafeAfternoon from "../assets/assetsBackground/Cafe/Cafe-Afternoon.jpg";
import CafeNighttime from "../assets/assetsBackground/Cafe/Cafe-Nighttime.jpg";

import CampusMorning from "../assets/assetsBackground/Kampus/Kampus-Morning.jpg";
import CampusAfternoon from "../assets/assetsBackground/Kampus/Kampus-Afternoon.jpg";
import CampusNighttime from "../assets/assetsBackground/Kampus/Kampus-Nighttime.jpg";
import CampusMorningRain from "../assets/assetsBackground/Kampus/Kampus-Morning-Raining.png";
import CampusAfternoonRain from "../assets/assetsBackground/Kampus/Kampus-Afternoon-Raining.png";
import CampusNighttimeRain from "../assets/assetsBackground/Kampus/Kampus-Nighttime-Raining.png";

import HomeMorning from "../assets/assetsBackground/Rumah/Rumah-Morning.jpg";
import HomeAfternoon from "../assets/assetsBackground/Rumah/Rumah-Afternoon.jpg";
import HomeNighttime from "../assets/assetsBackground/Rumah/Rumah-Nighttime.jpg";
import HomeMorningRain from "../assets/assetsBackground/Rumah/Rumah-Morning-Raining.jpg";
import HomeAfternoonRain from "../assets/assetsBackground/Rumah/Rumah-Afternoon-Raining.jpg";
import HomeNighttimeRain from "../assets/assetsBackground/Rumah/Rumah-Nighttime-Raining.jpg";

import SupermarketMorning from "../assets/assetsBackground/Supermarket/Supermarket-Morning.jpg";
import SupermarketAfternoon from "../assets/assetsBackground/Supermarket/Supermarket-Afternoon.jpg";
import SupermarketNighttime from "../assets/assetsBackground/Supermarket/Supermarket-Nighttime.jpg";

import WeatherHujan from "../assets/assetsWeather/Rainy.png";
import WeatherCerah from "../assets/assetsWeather/Sunny.png";
import WeatherBerawan from "../assets/assetsWeather/Cloudy.png";

export default function ModeMain(props) {
  const [location, setLocation] = useState("Home");
  const [notif, setNotif] = useState("");
  const [blockNotif, setBlockNotif] = useState(false);
  const [openProgressCourse, setOpenProgressCourse] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [money, setMoney] = useState(5000000);
  const [inSupermarket, setInSupermarket] = useState(false);
  const [isOpenSupermarket, setIsOpenSupermarket] = useState(false);
  const [isOpenInventory, setIsOpenInventory] = useState(false);
  const [isOpenEvaluation, setIsOpenEvaluation] = useState(false);
  const [tingkatBelajar, setTingkatBelajar] = useState(0);
  const [tingkatBelajarKampus, setTingkatBelajarKampus] = useState(0);
  const [mingguKe, setMingguKe] = useState(0);
  const [lulus, setLulus] = useState(false);

  const [isOnMobile, setIsOnMobile] = useState(false);
  const [isOpenPhoneMobile, setIsOpenPhoneMobile] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const [timeStatus, setTimeStatus] = useState("");
  const [statusStudent, setStatusStudent] = useState("normal");

  const [inCafe, setInCafe] = useState(false);
  const [indexItemCafe, setIndexItemCafe] = useState(0);

  const [jam, setJam] = useState(0);

  const [currentDay, setCurrentDay] = useState("");
  const [infoCourse, setInfoCourse] = useState(
    props.course.map((courseName) => [courseName, 0])
  );
  const [attendanceListCourse, setAttendanceListCourse] = useState(
    infoCourse.map((courseName) => [courseName[0], false])
  );

  const [finishedClass, setFinishedClass] = useState(false);

  const [pelajaranEffectFlag, setPelajaranEffectFlag] = useState(false);
  const [inventory, setInventory] = useState([]);

  const [progress, setProgress] = useState([
    ["Makan", 50, "Supermarket", false], // ->disabled -> false
    ["Main", 50, "Campus", "Supermarket", false],
    ["Tidur", 50, "Campus", "Cafe", "Supermarket", false],
    ["Study", 0, "Supermarket", false] // not
  ]);

  const [supermarketItemList, setSupermarketItemList] = useState([]);
  const [cafeItemList, setCafeItemList] = useState([]);

  const [progressStudy, setProgressStudy] = useState(progress[3][1]);
  const [badPhysicIndicator, setBadPhysicIndicator] = useState(0);
  const [startTimerKegagalanFisik, setStartTimerKegagalanFisik] = useState(
    false
  );
  const [startTimerDeteksiKemalasan, setStartTimerDeteksiKemalasan] = useState(
    false
  );
  const [indikatorKemalasan, setIndikatorKemalasan] = useState(0);
  const [inClass, setInClass] = useState(false);

  const [sedangTidur, setSedangTidur] = useState(false);

  ////////////////////////////////////////////////////////////
  const [day, setDay] = useState("");
  //const [totalminute, setTotalminue] = useState();
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [currentHari, setCurrentHari] = useState(6);

  const [backgroundLocation, setBackgroundLocation] = useState(HomeMorning);
  const [jendela, setJendela] = useState(null);
  const [cuaca, setCuaca] = useState("Clear");

  const listHari = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY"
  ];

  // const [listJSON, setListJSON] = useState({});

  const [weatherList, setWeatherList] = useState([]);

  const [counterWeather, setCounterWeather] = useState(0);

  function studentRegards() {
    if (props.hour >= 0 && props.hour <= 10)
      return `Good Morning, ${props.name}`;
    if (props.hour >= 11 && props.hour <= 15)
      return `Good Afternoon, ${props.name}`;
    if (props.hour >= 16 && props.hour <= 18)
      return `Good Evening, ${props.name}`;
    if (props.hour >= 19 && props.hour <= 24)
      return `Good Night, ${props.name}`;
  }

  // const url =
  //   "https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=9b27095958c5a31afafa7a380e94a242";
  // API atas udah ready kalau bawah mati
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=5a93cf4eed90323635a9209df23f4054";

  // GK USH DIMATIIN LG GPP UDH GK NGSPAM
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        var tempWeatherList = weatherList;
        // tempWeatherList = [];
        for (let element in data.list) {
          tempWeatherList.push(data.list[element].weather[0].main);
        }
        setWeatherList(tempWeatherList);
      });

    const interval = setInterval(function () {
      setCuaca(weatherList[Math.floor(Math.random() * weatherList.length)]);
    }, 10000);
  }, []);

  useEffect(() => {
    if (lulus) setOverlay(true);
    else setOverlay(false);
  }, [lulus]);

  useEffect(() => {
    console.log(cuaca, "WEATHER NOW");
  }, [cuaca]);

  useEffect(() => {
    if (jam >= 0 && jam <= 10) {
      setTimeStatus("pagi");
      if (cuaca === "Clear" && location === "Home") {
        if (jam >= 5 && jam <= 10) setJendela(WeatherCerah);
        else setJendela(WeatherCerah);
      } else if (cuaca === "Clouds" && location === "Home") {
        if (jam >= 5 && jam <= 10) setJendela(WeatherBerawan);
        else setJendela(WeatherBerawan);
      } else if (cuaca === "Rain" && location === "Home") {
        if (jam >= 5 && jam <= 10) setJendela(WeatherHujan);
        else setJendela(WeatherHujan);
      }
      // } else setJendela("");
    } else if (jam >= 11 && jam <= 15) {
      setTimeStatus("siang");
      if (cuaca === "Clear" && location === "Home") setJendela(WeatherCerah);
      else if (cuaca === "Clouds" && location === "Home")
        setJendela(WeatherBerawan);
      else if (cuaca === "Rain" && location === "Home")
        setJendela(WeatherHujan);
      // Clear hrny
      // else setJendela("");
    } else if (jam >= 16 && jam <= 18) {
      setTimeStatus("sore");
      if (cuaca === "Clear" && location === "Home") setJendela(WeatherCerah);
      else if (cuaca === "Clouds" && location === "Home")
        setJendela(WeatherBerawan);
      else if (cuaca === "Rain" && location === "Home")
        setJendela(WeatherHujan);
      // Clear hrsn
      // else setJendela("");
    } else if (jam >= 19 && jam <= 24) {
      setTimeStatus("malam");
      if (cuaca === "Clear" && location === "Home") setJendela(WeatherCerah);
      else if (cuaca === "Clouds" && location === "Home")
        setJendela(WeatherBerawan);
      else if (cuaca === "Rain" && location === "Home")
        setJendela(WeatherHujan);
      // normal hrsny
      // else setJendela("");
    }
  }, [jam, cuaca]);

  const addMoney = (value) => {
    return money + value;
  };

  function updateMoney(val) {
    setMoney((money) => money + val);
  }

  const resetProgressMingguan = () => {
    setIsOpenEvaluation(false);
    setTingkatBelajar(0);
    setTingkatBelajarKampus(0);
    for (let attendance of attendanceListCourse) {
      attendance[1] = false;
    }
  };

  useEffect(() => {
    if (location === "Home") {
      setBackgroundLocation(HomeMorning);
      if (jam >= 0 && jam <= 10) {
        setTimeStatus("pagi");
        if (cuaca === "Clear" && location === "Home") {
          if (jam >= 5 && jam < 10) {
            setJendela(WeatherCerah);
            setBackgroundLocation(HomeMorning);
          } else if (jam >= 10 && jam < 18) {
            setJendela(WeatherCerah);
            setBackgroundLocation(HomeAfternoon);
          } else {
            setJendela(WeatherCerah);
            setBackgroundLocation(HomeNighttime);
          }
        } else if (cuaca === "Clouds" && location === "Home") {
          if (jam >= 5 && jam <= 10) {
            setJendela(WeatherBerawan);
            setBackgroundLocation(HomeMorning);
          } else if (jam >= 10 && jam < 18) {
            setJendela(WeatherBerawan);
            setBackgroundLocation(HomeAfternoon);
          } else {
            setJendela(WeatherBerawan);
            setBackgroundLocation(HomeNighttime);
          }
        } else if (cuaca === "Rain" && location === "Home") {
          if (jam >= 5 && jam <= 10) {
            setJendela(WeatherHujan);
            setBackgroundLocation(HomeMorningRain);
          } else if (jam >= 10 && jam < 18) {
            setJendela(WeatherHujan);
            setBackgroundLocation(HomeAfternoonRain);
          } else {
            setJendela(WeatherHujan);
            setBackgroundLocation(HomeNighttimeRain);
          }
        }
      }
    } else if (location === "Campus") {
      setBackgroundLocation(CampusMorning);
      if (jam >= 0 && jam <= 10) {
        setTimeStatus("pagi");
        if (cuaca === "Clear" && location === "Campus") {
          if (jam >= 5 && jam < 10) {
            setJendela(WeatherCerah);
            setBackgroundLocation(CampusMorning);
          } else if (jam >= 10 && jam < 18) {
            setJendela(WeatherCerah);
            setBackgroundLocation(CampusAfternoon);
          } else {
            setJendela(WeatherCerah);
            setBackgroundLocation(CampusNighttime);
          }
        } else if (cuaca === "Clouds" && location === "Campus") {
          if (jam >= 5 && jam <= 10) {
            setJendela(WeatherBerawan);
            setBackgroundLocation(CampusMorning);
          } else if (jam >= 10 && jam < 18) {
            setJendela(WeatherBerawan);
            setBackgroundLocation(CampusAfternoon);
          } else {
            setJendela(WeatherBerawan);
            setBackgroundLocation(CampusNighttime);
          }
        } else if (cuaca === "Rain" && location === "Campus") {
          if (jam >= 5 && jam <= 10) {
            setJendela(WeatherHujan);
            setBackgroundLocation(CampusMorningRain);
          } else if (jam >= 10 && jam < 18) {
            setJendela(WeatherHujan);
            setBackgroundLocation(CampusAfternoonRain);
          } else {
            setJendela(WeatherHujan);
            setBackgroundLocation(CampusNighttimeRain);
          }
        }
      }
    } else if (location === "Supermarket") {
      setBackgroundLocation(SupermarketMorning);
      if (jam >= 0 && jam <= 10) {
        setTimeStatus("pagi");
        if (cuaca === "Clear" && location === "Supermarket") {
          if (jam >= 5 && jam < 10) {
            setJendela(WeatherCerah);
            setBackgroundLocation(SupermarketMorning);
          } else if (jam >= 10 && jam < 18) {
            setJendela(WeatherCerah);
            setBackgroundLocation(SupermarketAfternoon);
          } else {
            setJendela(WeatherCerah);
            setBackgroundLocation(SupermarketNighttime);
          }
        } else if (cuaca === "Clouds" && location === "Supermarket") {
          if (jam >= 5 && jam <= 10) {
            setJendela(WeatherBerawan);
            setBackgroundLocation(SupermarketMorning);
          } else if (jam >= 10 && jam < 18) {
            setJendela(WeatherBerawan);
            setBackgroundLocation(SupermarketAfternoon);
          } else {
            setJendela(WeatherBerawan);
            setBackgroundLocation(SupermarketNighttime);
          }
        } else if (cuaca === "Rain" && location === "Supermarket") {
          if (jam >= 5 && jam <= 10) {
            setJendela(WeatherHujan);
            setBackgroundLocation(SupermarketMorning);
          } else if (jam >= 10 && jam < 18) {
            setJendela(WeatherHujan);
            setBackgroundLocation(SupermarketAfternoon);
          } else {
            setJendela(WeatherHujan);
            setBackgroundLocation(SupermarketNighttime);
          }
          // } else setJendela("");
        }
      }
      // setJendela("");
    } else if (location === "Cafe") {
      setBackgroundLocation(CafeAfternoon);
      if (jam >= 0 && jam <= 10) {
        setTimeStatus("pagi");
        if (cuaca === "Clear" && location === "Cafe") {
          if (jam >= 5 && jam < 10) {
            setJendela(WeatherCerah);
            setBackgroundLocation(CafeMorning);
          } else if (jam >= 10 && jam < 18) {
            setJendela(WeatherCerah);
            setBackgroundLocation(CafeAfternoon);
          } else {
            setJendela(WeatherCerah);
            setBackgroundLocation(CafeNighttime);
          }
        } else if (cuaca === "Clouds" && location === "Cafe") {
          if (jam >= 5 && jam <= 10) {
            setJendela(WeatherBerawan);
            setBackgroundLocation(CafeMorning);
          } else if (jam >= 10 && jam < 18) {
            setJendela(WeatherBerawan);
            setBackgroundLocation(CafeAfternoon);
          } else {
            setJendela(WeatherBerawan);
            setBackgroundLocation(CafeNighttime);
          }
        } else if (cuaca === "Rain" && location === "Home") {
          if (jam >= 5 && jam <= 10) {
            setJendela(WeatherHujan);
            setBackgroundLocation(CafeMorning);
          } else if (jam >= 10 && jam < 18) {
            setJendela(WeatherHujan);
            setBackgroundLocation(CafeAfternoon);
          } else {
            setJendela(WeatherHujan);
            setBackgroundLocation(CafeNighttime);
          }
          // } else setJendela("");
        }
      }
    }
    // setJendela("");
  }, [location]);

  useEffect(() => {
    if (day === "SATURDAY") {
      setMingguKe((mingguKe) => mingguKe + 1);
      setIsOpenEvaluation(true);
      if (mingguKe === 14) {
        // kelulusan brdsrkan absensi
        if (tingkatBelajarKampus / (infoCourse.length * 14) >= 0.85) {
          setOverlay(true);
          setLulus(true);
        } else {
          props.updateSetIsFailed();
        }
      }
    }
  }, [day]);

  useEffect(() => {
    getCurrentDay(listHari[currentHari]);
  }, [currentHari]);

  useEffect(() => {
    getTime_hour(hour);
  }, [hour]);

  function changeMinute() {
    setDay((day) => {
      const newDay = listHari[currentHari];
      return newDay;
    });
    setMinute((minute) => {
      const newMinute = minute + 5;
      const checkHour = hour;

      if (checkHour === 8 && day !== "SUNDAY")
        updateNotifikasi("College Time!");
      if (checkHour === 17 && day !== "SUNDAY")
        updateNotifikasi("Your college time is over!");
      if (listHari[currentHari] === "SUNDAY")
        updateNotifikasi("Today is a day off! Do what you want to do...");

      if (newMinute >= 60) {
        setHour((hour) => {
          var intervalInt = 1;
          const newHour = hour + intervalInt;
          if (newHour >= 24) {
            setCurrentHari((currentHari) => {
              const newHari = currentHari + 1;
              if (newHari >= 7) {
                setDay((day) => {
                  const newDay = listHari[0];
                  return newDay;
                });
                return 0;
              }
              setDay((day) => {
                const newDay = listHari[newHari];
                return newDay;
              });
              return newHari;
            });
            return 0;
          }
          return newHour;
        });
        return 0;
      }
      return newMinute;
    });
  }

  useEffect(() => {
    const interval = setInterval(changeMinute, 1000);
    return () => clearInterval(interval);
  }, []);

  ///////////////////////////////////////////////

  function buyItem(itemName) {
    // setIsOpenSupermarket(true);
    var tempItemList = supermarketItemList;
    var itemDetection = "";
    var imageCode;
    for (let item of tempItemList) {
      if (item[0] === itemName && money >= item[1]) {
        itemDetection = item[0];
        item[2]--;
        imageCode = item[3];
        setMoney((money) => money - item[1]);
        break;
      }
    }
    const tempInventory = inventory;

    var itemExist = false;

    for (let items of inventory) {
      if (items[0] === itemDetection) {
        items[1]++;
        itemExist = true;
      }
    }
    if (!itemExist) tempInventory.push([itemDetection, 1, imageCode]);

    setInventory(inventory);
    setSupermarketItemList(tempItemList);
  }

  function switchLeft_Cafe(val) {
    if (indexItemCafe <= 0) setIndexItemCafe(cafeItemList.length - 1);
    else setIndexItemCafe((indexItemCafe - 1) % cafeItemList.length);
  }

  function switchRight_Cafe() {
    setIndexItemCafe((indexItemCafe + 1) % cafeItemList.length);
  }

  function ToNotSedangTidur() {
    setSedangTidur(false);
  }

  const buyDrinks = () => {
    setMoney((money) => money - cafeItemList[indexItemCafe][1]);
    const tempActions = [...progress];
    tempActions[0][1] += 30;
    tempActions[1][1] += 30;
    setProgress(tempActions);
  };

  useEffect(() => {
    //iventory
    const tempInventory = inventory;
    tempInventory.push(["Bola Ubi", 2]);
    tempInventory.push(["Siomay Batagor", 2]);
    tempInventory.push(["Mango Drinks", 2]);
    setInventory(tempInventory);
  }, []);

  useEffect(() => {
    let JSONItem = JSON.stringify(itemList);
    var arrayItem = JSON.parse(JSONItem);

    var counter = 0;
    var newArray = [];
    for (let element of arrayItem.supermarket) {
      var wadah = [];
      wadah[0] = element.name;
      wadah[1] = element.price;
      wadah[2] = element.stok;
      wadah[3] = element.id;
      newArray.push(wadah);
    }

    var CafeArray = [];
    for (let element of arrayItem.cafe) {
      var wadah = [];
      wadah[0] = element.name;
      wadah[1] = element.price;
      CafeArray.push(wadah);
    }

    setSupermarketItemList(newArray);
    setCafeItemList(CafeArray);
  }, []);

  useEffect(() => {
    setIsOpenSupermarket(false);
    if (!inSupermarket) {
      for (let buttons of document.getElementsByClassName(
        "tombol-supermarket"
      )) {
        buttons.style.display = "none";
      }
    } else {
      for (let buttons of document.getElementsByClassName(
        "tombol-supermarket"
      )) {
        buttons.style.display = "";
      }
    }
    console.log(inSupermarket);
  }, [inSupermarket]);

  useEffect(function appRunTimer() {
    const interval = setInterval(() => {
      var tempActions = [...progress];

      if (tempActions[0][1] <= 0 || tempActions[2][1] <= 0)
        setStartTimerKegagalanFisik(true);

      if (tempActions[0][1] >= 100) {
        tempActions[0][1] = 100;
      }
      if (tempActions[1][1] >= 100) {
        tempActions[1][1] = 100;
      }
      if (tempActions[2][1] >= 100) {
        tempActions[2][1] = 100;
      }

      if (tempActions[0][1] >= 2) tempActions[0][1] -= 2;
      if (tempActions[1][1] >= 2) tempActions[1][1] -= 2;
      if (tempActions[2][1] >= 2) tempActions[2][1] -= 2;

      if (tempActions[0][1] <= 15) {
        updateNotifikasi("You better eat first, let's be healthy!");
      }
      if (tempActions[1][1] <= 15) {
        updateNotifikasi("You're not having fun...");
      }
      if (tempActions[2][1] <= 15) {
        updateNotifikasi("You are tired you need rest...");
      }

      if (tempActions[3][1] <= 15) {
        updateNotifikasi("The spirit of learning, you can do it!");
      }

      if (tempActions[3][1] >= 100) {
        setProgressStudy(tempActions[3][1]);
        setTingkatBelajar((tingkatBelajar) => tingkatBelajar + 30);
        tempActions[3][1] = 0;
      }

      if (tempActions[0][1] < 0) tempActions[0][1] = 0;
      if (tempActions[1][1] < 0) tempActions[1][1] = 0;
      if (tempActions[2][1] < 0) tempActions[2][1] = 0;
      if (tempActions[3][1] < 0) tempActions[3][1] = 0;
      setProgressStudy(tempActions[3][1]);

      setProgress(tempActions);
    }, 1000);

    return function stopTimer() {
      clearInterval(interval);
    };
  }, []);

  // kl bljr 0 || makan 0 ->

  useEffect(() => {
    if (
      (progress[0][1] <= 1 || progress[2][1] <= 1) &&
      !startTimerKegagalanFisik
    ) {
      setStartTimerKegagalanFisik(true);
      const interval = setInterval(() => {
        setBadPhysicIndicator((badPhysicIndicator) => {
          if (badPhysicIndicator === 80) {
            setBadPhysicIndicator(0);

            props.updateSetIsDead();
            return clearInterval(interval);
          }
          if (progress[0][1] > 3 && progress[2][1] > 3) {
            setBadPhysicIndicator(0);
            setStartTimerKegagalanFisik(false);
            clearInterval(interval);
          }
          return (badPhysicIndicator += 1);
        });
      }, 1000);
    }
  }, [progress[0][1], progress[2][1]]);

  useEffect(() => {
    if (progress[3][1] <= 1 && !startTimerDeteksiKemalasan) {
      setStartTimerDeteksiKemalasan(true);
      const interval = setInterval(() => {
        setIndikatorKemalasan((indikatorKemalasan) => {
          if (indikatorKemalasan === 80) {
            setIndikatorKemalasan(0);
            console.log("you are DO from campus");
            props.updateSetIsFailed();
            return clearInterval(interval);
          }
          if (progress[3][1] > 3) {
            console.log("yes, keep the spirit of learning");
            setIndikatorKemalasan(0);
            setStartTimerDeteksiKemalasan(false);
            clearInterval(interval);
          }
          return (indikatorKemalasan += 1);
        });
      }, 1000);
    }
  }, [progress[3][1]]);

  function skipTime_Sleep(h) {
    setSedangTidur(true);
  }

  function doAction(action) {
    // incrementBadPhysicIndicator();
    var incrementVal = 10;
    if (action === "Study") {
      // 0 1 value makan
      // 1 1 value main
      // 2 1 value tidur
      // 3 1 value blljr
      setStatusStudent("belajar");
      setTimeout(() => setStatusStudent("normal"), 2000);

      if (location !== "Campus")
        setTingkatBelajar((tingkatBelajar) => tingkatBelajar + 1);
      console.log(tingkatBelajar, "tingkatBelajr");

      if (progress[0][1] < 30 || progress[2][1] < 30) incrementVal = 8;
      if (progress[1][1] <= 35) incrementVal = 4;
      if (progress[0][1] < 15 || progress[2][1] < 15) incrementVal = 1;
      if (progress[2][1] <= 1) incrementVal = 0;
      progress[0][1] -= 1;
      progress[1][1] -= 1;
      progress[2][1] -= 1;
    }

    if (action === "Main") {
      setStatusStudent("main");
      setTimeout(() => setStatusStudent("normal"), 2000);
      incrementVal = 70;
      if (progress[0][1] < 30) incrementVal = 6;
      if (progress[2][1] < 30) incrementVal = 3;
      if (progress[2][1] <= 1) incrementVal = 0;
      progress[0][1] -= 10;
      progress[2][1] -= 10;
    }

    if (action === "Tidur") {
      setStatusStudent("tidur");
      setTimeout(() => setStatusStudent("normal"), 2000);
      setCuaca(weatherList[Math.floor(Math.random() * weatherList.length)]);
      const tempHour = hour + 4;
      setHour((hour) => (hour + 4) % 24);
      console.log((hour % 24) + 4);
      if (tempHour > 24) {
        const modulo = tempHour % 24;
        setCurrentHari((currentHari) => (currentHari + 1) % 7);
        setDay(listHari[currentHari]);
      }
      incrementVal = 90;
      if (progress[0][1] < 25) incrementVal = 30;
      progress[0][1] -= 50;
      progress[1][1] -= 20;
    }

    if (action === "Makan") {
      incrementVal = 80;
      //if (progress[2][1] <= 20) incrementVal = 7;
      if (inventory.length === 0) {
        updateNotifikasi("Makananmu habis :) silahkan beli pake gems");
        return;
      } else {
        setStatusStudent("makan");
        setTimeout(() => setStatusStudent("normal"), 2000);
        const fetchMakanan = Math.floor(Math.random() * inventory.length);
        const tempInventory = inventory;
        for (let items in tempInventory) {
          const convertToInt = parseInt(items, 10);
          console.log(convertToInt, fetchMakanan);
          if (convertToInt === fetchMakanan) {
            if (tempInventory[convertToInt][1] === 1) {
              tempInventory.splice(convertToInt, 1);
            } else {
              tempInventory[convertToInt][1]--;
            }
          }
        }
        setInventory(tempInventory);
        progress[1][1] -= 10;
        progress[2][1] -= 10;
      }
    }

    var tempActions = [...progress];
    for (let i of tempActions) {
      if (i[0] === action) i[1] += incrementVal;
    }
    setProgress(tempActions);
    // clearInterval(interval);
  }

  useEffect(() => {
    const tempProgress_refresh = progress;
    for (let element of tempProgress_refresh) {
      element[element.length - 1] = false;
    }
    setProgress(tempProgress_refresh);
    const tempProgress = progress;
    for (let element of tempProgress) {
      for (let details in element) {
        if (details <= 1) continue;
        if (element[details] === location) {
          element[element.length - 1] = true;
        } // lom bs ganti
      }
    }
    setProgress(tempProgress);
  }, [location, jam]);

  function cekKelulusan() {
    for (let courseName of props.course) {
      if (courseName[1] < 14) return false;
    }
    return true;
  }
  cekKelulusan();

  useEffect(() => {
    const tempCourse = infoCourse;
    var tempJam = jam;

    if (!pelajaranEffectFlag && !finishedClass) {
      for (let mk of tempCourse) {
        if (
          jam >= mk[0][2] &&
          jam <= mk[0][3] - 1 &&
          currentDay === mk[0][1] &&
          inClass
        ) {
          if (progress[3][1] >= 100) {
            const tempAttendance = attendanceListCourse;
            let counter = 0;
            for (let namaMk of tempAttendance) {
              if (namaMk[0][0] === mk[0][0]) {
                namaMk[0][1] = true;
                break;
              }
              counter++;
            }

            setAttendanceListCourse(tempAttendance);
            setTingkatBelajarKampus(
              (tingkatBelajarKampus) => tingkatBelajarKampus + 1
            );
            setPelajaranEffectFlag(true);
            setFinishedClass(true);
            setInClass(false);
            setInfoCourse(tempCourse);
          }
        }
      }
    }
  }, [progress]);

  useEffect(() => {
    for (let mk of infoCourse) {
      if (jam === mk[0][2] - 1 && currentDay === mk[0][1]) {
        const tempActions = [...progress];
        if (tempActions[0][3] !== "Campus")
          tempActions[0].splice(3, 0, "Campus");
        setProgress(tempActions);
      }
      if (
        jam === mk[0][2] &&
        currentDay === mk[0][1] &&
        location === "Campus"
      ) {
        const tempActions = [...progress];
        tempActions[3][1] = 0;
        if (tempActions[0][3] !== "Campus")
          tempActions[0].splice(3, 0, "Campus");
        setProgress(tempActions);
        setInClass(true);
        setNotif("Class " + mk[0][0] + " has started.");
      }
      if (
        jam < mk[0][3] &&
        jam > mk[0][2] &&
        currentDay === mk[0][1] &&
        location === "Campus"
      ) {
        const tempActions = [...progress];
        if (tempActions[0][3] !== "Campus")
          tempActions[0].splice(3, 0, "Campus");
        setProgress(tempActions);
      }
      if (jam === mk[0][3] && currentDay === mk[0][1]) {
        setPelajaranEffectFlag(false);
        setFinishedClass(false);
        const tempActions = [...progress];
        if (tempActions[0][3] === "Campus") tempActions[0].splice(3, 1); //
        setProgress(tempActions);
        setInClass(false);

        setNotif("Course " + mk[0][0] + " is over.");
      }

      if (jam === mk[0][3] - 1 && currentDay === mk[0][1]) {
        const tempActions = [...progress];
        if (tempActions[0][3] === "Campus") tempActions[0].splice(3, 1); //
        setProgress(tempActions);
      }
    }
  }, [jam]);

  // isi Course array state = [ [namw, hari , jamstart, jamfinish] , progress ]

  function updateStartTimerKegagalanFisik_start() {
    setStartTimerKegagalanFisik(true);
  }
  function updateStartTimerKegagalanFisik_stop() {
    setStartTimerKegagalanFisik(false);
  }

  const updateCloseMobile = () => {
    setIsOpenPhoneMobile(false);
    setOverlay(false);
  };
  const updateOpenMobile = () => {
    setIsOpenPhoneMobile(true);
    setOverlay(true);
  };

  function getValueStudy(val) {
    setProgressStudy(val);
  }

  function getCurrentDay(d) {
    setCurrentDay(d);
    // console.log(d, currentDay);
  }

  function getInfoCourse(arr) {
    setInfoCourse(arr);
  }

  // function getInfoCourse(arr) {
  //   setInfoCourse(arr);
  //   // jam start finish
  //   if (
  //     jam >= arr[0][2] &&
  //     jam <= arr[0][3] &&
  //     currentDay === arr[0][1] &&
  //     progressStudy >= 100
  //   ) {
  //     arr[1]++;
  //   }
  //   return arr[1];
  // }

  function updateOnMobile_IN() {
    setIsOnMobile(true);
  }

  function updateOnMobile_OUT() {
    setIsOnMobile(false);
  }

  function closeOverlay() {
    setOverlay(false);
  }

  function openOverlay() {
    setOverlay(true);
  }

  useEffect(() => {
    if (window.innerWidth <= 780) setIsOnMobile(false);
    else setIsOnMobile(true);
  }, [window.innerWidth]);

  function getTime_hour(h) {
    setJam(h);
  }

  useEffect(() => {
    setNotif("Hello!");
  }, []);

  function updateNotifikasi(pesan) {
    if (!blockNotif) {
      setBlockNotif(true);
      setTimeout(() => {
        setNotif(pesan);
        setBlockNotif(false);
      }, 4000); // queueing
    }
  }

  function updateOpenCourseAccess() {
    if (!openProgressCourse) setOverlay(true);
    else setOverlay(false);
    setOpenProgressCourse(!openProgressCourse);
  }

  function updateProfileAccess() {
    if (!openProfile) setOverlay(true);
    else setOverlay(false);
    setOpenProfile(!openProfile);
  }

  function updateOpenCafe() {
    setInCafe(!inCafe);
  }

  function updateOpenInventory_IN() {
    setOverlay(true);
    setIsOpenInventory(true);
  }

  function updateOpenInventory_OUT() {
    setOverlay(false);
    setIsOpenInventory(false);
  }

  function updateOpenCafe_IN() {
    setInCafe(true);
  }

  function updateOpenCafe_OUT() {
    setInCafe(false);
  }

  function updateOpenSupermarketMenu() {
    if (inSupermarket) {
      if (!isOpenSupermarket) setOverlay(true);
      else setOverlay(false);
      setIsOpenSupermarket(!isOpenSupermarket);
    }
  }

  function updateGoToSupermarket_OUT() {
    setInSupermarket(false);
    // setOverlay(false);
  }

  function updateGoToSupermarket_IN() {
    setInSupermarket(true);
    // setOverlay(true);
  }

  function changeLocation(e) {
    setLocation(e);
  }

  function updateMoney(value) {
    setMoney(value);
  }

  function studentRegards() {
    if (hour >= 0 && hour <= 10)
      return `Good Morning, ${props.name}`;
    if (hour >= 11 && hour <= 15)
      return `Good Afternoon, ${props.name}`;
    if (hour >= 16 && hour <= 18)
      return `Good Evening, ${props.name}`;
    if (hour >= 19 && hour <= 24)
      return `Good Night, ${props.name}`;
  }

  return (
    <div id="game-frame" className="row justify-content-center">
      <div className="row justify-content-center bgTest">
        <div className="" id="background-latar">
          <img
            className=""
            src={backgroundLocation}
            id="background-latar"
            alt=""
          />
          <img className="WeatherPix" id="jendela-rumah" src={jendela} alt="" />
        </div>
        <div className="row justify-content-center align-items-center">
          {overlay ? <Overlay /> : null}
          {isOpenPhoneMobile ? (
            <ResponsiveNews
              jam={jam}
              minute={minute}
              close={updateCloseMobile}
            />
          ) : null}
          {lulus ? (
            <Lulus
              name={props.name}
              major={props.major}
              gender={props.gender}
              backToMainMenu={props.backToMainMenu}
            />
          ) : null}
          {isOpenEvaluation ? (
            <Evaluation
              attendanceListCourse={attendanceListCourse}
              infoCourse={infoCourse}
              tingkatBelajar={tingkatBelajar}
              tingkatBelajarKampus={tingkatBelajarKampus}
              mingguKe={mingguKe}
              name={props.name}
              major={props.major}
              resetProgressMingguan={resetProgressMingguan}
              addMoney={addMoney}
              updateMoney={updateMoney}
              money={money}
            />
          ) : null}

          <div id="left-column" className="col align-self-end mx-auto">
            <button
              onClick={updateOpenInventory_IN}
              id="open-inventory-button"
              className="btn-primary left-btnzoom text-center mx-2"
            >
              <img className="w-75" src={BackpackIcon} alt="" />
            </button>
            {isOnMobile ? <News jam={jam} minute={minute} /> : null}
            {!isOnMobile ? (
              <div className="text-center">
                <button
                  onClick={updateOpenMobile}
                  style={{
                    width: "40%",
                    backgroundColor: "#32568f",
                    color: "white",
                    borderRadius: "10px"
                  }}
                >
                  Open Phone
                </button>
              </div>
            ) : null}
            <div className="text-center"></div>
          </div>
          <div
            id="center-column"
            className="col-6 text-center mx-3 containerBox w-25"
          >
            <Student
              name={props.name}
              status={notif}
              hour={hour}
              statusStudent={statusStudent}
              gender={props.gender}
              jendela={jendela}
              cuaca={cuaca}
            />
          </div>
          <div id="right-column" className="col mx-6">
            <StatusBar
              updateNotif={updateNotifikasi}
              getStudyValue={getValueStudy}
              progress={progress}
              doAction={doAction}
            />
          </div>
        </div>
      </div>

      <div className="container" id="supermarketmenu">
        {isOpenSupermarket ? (
          <Supermarket
            updateOpenSupermarketMenu={updateOpenSupermarketMenu}
            supermarketItemList={supermarketItemList}
            buyItem={buyItem}
          />
        ) : null}
      </div>

      <div className="row justify-content-center align-items-center">
        {inCafe ? (
          <Cafe
            updateOpenCafe={updateOpenCafe}
            switchLeft_Cafe={switchLeft_Cafe}
            switchRight_Cafe={switchRight_Cafe}
            cafeItemList={cafeItemList}
            indexItemCafe={indexItemCafe}
            buyDrinks={buyDrinks}
          />
        ) : null}
      </div>
      <div className="container" id="HUD">
        <div className="row justify-content-center align-items-center">
          <div className="col">
            {isOpenInventory ? (
              <Inventory
                updateOpenInventory_OUT={updateOpenInventory_OUT}
                userInventory={inventory}
              />
            ) : null}
            <div
              className="col-2 align-items-center text-center mx-2 w-75"
              id="GoToPlaceCard"
            >
              <GoTo
                studentLocation={location}
                onclick={changeLocation}
                inSupermarket={inSupermarket}
                updateGoToSupermarket_OUT={updateGoToSupermarket_OUT}
                updateGoToSupermarket_IN={updateGoToSupermarket_IN}
                updateOpenCafe_IN={updateOpenCafe_IN}
                updateOpenCafe_OUT={updateOpenCafe_OUT}
                isOnMobile={isOnMobile}
              />
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column" id="centerGreetings">
              <div className="headerGreeting">
                <h1 className="text-center"> {studentRegards()}</h1>
              </div>
              <div className="headerGreetingQuotes">
                <p className="text-center">
                  "When you start each day with a grateful heart, light
                  illuminate from within"
                </p>
              </div>

              <div className="col my-1 mx-1">
                <Time
                  listHari={listHari}
                  currentHari={currentHari}
                  hour={hour}
                  minute={minute}
                />
              </div>
            </div>
            <div className="col">
              {openProgressCourse ? (
                <ProgressCourse
                  major={props.major}
                  course={infoCourse}
                  name={props.name}
                  getInfo_course={getInfoCourse}
                  updatePM={updateOpenCourseAccess}
                />
              ) : null}
              {openProfile ? (
                <Profile
                  updateProfile={updateProfileAccess}
                  name={props.name}
                  major={props.major}
                  gender={props.gender}
                />
              ) : null}
              <Addtion
                updatePM={updateOpenCourseAccess}
                updateProfile={updateProfileAccess}
                updateOpenSupermarketMenu={updateOpenSupermarketMenu}
              />
            </div>
          </div>
          <div className="col text-center">
            <Money money={money} />
          </div>
        </div>
        }{" "}
      </div>
    </div>
  );
}
