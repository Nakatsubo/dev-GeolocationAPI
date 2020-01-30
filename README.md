# README

# Geolocation API
<a href="https://developers.google.com/maps/documentation/javascript/reference" target="_blank" rel="noopener">公式ドキュメント</a>

## 位置情報を取得

|メソッド|振る舞い|戻り値|
|-----|-----|-----|
|navigator.geolocation.getCurrentPosition(成功時の関数, 失敗時の関数)|位置情報を取得|なし|
|navigator.geolocation.watchPosition(成功時の関数, 失敗時の関数)|位置情報を監視、取得|なし|
|navigator.geolocation.clearWatch(成功時の関数, 失敗時の関数)|位置情報の監視を停止|なし|

|プロパティ|振る舞い|データ型|
|-----|-----|-----|
|position.coords.latitude|緯度|数値|
|position.coords.longitude|経度|数値|
|position.coords.accuracy|緯度経度の誤差|数値|
|position.coords.altitude|高度|数値|
|position.coords.altitudeAccuracy|高度の誤差|数値|
|position.coords.heading|方角|数値|
|position.coords.speed|移動速度|数値|
|position.timestamp|取得日時|数値|

### オプション

|オプション|振る舞い|データ型|
|-----|-----|-----|
|timeout|位置情報取得のタイムアウト時間|数値|
|maximumAge|位置情報の有効期限|数値|
|enable|精度の高い位置情報を取得するか|真偽値|

### エラーコード

|コード|データ型|
|-----|-----|
|0|不明なエラー|
|1|ユーザーが位置情報の取得をブロック|
|2|位置情報を取得できない|
|3|位置情報の取得処理がタイムアウト|
|message|エラーメッセージ|

## 現在地情報を取得するサンプル

```
HTML
<div id="map"></div>
// YOUR_API_KEY には取得したAPIキーを入れる
// callback には指定した関数を入れる
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=setMap" async defer></script>

CSS
#map {
  width: 100%;
  height: 400px;
}

JavaScript
// 現在地を取得
navigator.geolocation.getCurrentPosition(
  // 取得成功時の関数
  geoSuccess,
  // 取得失敗時の関数
  geoError,
  {
    // 位置情報取得のタイムアウト時間
    timeout: 4000,
    // 位置情報の有効期限
    maximumAge: 0,
    // 精度の高い位置情報を取得するか
    enableHighAccuracy: false
  });

// 取得成功時の関数
function geoSuccess(position) {
  // 緯度
  const lat = parseFloat(position.coords.latitude);
  console.log(typeof(lat));
  // => number
  // 経度
  const lng = parseFloat(position.coords.longitude);
  console.log(typeof(lng));
  // => number

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
  // 緯度経度を設定
  const latlng = { lat: lat, lng: lng }
  // マップを設定
  const map = new google.maps.Map(document.getElementById('map'), {
    center: latlng,
    zoom: 16
  });
  // マーカーを設定
  const marker = new google.maps.Marker({
    map: map,
    draggale: true,
    animation: google.maps.Animation.DROP,
    position: latlng
  });
};
```

## 現在地情報を定期的に取得するサンプル

```
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
```
