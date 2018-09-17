# 目次
- [動画による解説](#動画による解説)
- [完成イメージ](#完成イメージ)
- [必要なアカウント](#必要なアカウント)
- [Herokuアプリ作成](#Herokuアプリ作成)
- [LINEチャネル作成](#LINEチャネル作成)
- [Codenvyワークスペース作成](#Codenvyワークスペース作成)
- [Codenvyでの作業](#Codenvyでの作業)
- [herokuと連携しLINE Developersで取得した値をherokuにセットする](#herokuと連携し、LINE Developersで取得した値をherokuにセットする)

# 動画による解説
下記のリンク先動画で手順を再現しています<br>
https://youtu.be/aByTfznhBWs

---

# xhack-bot

勉強会用の LINE BOT ソースコード です。

# 完成イメージ
<ul>
  <li>
  今回作成するのは、自動で応答してくれるLINE BOTです</br>
  <img src="https://github.com/x-hack-git/line-messaging-api/blob/master/image/sample_image.gif" height="320px">
  </li>
  <li>
  データベースに接続するとクイズだって作れます</br>
  <img src="https://github.com/x-hack-git/line-messaging-api/blob/master/image/quiz-dayo.gif" height="420px">
  </li>
</ul>

---

# 必要なアカウント

## Chromeインストール(必要があれば)

https://www.google.co.jp/chrome/?brand=CHBD&gclid=Cj0KCQjwtb_bBRCFARIsAO5fVvGSVp4jgIAY-Chnd2DUMxWERGGF0xRxr3dZLYHwZ1g92ohYH2MCAc0aAtv1EALw_wcB&gclsrc=aw.ds&dclid=CO6v1pLW6NwCFVoxKgod8XYO3Q

## gmailアカウント取得(必要があれば)

https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp

# Herokuアプリ作成

Herokuのサービスにログインし、アカウントを作成します

## Heroku アカウントの利用登録
https://id.heroku.com/login

今回利用するクラウドサーバーです。</br>
自分が書いたプログラムを、クラウド上で実行してくれるサービスです。

## やること
- アプリを作成する
- アプリのURLを取得する

# LINEチャネル作成

## アカウント作成画面付き解説
https://codezine.jp/article/detail/10658

## LINE Messaging API の利用登録
https://developers.line.me/ja/

LINE Messaging APIを利用するために必要です。</br>
Botアカウントを作成し、herokuサーバーと連携します。

## やること
- 友達追加する
- LINE_CHANNEL_SECRETの取得
- LINE_CHANNEL_ACCESS_TOKENの取得
- Webhook送信 利用するに設定
- Webhook URLをセットする(後述)
- アプリケーションを一つ作成

# Codenvyワークスペース作成

codenvyアカウント登録
https://codenvy.io/site/login

ブラウザ上で動作する開発環境です。</br>
開発環境を構築する際の、複雑で面倒なインストール作業を省略できます。</br>
実際にコードを書いてプログラミングをし、herokuサーバーにアップロードします。

## やること
- herokuと連携する
- LINE Messaging APIを利用するための準備をする

## githubアカウント
ソースコードを公開するためのサービスです。</br>
複数人で同じプロジェクトを開発するときにお互いの編集作業を連携するのに便利です。</br>
また、クラウドサーバーにソースコードをアップするのにも使えます。

### やること
特になし

---

# Codenvyでの作業

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

- 以下のコマンドを実行してみましょう</br>

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

# コードを修正してherokuにpushする
修正したら変更をHerokuに反映させる必要があるので、下記のコマンドを実行します
```
$ sh git.sh
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
