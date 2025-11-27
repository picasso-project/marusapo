# M-SAPO LP開発ガイドライン

## 📋 プロジェクト概要

| 項目 | 内容 |
|------|------|
| プロジェクト名 | M-SAPO（マルサポ） |
| サービス名 | 開業まるごとHPの「マルサポ」 |
| ドメイン | m-sapo.com |
| 目的 | 複数LPのA/Bテスト用静的サイト |
| 技術構成 | HTML / SCSS(CSS) / Vanilla JS |

---

## 📁 ディレクトリ構成

```
m-sapo/
├── lp/
│   ├── v1/                         # テストパターンA
│   │   ├── index.html
│   │   └── assets/
│   │       ├── css/
│   │       │   └── style.css
│   │       ├── scss/
│   │       │   └── style.scss
│   │       ├── js/
│   │       │   └── main.js
│   │       └── images/
│   │
│   ├── v2/                         # テストパターンB
│   │   ├── index.html
│   │   └── assets/
│   │       ├── css/
│   │       ├── scss/
│   │       ├── js/
│   │       └── images/
│   │
│   └── v3/                         # テストパターンC
│       ├── index.html
│       └── assets/
│           ├── css/
│           ├── scss/
│           ├── js/
│           └── images/
│
├── shared/                         # 共有アセット
│   ├── scss/
│   │   ├── _variables.scss         # 変数
│   │   ├── _mixins.scss            # ミックスイン
│   │   ├── _base.scss              # リセット・ベース
│   │   └── _components.scss        # 共通コンポーネント
│   ├── js/
│   │   └── common.js               # 共通JS
│   ├── images/
│   │   ├── logo.svg
│   │   ├── favicon.ico
│   │   └── ogp.png
│   └── fonts/
│
├── package.json
├── README.md
└── .gitignore
```

---


## 📝 Figma連携時の注意点

### Figma MCPでコーディングする際のポイント

1. **セクションごとに作業する**
   - 一度に全ページではなく、セクション単位で依頼

2. **共有SCSSを先に作成**
   - variables, mixins, base, componentsを先に用意

3. **レスポンシブ指示を明確に**
   - PC/TB/SPの3ブレイクポイントを指定

4. **画像はプレースホルダーで**
   - 実画像は後から差し替え

---

## ✅ チェックリスト

### 開発前

- [ ] ドメイン取得（m-sapo.com）
- [ ] サーバー準備
- [ ] Figmaデザイン確定
- [ ] 共有SCSS作成

### 各LP開発時

- [ ] HTML構造作成
- [ ] SCSS作成
- [ ] レスポンシブ対応
- [ ] モーダル動作確認
- [ ] 表示速度確認
- [ ] クロスブラウザチェック

### 公開前

- [ ] OGP設定確認
- [ ] favicon設定
- [ ] noindex設定（テスト時）
- [ ] フォーム動作確認
- [ ] Analytics設定
