# Constrained Beam Search Visualization

這個專案提供了一個交互式的可視化工具，用於展示約束波束搜索（Constrained Beam Search）算法在機器翻譯中的應用。它旨在幫助學習者和研究者更好地理解這一複雜的自然語言處理技術。

<!-- ![Constrained Beam Search Visualization Demo](https://your-demo-gif-url.gif) -->

## 目錄

- [專案簡介](#專案簡介)
- [安裝指南](#安裝指南)
- [使用說明](#使用說明)
- [技術細節](#技術細節)
- [貢獻指南](#貢獻指南)
- [許可證](#許可證)
- [相關資源](#相關資源)

## 專案簡介

約束波束搜索是一種改進的波束搜索算法，在保持高效搜索的同時，還能滿足特定的約束條件。這個可視化工具展示了算法如何在翻譯"我喜歡吃蘋果"這個中文句子到英文的過程中，確保翻譯結果包含"delicious"這個詞。

主要特點：
- 交互式步驟展示
- 清晰的樹狀結構可視化
- 概率和約束滿足情況的實時顯示
- 自動播放功能

## 安裝指南

1. 克隆儲存庫：
   ```
   git clone https://github.com/your-username/constrained-beam-search-visualization.git
   ```

2. 進入專案目錄：
   ```
   cd constrained-beam-search-visualization
   ```

3. 安裝依賴：
   ```
   npm install
   ```

4. 啟動開發服務器：
   ```
   npm start
   ```

5. 在瀏覽器中打開 `http://localhost:3000` 查看專案。

## 使用說明

1. 打開應用後，您會看到一個初始的搜索樹結構。
2. 使用 "Next" 和 "Previous" 按鈕逐步查看搜索過程。
3. 點擊 "Auto Play" 自動播放整個過程。
4. "Reset" 按鈕可以重置整個演示。
5. 觀察每個節點的概率和是否滿足約束條件（包含 "delicious" 詞）。

## 技術細節

- 前端框架：React
- 狀態管理：React Hooks (useState, useEffect)
- 樣式：內聯 CSS
- 部署：GitHub Pages

核心算法實現在 `ConstrainedBeamSearchVisualization.js` 文件中，包括：
- 樹狀結構的遞歸渲染
- 步驟控制邏輯
- 約束條件檢查

## 貢獻指南

我們歡迎任何形式的貢獻！如果您想為這個專案做出貢獻，請遵循以下步驟：

1. Fork 這個儲存庫
2. 創建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打開一個 Pull Request

## 許可證

本專案採用 MIT 許可證 - 查看 [LICENSE.md](LICENSE.md) 文件了解詳情

## 相關資源

- [波束搜索算法介紹](https://en.wikipedia.org/wiki/Beam_search)
- [機器翻譯中的約束解碼](https://aclanthology.org/P16-1162.pdf)
- [React 官方文檔](https://reactjs.org/docs/getting-started.html)