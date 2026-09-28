# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

React + Vite で作ったタスクボードアプリ。タスクの追加・編集・完了切り替え・削除ができ、データはブラウザの localStorage（キー `task-board-tasks`）に保存される。

- `src/App.jsx` — アプリ本体（状態管理・画面すべて）
- `src/App.css` / `src/index.css` — スタイル
- `vite.config.js` — `base: '/task-board/'`（GitHub Pages のサブパス用。リポジトリ名を変えたらここも変える）
- `.github/workflows/deploy.yml` — main への push で GitHub Pages に自動デプロイ

## コマンド

- `npm install` — 依存関係のインストール
- `npm run dev` — 開発サーバー起動（http://localhost:5173/task-board/）
- `npm run build` — 本番ビルド（`dist/` に出力）
- `npm run preview` — ビルド結果をローカルで確認

テストは未導入。

## Git運用ルール

- リモートは `https://github.com/nagashio-netizen/task-board.git`（ブランチ `main`）。
- **コードを変更したら、その都度コミットしてGitHubにプッシュすること。** 変更を溜めずに、意味のある単位（1つの修正・1つの機能追加など）でコミットし、都度 `git push` する。
- コミットメッセージは変更内容が分かるように簡潔に書く。
- push前に `git status` で差分を確認し、意図しないファイル（秘密情報・認証情報を含むファイルなど）が含まれていないか確認する。
- force push（`git push --force` 等)や `git reset --hard` など、履歴やリモートの内容を破壊する操作は、ユーザーの明示的な許可なく行わない。
