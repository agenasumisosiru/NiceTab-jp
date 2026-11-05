import { LocaleKey } from './zhCN';

const jaJP: Record<LocaleKey, string> = {
  'importExport.import': 'インポート',
  'importExport.export': 'エクスポート',
  'importExport.moduleTitle': `{action, select,
    import {インポート}
    export {エクスポート}
    other {インポート / エクスポート}
  } タブ`,
  'importExport.formatType': `形式を選択 {action, select,
    import {インポート}
    export {エクスポート}
    other {''}
  } :`,
  'importExport.formatType.optionLabel': '{label}',

  'importExport.importMode': 'インポート方法を選択:',
  'importExport.importMode.optionLabel': '{label}',
  'importExport.importContent': 'インポートする内容:',
  'importExport.importFromText': 'テキストからインポート',
  'importExport.importFromFile': 'ファイルからインポート',
  'importExport.importFromHTML': 'HTML からインポート',
  'importExport.importSuccess': 'インポートに成功しました',
  'importExport.importFailed': 'インポートに失敗しました。形式が正しいか確認してください',
  'importExport.settingsModuleTitle': '設定のインポート / エクスポート',
  'importExport.syncConfigModuleTitle': '同期設定のインポート / エクスポート',

  'importExport.exportContent': 'エクスポートする内容:',
  'importExport.getContent': '内容を取得',
  'importExport.copy': 'クリップボードにコピー',
  'importExport.exportToFile': 'ローカルファイルへ出力',
  'importExport.saveAsHtml': 'HTML として保存',
  'importExport.CopySuccess': 'コピーしました',
  'importExport.CopyFailed': 'コピーに失敗しました',
};

export default jaJP;
