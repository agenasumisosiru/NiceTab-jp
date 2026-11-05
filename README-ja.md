# NiceTab 日本語版

![NiceTab](https://github.com/user-attachments/assets/6099f21e-fc0a-4bb5-8280-e497be3fb0ae)

<p>
  日本語 | <a href="./README.md">English</a> | <a href="./README-zh.md">中文</a> | <a href="./README-ru.md">Русский</a>
</p>

NiceTab は、OneTab、Toby、SessionBuddy などの代替として使える、ブラウザーのタブ管理拡張機能です。このフォークでは管理画面、Chrome の拡張機能メニュー、拡張機能名・説明を日本語化しています。

## Chrome 版のビルドとインストール

このフォークの日本語対応を利用するには、上流のウェブストア版ではなく、このリポジトリからビルドした版を読み込んでください。

```bash
git clone https://github.com/agenasumisosiru/NiceTab-jp.git
cd NiceTab-jp
git checkout feat/japanese-locale
pnpm install
pnpm build:chrome
```

ビルドが完了したら Chrome で `chrome://extensions` を開き、「デベロッパー モード」を有効にして「パッケージ化されていない拡張機能を読み込む」を選びます。`wxt build` が生成した Chrome の出力ディレクトリ（通常 `.output/chrome-mv3`）を指定してください。配布用 ZIP は `pnpm zip:chrome` で作成できます。

初回起動後、管理画面の「設定」から言語を「日本語」にしてください。ブラウザー言語が日本語の場合は初期設定時に自動判定されます。

## 主な機能

- 全タブ、現在のタブ、他のタブ、左右のタブ、タブグループを一括保存
- カテゴリ・グループ・タブの整理、検索、並べ替え、複製、重複排除
- ブラウザーのタブグループとの連携
- タブの復元、休止、スナップショット、ごみ箱
- NiceTab、OneTab、Toby、SessionBuddy、KepTab 形式のインポート／エクスポート
- Gists（GitHub / Gitee）および WebDAV へのリモート同期
- カスタム新しいタブページ、ライト／ダークテーマ、テーマカラー
- 日本語、簡体字中国語、繁体字中国語、英語、ロシア語の表示

詳しい操作方法は [日本語ユーザーガイド](./GUIDE-ja.md) を参照してください。

## 開発・検証

```bash
pnpm compile
pnpm test
pnpm lint:no-fix
pnpm build:chrome
```

Chrome 用ビルドは `pnpm build:chrome`、配布用 ZIP は `pnpm zip:chrome` です。Firefox 版は `pnpm build:firefox` で別途ビルドします。

## 上流プロジェクト

[web-dahuyou/NiceTab](https://github.com/web-dahuyou/NiceTab) を基にしています。ライセンスは上流プロジェクトの GPL-3.0 に従います。
