// // 現在地を取得
// navigator.geolocation.getCurrentPosition(
//   // 取得成功時の関数
//   geoSuccess,
//   // 取得失敗時の関数
//   geoError,
//   {
//     // 位置情報取得のタイムアウト時間
//     timeout: 4000,
//     // 位置情報の有効期限
//     maximumAge: 0,
//     // 精度の高い位置情報を取得するか
//     enableHighAccuracy: false
//   });

// // 取得成功時の関数
// function geoSuccess(position) {
//   // 緯度
//   const lat = parseFloat(position.coords.latitude);
//   console.log(typeof(lat));
//   // => number
//   // 経度
//   const lng = parseFloat(position.coords.longitude);
//   console.log(typeof(lng));
//   // => number

//   // // 誤差
//   // console.log(Math.floor(position.coords.accuracy));
//   // // 高度
//   // console.log(position.coords.altitude);
//   // // 高度の誤差
//   // console.log(position.coords.altitudeAccuracy);
//   // // 方角
//   // console.log(position.coords.heading);
//   // // 移動速度
//   // console.log(position.coords.speed);
//   // // 取得日時
//   // console.log(new Date(position.timestamp));
//   // // => タイムスタンプから現在日時を取得

//   setMap(lat, lng);
// };

// // 取得失敗時の関数
// function geoError(error) {
//   const errors = [
//     error.message,
//     '位置情報の取得を許可されていません',
//     '位置情報の取得に失敗しました',
//     '位置情報を取得中にタイムアウトしました'
//   ];
//   alert(errors[error.code]);
// };

// // Google Maps
// function setMap(lat, lng) {
//   // 緯度経度を設定
//   const latlng = { lat: lat, lng: lng }
//   // マップを設定
//   const map = new google.maps.Map(document.getElementById('map'), {
//     center: latlng,
//     zoom: 16
//   });
//   // マーカーを設定
//   const marker = new google.maps.Marker({
//     map: map,
//     draggale: true,
//     animation: google.maps.Animation.DROP,
//     position: latlng
//   });
// };

// 現在地を定期的に取得
// getCurrentPosition => watchPosition
navigator.geolocation.watchPosition(geoSuccess, geoError, { timeout: 4000, maximumAge: 0, enableHighAccuracy: false });

// 取得成功時の関数
function geoSuccess(position) {
  const lat = parseFloat(position.coords.latitude);
  const lng = parseFloat(position.coords.longitude);
  setMap(lat, lng);
};

// 取得失敗時の関数
function geoError(error) {
  const errors = [
    error.message,
    '位置情報の取得を許可されていません',
    '位置情報の取得に失敗しました',
    '位置情報を取得中にタイムアウトしました'
  ];
  alert(errors[error.code]);
};

// Google Maps
function setMap(lat, lng) {
  const latlng = { lat: lat, lng: lng }
  const map = new google.maps.Map(document.getElementById('map'), {
    center: latlng,
    zoom: 16
  });
  const marker = new google.maps.Marker({
    map: map,
    draggale: true,
    animation: google.maps.Animation.DROP,
    position: latlng
  });
};
