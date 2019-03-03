# 目次
- [動画による解説](#動画による解説)
- [使い方](#使い方)
- [完成イメージ](#完成イメージ)
- [必要なアカウント](#必要なアカウント)

---

# 動画による解説
下記のリンク先動画で手順を再現しています  
https://youtu.be/aByTfznhBWs

---

# 使い方

勉強会用の LINE BOT ソースコード です。  
今回は、codenvy(cloud IDE)と、heroku(PaaS)を使用して開発します。  
所要時間は、慣れた人なら10min程度です。  

---

# 完成イメージ
<ul>
  <li>
  今回作成するのは、自動で応答してくれるLINE BOTです<br>
  <img src="https://github.com/x-hack-git/line-messaging-api/blob/master/image/sample_image.gif" height="320px">
  </li>
  <li>
  データベースに接続するとクイズだって作れます<br>
  <img src="https://github.com/x-hack-git/line-messaging-api/blob/master/image/quiz-dayo.gif" height="420px">
  </li>
</ul>

---

# 必要なアカウント

下記のソフトウェアとアカウントが必要なので、事前に取得しておいてください  

- Googleアカウント

  アカウントがあると各種ログインが簡単になります  
  https://accounts.google.com/

- Chromeブラウザ
  ブラウザはChromeを利用してください  
  https://www.google.com/intl/ja_ALL/chrome/

- codenvyアカウント
  cloud IDEです  
  https://codenvy.io/site/login

- Herokuアカウント
  サーバーはherokuを利用します  
  https://id.heroku.com/login

- LINEアカウント
  LINE Messaging API利用登録  
  https://developers.line.me/ja/

---

## LINE Developer Consoleでの作業

- LINE Developers
https://developers.line.biz/ja/

### LINEでの作業
- プロバイダ追加する
- チャネル追加する
- LINE_CHANNEL_SECRET の取得
- LINE_CHANNEL_ACCESS_TOKEN の取得
- Webhook送信 利用するに設定
- Webhook URLをセットする(後述)

---

## Codenvyでの作業

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
  - 貼り付けたら「Create」を実行します

#### STEP-4 ターミナルでの作業

  1. ターミナルで下記のコマンドを実行
  ```
  $ curl https://cli-assets.heroku.com/install.sh | sh
  $ cd line-messaging-api  
  ```

  2. emailアドレスとpasswordでherokuサービスにログインします
  ```
  $ heroku login --interactive
  # 出力結果
  # heroku: Enter your login credentials
  # Email: example@gmail.com
  # Password: *************
  # Logged in as matsusin0413@gmail.com
  ```

  3. heorkuにアプリを追加
  ```
  $ heroku create your-app-name
  $ git push heroku master
  ```

  4. 修正したら変更をHerokuに反映させる必要があるので、下記のコマンドを実行します
  ```
  $ sh git.sh
  ```

## Herokuでの作業

- herokuダッシュボードでConfigをセットする

  1. LINE_CHANNEL_SECRETのセット
  2. LINE_CHANNEL_ACCESS_TOKENのセット

---

# 補足

### 天気APIを使う場合
1. こちらでアカウント作成 → https://openweathermap.org/api
2. API Keyを取得する
3. herokuサーバーにAPI Keyを登録
```
$ heroku config:set WEATHER_API_KEY=""
```

### ぐるなびAPI
https://api.gnavi.co.jp/api/tools/?apitype=RestSearchAPI

### アンケート
https://docs.google.com/forms/d/13tuqpEKT9VVqTSwZB5ml_kAYfDo0UH63VWIT9eBbob0
