# 各種パッケージ

### config
設定をファイルから取り込みたい

### eslint
 - コーディング規約を作る
 - タイプミスを機械的にチェックしたい
 - ci で lint 実行して、タイプミスがあれば差し戻す

### webpack
 - コードを最適化
 - 後方互換

---
# webpack

### webpack-cli
cli 経由で webpack 実行するのに必要

### webpack-dev-server
ローカルでの動確に使う

### copy-webpack-plugin
`/dist` (ビルドディレクトリ) に html とかも入れたい

---
# ESLint

### ルール
 - インデントはスペース4つ
 - 禁止: ダブルクォート
 - 禁止: 文末のセミコロン

---
# CI
1. checkout
2. node セットアップ
3. キャッシュリストア（予定）
4. npm install
5. キャッシュセーブ（予定、キーは `package.json` の checksum とか？）
6. Lint