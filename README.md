# M-SAPO LP

開業まるごと HP マルサポのランディングページ

## 自動デプロイ設定完了 ✅

GitHub Actions による自動デプロイが有効になっています。
main ブランチへの push 時に自動的に Xserver へデプロイされます。

## 開発環境

```bash
npm install
npm run sass:build
```

## デプロイ

```bash
git add .
git commit -m "更新内容"
git push
```

自動的に Xserver (sv8011.xserver.jp) へデプロイされます。
