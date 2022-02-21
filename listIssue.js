/**
 * Issueの一覧を取得する
 *
 * パラメーターの詳細は以下を参照
 * https://docs.github.com/en/rest/reference/issues
 */

//------------------------------------------
// モジュール
//------------------------------------------
const { Octokit } = require('octokit');

// .envを環境変数化
require('dotenv').config();

//------------------------------------------
// Issue作成
//------------------------------------------
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN  // 認証しない場合は「公開リポジトリ」のみ取得可能
});

(async ()=>{
  // Issue一覧を取得
  const issues = await octokit.rest.issues.list({
    owner: "katsube",       // リポジトリのオーナー（ユーザー名）
    repo: "test",           // リポジトリ名
    state: 'all',           // Issueの状態（open, closed, all） Default: open
    sort: 'created',        // ソート項目（created, updated, comments） Default: created
    direction: 'asc',       // ソート順（asc, desc） Default: desc
    per_page: 10,           // 1ページあたりの表示件数（1〜100） Default: 30
    page: 1,                // ページ番号 Default: 1
  });

  // 必要なデータを取り出す
  const data = issues.data.map(issue => {
      return([
        issue.number,          // Issue番号
        issue.title,           // タイトル
        issue.user.login,      // 作成者
        issue.assignee.login,  // 担当者
      ])
    })

  // 表示
  console.log(data)
})();
