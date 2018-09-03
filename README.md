# xhack-bot

勉強会用のBOTソースコードです。

# クイックスタート（herokuにデプロイする場合）

```
git clone this
git remote add heroku <Your_heroku_app_git_url>
heroku config:set LINE_CHANNEL_SECRET="<Your LINE_CHANNEL_SECRET>"
heroku config:set LINE_CHANNEL_ACCESS_TOKEN="<Your LINE_CHANNEL_ACCESS_TOKEN>"
git push heroku master
```
