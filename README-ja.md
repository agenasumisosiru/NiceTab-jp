# NiceTab 日本語版

![NiceTab](https://github.com/user-attachments/assets/6099f21e-fc0a-4bb5-8280-e497be3fb0ae)

<p>
  日本語 | <a href="./README.md">English</a> | <a href="./README-zh.md">中文</a> | <a href="./README-ru.md">Русский</a>
</p>

NiceTab は、OneTab、Toby、SessionBuddy などの代替として使える、ブラウザーのタブ管理拡張機能です。このリポジトリは上流版をもとに日本語表示を追加するフォークです。

## 日本語対応フォークについて

日本語の管理画面や Chrome の拡張機能メニューを利用するには、このフォークのブランチからビルドした版をインストールしてください。上流版の Chrome ウェブストア配布物には、このフォークの翻訳変更は自動では反映されません。

詳しいビルド・インストール手順は [日本語ユーザーガイド](./GUIDE-ja.md) を参照してください。

## 主な機能

- 全タブ、現在のタブ、他のタブ、左右のタブ、タブグループを一括保存
- カテゴリ・グループ・タブの整理、検索、並べ替え、複製、重複排除
- ブラウザーのタブグループとの連携
- タブの復元、休止、スナップショット、ごみ箱
- NiceTab、OneTab、Toby、SessionBuddy、KepTab 形式のインポート／エクスポート
- Gists（GitHub / Gitee）および WebDAV へのリモート同期
- カスタム新しいタブページ、ライト／ダークテーマ、テーマカラー
- 日本語、簡体字中国語、繁体字中国語、英語、ロシア語の表示

## 開発

```bash
pnpm install
pnpm compile
pnpm test
pnpm build
```

Chrome 用ビルドは `pnpm build` で作成できます。ビルド後は Chrome の `chrome://extensions` でデベロッパーモードを有効にし、生成された拡張機能フォルダーを読み込んでください。

## 上流プロジェクト

[web-dahuyou/NiceTab](https://github.com/web-dahuyou/NiceTab) を基にしています。ライセンスは上流プロジェクトの GPL-3.0 に従います。
