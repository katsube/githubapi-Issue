/**
 * Issueの詳細を取得する
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
  // Issueを取得
  const issue = await octokit.rest.issues.get({
    owner: 'katsube',       // リポジトリのオーナー（ユーザー名）
    repo: 'test',           // リポジトリ名
    issue_number: 1,        // Issue番号
  });

  // 必要なデータを取り出す
  console.log([
    issue.data.state,           // Issueの状態（open, closed）
    issue.data.number,          // Issue番号
    issue.data.title,           // タイトル
    issue.data.user.login,      // 作成者
    issue.data.assignee,        // 担当者
    issue.data.body,            // 本文
    issue.data.labels,          // ラベル
    issue.data.milestone,       // マイルストーン
    issue.data.created_at,      // 作成日時
    issue.data.updated_at,      // 更新日時
  ])
})();
