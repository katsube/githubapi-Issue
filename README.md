# GitHubのIssueをAPI経由で操作するサンプル

## 準備
### 必要なファイルをインストール
Node.jsをインストール後、GitHubから本リポジトリをclone、必要なモジュールを入れます。
```shellsession
$ git clone https://github.com/katsube/githubapi-Issue.git
$ cd githubapi-Issue
$ npm install
```

### GitHubのアクセストークンを保存
`.env`ファイルを作成しアクセストークンを保存します。
```ini
GITHUB_TOKEN="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

アクセストークンは[ここ](https://github.com/settings/tokens)から作成できます。

## 実行
準備が整ったらnodeコマンドで各スクリプトを実行します。
```shellsession
$ node createIssue.js
$ node getIssue.js
$ node listIssue.js
```