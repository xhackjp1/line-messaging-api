# 目次
- [動画による解説](#動画による解説)
- [使い方](#使い方)
- [完成イメージ](#完成イメージ)
- [必要なアカウント](#必要なアカウント)
  - [Chrome](#chrome)
  - [Google](#google)
  - [Heroku](#heroku)
  - [LINE](#line)
    - [LINE Developerでの作業](#lineの作業) 
  - [github](#github)
  - [Codenvy](#codenvy)
    - [Codenvyでの作業](#codenvyの作業)

# 動画による解説
下記のリンク先動画で手順を再現しています<br>
https://youtu.be/aByTfznhBWs

---

# 使い方

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

下記のソフトウェアとアカウントが必要なので、事前に取得しておいてください

## Chrome

ブラウザはChromeを利用してください<br>
https://www.google.com/intl/ja_ALL/chrome/

## Google

アカウントがあると各種ログインが簡単になります<br>
https://accounts.google.com/

## Heroku

サーバーはherokuを利用します<br>
https://id.heroku.com/login

## LINE

LINE Messaging API利用登録<br>
https://developers.line.me/ja/

  ### LINEの作業
  - プロバイダ追加する
  - チャネル追加する
  - LINE_CHANNEL_SECRETの取得
  - LINE_CHANNEL_ACCESS_TOKENの取得
  - Webhook送信 利用するに設定
  - Webhook URLをセットする(後述)

## github

アカウント作成<br>
https://github.com/

---

## Codenvy

アカウント登録
https://codenvy.io/site/login

  ### Codenvyの作業 

  #### STEP-1 ワークスペース作成

  - サイドバーからcreate workspaceを選択
  <img src="https://github.com/x-hack-git/line-messaging-api/blob/master/image/create_workspace.png" height="320px">

  #### STEP-2 STACKを選択する

  - 今回はNodeを選択してください
  <img src="https://github.com/x-hack-git/line-messaging-api/blob/master/image/select_node.png" height="320px">

  #### STEP-3 PROJECTSでGitURLを指定する

  - 以下のURLをコピペして貼り付けましょう
  ```
  https://github.com/x-hack-git/line-messaging-api.git
  ```

  #### STEP-4 heroku CLI のインストール

  - 以下のコマンドを実行してみましょう</br>
  ```
  $ curl https://cli-assets.heroku.com/install.sh | sh
  ```

  #### STEP-5 LINEのAPIkeyをherokuにセットする

  - ターミナルで下記のコマンドを実行
  ```
  $ cd line-messaging-api
  $ heroku login
  $ heroku git:remote -a [アプリ名]
  $ heroku config:set LINE_CHANNEL_SECRET="[チャンネルシークレット]"
  $ heroku config:set LINE_CHANNEL_ACCESS_TOKEN="[チャンネルアクセストークン]"
  $ git push heroku master
  ```

  #### STEP-6 コードを修正してherokuにpushする

  - 修正したら変更をHerokuに反映させる必要があるので、下記のコマンドを実行します

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

### アンケート
https://docs.google.com/forms/d/13tuqpEKT9VVqTSwZB5ml_kAYfDo0UH63VWIT9eBbob0
