# GitHubのIssueをAPI経由で操作するサンプル

[octokit.js](https://github.com/octokit/octokit.js)を利用しGitHub Issueを操作する次のサンプルが含まれます。

<dl>
    <dt>createIssue.js</dt><dd>Issueを新規作成</dd>
    <dt>getIssue.js</dt><dd>Issueの詳細情報を取得</dd>
    <dt>listIssue.js</dt><dd>Issueの一覧を取得</dd>
    <dt>updateIssue.js</dt><dd>Issueを更新</dd>
</dl>

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
$ node updateIssue.js
```