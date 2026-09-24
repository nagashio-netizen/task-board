# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクトの状態

現在このリポジトリは空です。技術スタックやアーキテクチャが決まり、コードが追加された段階で、このファイルにビルド/テスト/実行コマンドと全体構成の説明を追記してください。

## Git運用ルール

- このリポジトリはまだ `git init` されていません。作業を始める前に `git init` し、GitHub上にリモートリポジトリを作成して `git remote add origin <URL>` で紐付けてください。
- **コードを変更したら、その都度コミットしてGitHubにプッシュすること。** 変更を溜めずに、意味のある単位（1つの修正・1つの機能追加など）でコミットし、都度 `git push` する。
- コミットメッセージは変更内容が分かるように簡潔に書く。
- push前に `git status` で差分を確認し、意図しないファイル（秘密情報・認証情報を含むファイルなど）が含まれていないか確認する。
- force push（`git push --force` 等)や `git reset --hard` など、履歴やリモートの内容を破壊する操作は、ユーザーの明示的な許可なく行わない。
