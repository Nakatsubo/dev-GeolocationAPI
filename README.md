# README

# Geolocation API

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
|timeout|位置情報の取得のタイムアウト時間|数値|
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

## サンプル

```

```
