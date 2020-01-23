// 現在地を取得
navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

// 取得成功時の関数
function geoSuccess(position) {
  // 緯度
  const lat = position.coords.latitude;
  console.log(lat);
  // 経度
  const lng = position.coords.longitude;
  console.log(lng);

  // // 誤差
  // console.log(Math.floor(position.coords.accuracy));
  // // 高度
  // console.log(position.coords.altitude);
  // // 高度の誤差
  // console.log(position.coords.altitudeAccuracy);
  // // 方角
  // console.log(position.coords.heading);
  // // 移動速度
  // console.log(position.coords.speed);
  // // 取得日時
  // console.log(new Date(position.timestamp));
  // // => タイムスタンプから現在日時を取得

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
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: lng},
    zoom: 8
  });
};

// // Google Maps
// function setMap(lat, lng) {
//   // 緯度経度を設定
//   const latlng = new google.maps.LatLng(lat, lng);
//   console.log(latlng);
//   // マーカーを追加
//   const marker = new google.maps.Marker({
//     map: map,
//     draggale: true,
//     animation: google.maps.Animation.DROP,
//     position: latlng
//   });
//   console.log(marker);
// };
