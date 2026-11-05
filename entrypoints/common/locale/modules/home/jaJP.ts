import { LocaleKey } from './zhCN';

const jaJP: Record<LocaleKey, string> = {
  'home.tag': 'タグ',
  'home.tabGroup': 'タブグループ',
  'home.tab': 'タブ',
  'home.stagingArea': '一時保存エリア',
  'home.tabGroupList': 'タブグループ一覧',
  'home.expand': '{name}を展開',
  'home.collapse': '{name}を折りたたむ',
  'home.expandAll': 'すべて展開',
  'home.collapseAll': 'すべて折りたたむ',
  'home.addTag': 'タグを作成',
  'home.clearAll': 'すべてクリア',
  'home.recoverAll': 'すべて復元',
  'home.emptyTip': 'データなし',
  'home.searchTagAndGroup': 'タグ / グループを検索',
  'home.searchTabAndUrl': 'タブと URL を検索',
  'home.moveAllGroupTo': 'すべてのグループを移動...',
  'home.createTabGroup': 'タブグループを作成',
  'home.helpInfo': 'ヘルプ',
  'home.removeTitle': '削除の確認',
  'home.removeDesc': '{type} を削除してもよろしいですか？',
  'home.clearTitle': 'クリアの確認',
  'home.clearDesc': '一覧をすべてクリアしてもよろしいですか？',
  'home.dedupTitle': '重複排除の確認',
  'home.dedupDesc': '重複排除を実行してもよろしいですか？',
  'home.recoverTitle': '復元の確認',
  'home.recoverDesc': '{type} を復元してもよろしいですか？',
  'home.recoverAllDesc': 'すべて復元してもよろしいですか？',
  'home.copyLinks': 'リンクをコピー',

  'home.tag.remove': '削除',
  'home.tag.recover': '復元',
  'home.tag.countInfo': '現在の件数',
  'home.tag.lock': 'タグをロック',
  'home.tag.unlock': 'タグのロックを解除',
  'home.tag.open': 'タグを開く',

  'home.tabGroup.add': 'タブグループを作成',
  'home.tabGroup.remove': '削除',
  'home.tabGroup.restore': '復元',
  'home.tabGroup.lock': 'ロック',
  'home.tabGroup.unlock': 'ロック解除',
  'home.tabGroup.star': '上部固定',
  'home.tabGroup.unstar': '固定解除',
  'home.tabGroup.recover': '復元',
  'home.tabGroup.open': 'グループを開く',
  'home.tabGroup.addGroupBefore': '前にグループを作成',
  'home.tabGroup.addGroupAfter': '後にグループを作成',
  'home.tabGroup.tabsSortAsc': 'タイトル順（昇順）',
  'home.tabGroup.tabsSortDesc': 'タイトル順（降順）',

  'home.tabGroup.count': `{count, plural,
    =0 {グループなし}
    one {# グループ}
    other {# グループ}
  }`,
  'home.tabGroup.name': 'グループ名',
  'home.tabGroup.createTime': '作成日時',
  'home.tab.count': `{count, plural,
    =0 {タブなし}
    one {# タブ}
    other {# タブ}
  }`,
  'home.tab.selectedCount': `{count, plural,
    =0 {タブなし}
    one {# タブ}
    other {# タブ}
  } を選択中`,
  'home.tab.name': '名前',
  'home.tab.url': 'URL',
  'home.tab.removeSelected': `{count, plural,
    =0 {タブを削除}
    one {1 件のタブを削除}
    other {# 件のタブを削除}
  }してもよろしいですか？`,

  'home.createSnapshot': 'スナップショットを作成',
  'home.createSnapshot.tip': '現在開いているタブをスナップショットとして保存',
  'home.restoreSnapshot': 'スナップショットを復元',

  'home.getPermission.tabGroups': '"tabGroups" 権限を取得',
  'home.getPermission.tabGroups.tip': 'ネイティブのタブグループ機能にアクセスするには「tabGroups」権限を許可してください。',

  'home.displayPinnedTabs': '固定タブを表示しますか？',

  'home.help.tip.userGuide': '詳細は {userGuide} を参照してください。',
  'home.help.reminder.start': 'セキュリティ上の理由により、Firefox では次の権限付き URL を開けない場合があります:',
  'home.help.reminder.list': `
    <li>chrome: URL</li>
    <li>javascript: URL</li>
    <li>data: URL</li>
    <li>file: URL</li>
    <li>Firefox の権限付き about: URL（例: about:config, about:addons, about:debugging）。権限なしの URL（例: about:blank）は許可されます。</li>
  `,
  'home.help.reminder.end': '上記の URL に一致するページは開けない場合があるため、その場合は URL を手動でコピーして開いてください。',

  'home.help.content': `
    <li>一覧ページは、左側のディレクトリツリー（カテゴリとタブグループの一覧）、中央の保存済みタブ一覧（現在選択中のカテゴリ内のすべてのタブグループとタブ）、右側のブラウザで開いているタブパネルの 3 つの部分で構成されています。</li>
    <li>左側のディレクトリツリーでは、カテゴリをタグ、タブグループを子項目として表し、カテゴリとグループの検索に対応しています。</li>
    <li>中央の一覧では、タブをドラッグして並べ替えやグループ間の移動ができます。左側のディレクトリツリーのタブグループへタブをドラッグして移動することもできます。</li>
    <li>ページ右側の折りたたみ可能なパネルには、現在のブラウザウィンドウで開いているタブとグループが表示されます。ここではクイック選択や一括ドラッグが可能です。</li>
    <li>詳細な使い方や注意点は「ユーザーガイド」を参照してください。</li>
    <li>タブグループがロックされている場合、そのグループと中のタブは削除や移動ができません。ただし、他のグループのタブをロック済みグループへ移動することはできます。</li>
    <li>タブグループが固定されている場合、現在のカテゴリの先頭に表示されます。別のグループを固定グループの前に移動すると、自動的に固定されます。</li>
    <li>一時保存エリアは一覧の上部に固定された特別なカテゴリです。タブを送信するとここに保存されます。</li>
    <li>タブグループを開くと、グループ内の各タブがブラウザで開かれます。「タブやタブグループを開いたときに一覧から自動で削除する」が有効な場合は、その一覧から削除されます。</li>
    <li>
      <strong>左クリック</strong>: 新しいタブを開いて移動します。<br>
      <strong>Alt + 左クリック</strong>: バックグラウンドで新しいタブを開き、NiceTab ページに留まります。<br>
      クリック動作は設定で変更できます。
    </li>
    <li>「昇順」「降順」は現在のカテゴリ内で固定されていないグループに対してのみ動作します。</li>
    <li>タグ、タブグループ、タブはドラッグで並べ替えが可能です。カテゴリやグループを選択中にショートカットで並べ替えられます。</li>
  `,
  'home.help.hotkey.1': '上記のショートカットはホームページでのみ利用できます。また、拡張機能にはよく使う操作用のブラウザショートカットも登録されています（例:',
  'home.help.hotkey.2': '）。必要に応じて拡張機能ページから ',
  'home.help.hotkey.modify': 'ショートカットを変更',
  'home.help.hotkey.modifyTip': 'ショートカットを変更するとすぐに反映されます。コンテキストメニューのキー名はブラウザタブ切り替え後に自動更新されます。',

  'home.moveTo.missingTip': '{type} を選択してください',
  'home.moveTo.copyLabel': '選択した項目をコピーしますか？',
  'home.moveTo.copyTip': 'チェックを入れると、選択した項目が対象のカテゴリ / グループへコピーされます。',
  'home.moveTo.mergeLabel': '重複項目を統合しますか？',
  'home.moveTo.mergeTip.1': '1. チェックすると、タブを移動する際、対象グループ内で同じ URL のタブが重複排除されます。',
  'home.moveTo.mergeTip.2': '2. チェックすると、タブグループを移動する際、同名のグループが対象カテゴリに統合されます。',
  'home.tip.tooManyTabs': 'タブ数が設定値を超えているため、仮想スクロールが有効になっています。',
  'home.tip.addScope': '次回バージョンで追加の権限が必要な新機能が追加される予定です。新バージョンがリリースされると、NiceTab 拡張機能は自動的に無効化されます。引き続きご利用になりたい場合は、必要な権限を付与してください。',
  'home.tip.multiSelection': 'Shift で複数選択: 1. Shift + クリック A（A が選択状態） 2. Shift + クリック B（A から B の範囲が選択）',

  'recycleBin.tip.autoClear': '注: ごみ箱は1日1回自動でクリアされます。',
};

export default jaJP;
