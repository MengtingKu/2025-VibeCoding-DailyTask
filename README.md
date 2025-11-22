# 🐶 狗狗歲數計算機 (Dog Age Calculator)

這是一個簡單好用的「狗狗歲數計算機」前端專案，使用 Vite 作為開發工具，並搭配 Playwright 進行自動化測試，以及 GitHub Pages 進行部署。

## 專案介紹

「狗狗歲數計算機」的核心功能非常直覺：

- 使用者輸入狗狗的出生日期
- 按下「開始計算」按鈕
- 頁面會計算並顯示狗狗目前大約的「狗年齡」及對應的「人類年齡」

**特點：**

- 輸入生日後，按計算會自動將該生日存入瀏覽器的 localStorage
- 之後再次打開頁面時，會自動將上次輸入的生日填回輸入框，方便持續使用

---

## 專案功能

- **日期輸入框**：使用者輸入狗狗生日
- **開始計算按鈕**：觸發年齡計算，結果即時呈現
- **結果顯示區**：狗狗年齡與人類年齡兩種年齡展示
- **本地儲存**：利用 localStorage 保留用戶輸入紀錄

---

## 專案安裝與執行

### 專案安裝

```bash
npm install
npm run dev
```

### 編譯與預覽

```bash
npm run build
npm run preview
```

### 部署至 GitHub Pages

```bash
npm run deploy
```

### 安裝瀏覽器相關依賴

```bash
npm run install:browsers
npm run test:playwright
```

### 一鍵啟動、測試 (Start Server And Test)

```bash
npm run check:all
```
