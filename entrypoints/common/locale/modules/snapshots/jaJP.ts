import type { SnapshotLocaleKey } from './zhCN';

const jaJP: Record<SnapshotLocaleKey, string> = {
  'snapshots.title': 'スナップショット',
  'snapshots.manual': '手動スナップショット',
  'snapshots.auto': '最新の自動スナップショット',
  'snapshots.create': '現在のウィンドウをスナップショット化',
  'snapshots.empty': 'スナップショットはありません',
  'snapshots.autoEmpty': '自動スナップショットはまだありません',
  'snapshots.tip.list': 'スナップショット一覧は直近 50 件のみ保持されます。',
  'snapshots.stats': `{tabs, plural,
    one {1 タブ}
    other {# タブ}
  } · {groups, plural,
    one {1 グループ}
    other {# グループ}
  } · {pinned} 固定`,
  'snapshots.restoreNewWindow': '新しいウィンドウで復元',
  'snapshots.restoreCurrentWindow': '現在のウィンドウを置き換え',
  'snapshots.restoreCurrentConfirm': '現在のウィンドウの既存タブはこのスナップショットで上書きされます。続行しますか？',
  'snapshots.deleteConfirm': 'このスナップショットを削除してもよろしいですか？',
  'snapshots.pinned': '固定',
  'snapshots.created': 'スナップショットを作成しました',
};

export default jaJP;
