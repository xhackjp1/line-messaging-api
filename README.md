# 動画による解説
下記のリンク先動画で手順を再現しています<br>
https://youtu.be/aByTfznhBWs

---

# xhack-bot

勉強会用のBOTソースコードです。

今回作成するのは、自動で応答してくれるLINE BOTです</br>
<img src="https://github.com/x-hack-git/line-messaging-api/blob/master/image/sample_image.gif" height="320px">

---

# 必要なアカウント

## Chromeインストール(必要があれば)

https://www.google.co.jp/chrome/?brand=CHBD&gclid=Cj0KCQjwtb_bBRCFARIsAO5fVvGSVp4jgIAY-Chnd2DUMxWERGGF0xRxr3dZLYHwZ1g92ohYH2MCAc0aAtv1EALw_wcB&gclsrc=aw.ds&dclid=CO6v1pLW6NwCFVoxKgod8XYO3Q

## gmailアカウント取得(必要があれば)

https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp

## Heroku アカウント

Heroku アカウントの利用登録
https://id.heroku.com/login

今回利用するクラウドサーバーです。</br>
自分が書いたプログラムを、クラウド上で実行してくれるサービスです。

### やること
- アプリを作成する
- アプリのURLを取得する

## LINE Developer アカウント

アカウント作成画面付き解説
https://codezine.jp/article/detail/10658

LINE Messaging API の利用登録
https://developers.line.me/ja/

LINE Messaging APIを利用するために必要です。</br>
Botアカウントを作成し、herokuサーバーと連携します。

### やること
- 友達追加する
- LINE_CHANNEL_SECRETの取得
- LINE_CHANNEL_ACCESS_TOKENの取得
- Webhook送信 利用するに設定
- Webhook URLをセットする(後述)
- アプリケーションを一つ作成

## codenvy アカウント
codenvyアカウント登録
https://codenvy.io/site/login

ブラウザ上で動作する開発環境です。</br>
開発環境を構築する際の、複雑で面倒なインストール作業を省略できます。</br>
実際にコードを書いてプログラミングをし、herokuサーバーにアップロードします。

### やること
- herokuと連携する
- LINE Messaging APIを利用するための準備をする

## githubアカウント
ソースコードを公開するためのサービスです。</br>
複数人で同じプロジェクトを開発するときにお互いの編集作業を連携するのに便利です。</br>
また、クラウドサーバーにソースコードをアップするのにも使えます。

### やること
特になし

---

# codenvyでの作業

## codenvyでワークスペース作成

- サイドバーからcreate workspaceを選択
<img src="https://github.com/x-hack-git/line-messaging-api/blob/master/image/create_workspace.png" height="320px">

### STEP-1 STACKを選択する

- 今回はNodeを選択してください
<img src="https://github.com/x-hack-git/line-messaging-api/blob/master/image/select_node.png" height="320px">

### STEP-2 PROJECTSでGitURLを指定する

- 以下のURLをコピペして貼り付けましょう
`https://github.com/x-hack-git/line-messaging-api.git`
<img src="https://github.com/x-hack-git/line-messaging-api/blob/master/image/select_repo.png" max-height="320px">

### STEP-3 heroku CLI のインストール

- 以下のコマンドを実行してみましょう

`$ curl https://cli-assets.heroku.com/install.sh | sh`
<img src="https://github.com/x-hack-git/line-messaging-api/blob/master/image/install_heroku_cli.png" height="320px">

# herokuと連携し、LINE Developersで取得した値をherokuにセットする

```
$ cd line-messaging-api

$ curl https://cli-assets.heroku.com/install.sh | sh

$ heroku login
$ heroku git:remote -a [アプリ名]
$ heroku config:set LINE_CHANNEL_SECRET="[チャンネルシークレット]"
$ heroku config:set LINE_CHANNEL_ACCESS_TOKEN="[チャンネルアクセストークン]"

$ git push heroku master
```

---

# 補足

### 天気APIを使う場合
1. こちらでアカウント作成 → https://openweathermap.org/api
2. API Keyを取得する
3. herokuサーバーにAPI Keyを登録
```
$ heroku config:set WEATHER_API_KEY=""
```

# コードを修正してherokuにpushする

gitの初期設定(一度だけ)
```
$ git config user.name "Your Name"
$ git config user.email "youremail@example.com"
```

herokuサーバーへのpush
```
$ git add .
$ git commit -m "update"
$ git push heroku master
```

# 画像認識AIとの接続
## 概要
- [IBM Cloud Visual Recognition](https://console.bluemix.net/docs/services/visual-recognition/index.html#-)を使い、画像の種類を返すLINE BOTを作成します。
- [API reference](https://www.ibm.com/watson/developercloud/visual-recognition/api/v3/node.html?node#general-api)

## 準備
- IBM Cloudのアカウント作成
  - [こちら](https://console.bluemix.net/docs/services/visual-recognition/getting-started.html#-)に従い作成
- `npm install --save watson-developer-cloud`

## 実行
### まずcurlでAPIを試す
```
curl -X POST -u -H 'Accept-Language:ja' "apikey:{your-api-key}" --form "images_file=@./image/fruitbowl.jpg" "https://gateway.watsonplatform.net/visual-recognition/api/v3/classify?version=2018-03-19"
```
### 次にnodeで試す
`node IBMImageRecognition.js`

### LINE BOTを改造する
