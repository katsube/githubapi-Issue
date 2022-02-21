/**
 * Issueを更新する
 *
 * パラメーターの詳細は以下を参照
 * https://docs.github.com/en/rest/reference/issues#update-an-issue
 */

//------------------------------------------
// モジュール
//------------------------------------------
const { Octokit } = require('octokit');

// .envを環境変数化
require('dotenv').config();

//------------------------------------------
// Issue更新
//------------------------------------------
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN    // 認証しない場合は「公開リポジトリ」のみ
});

(async ()=>{
  const res = await octokit.rest.issues.update({
    owner: "katsube",               // リポジトリのオーナー（ユーザー名）
    repo: "test",                   // リポジトリ名
    issue_number: 1,                // Issue番号

    // ↓以下は更新したい項目だけ指定する
    title: "Nice to meet you",      // タイトル
    body: "ほげほげ",               // 本文
    assignee: null,                 // 担当者（nullだと削除）
    labels: [],                     // ラベル（空配だと削除）
    state: "closed",                // Issueの状態（open, closed）
    // milestone: 1
  });

  console.log(res)
})();
