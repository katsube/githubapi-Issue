/**
 * Issueを作成する
 *
 * パラメーターの詳細は以下を参照
 * https://docs.github.com/en/rest/reference/issues#create-an-issue
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
  auth: process.env.GITHUB_TOKEN
});

(async ()=>{
  const res = await octokit.rest.issues.create({
    owner: "katsube",               // リポジトリのオーナー（ユーザー名）
    repo: "test",                   // リポジトリ名
    title: "Hello world",           // タイトル
    body: "This is a test issue",   // 本文
    assignees: ["katsube"],         // 担当者
    labels: ["その他"],             // ラベル
    // milestone: 1                 // マイルストーン
  });

  console.log(res)
})();
