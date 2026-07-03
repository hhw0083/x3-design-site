# X3 Design Project Image Paths

每個室內設計專案使用獨立資料夾，資料夾名稱與 project slug 相同。檔名中的 project slug 使用小寫英文與 hyphen，避免空白或中文檔名在部署時產生 URL 編碼問題。

支援圖片格式：`.png` 與 `.webp`。同一個專案可以選擇使用其中一種格式；在 `src/data/x3Content.ts` 中可透過 `projectImagePath` / `projectGalleryImages` 的第三個參數指定 `"webp"`。

只要在此資料夾新增一個 project slug 資料夾，前台會自動建立專案並顯示在首頁、Projects 列表與 project detail 頁。若該 slug 尚未在 `src/data/x3Content.ts` 補正式專案資訊，網站會先使用暫定標題、暫定 detail 文字與目前資料夾內的圖片。

專案名稱預設會由資料夾名稱轉成英文標題，例如 `yangming-residence` 會變成 `Yangming Residence`。若該專案在 `src/data/studioProjects.ts` 的 `projectTextDataBySlug` 有設定 `titleZh`，前台會優先顯示中文名稱。

## 命名規則

- `{project-slug}-hero.png` 或 `{project-slug}-hero.webp`: 專案列表封面與 project detail 最大主圖
- `{project-slug}-1.png` 或 `{project-slug}-1.webp`: project detail 內頁圖 1
- `{project-slug}-2.png` 或 `{project-slug}-2.webp`: project detail 內頁圖 2
- `{project-slug}-3.png` 或 `{project-slug}-3.webp`: project detail 內頁圖 3

內頁圖編號從 `1` 開始，不補 `0`。若專案有更多圖片，依序使用 `{project-slug}-4.png`、`{project-slug}-5.png`，或相同編號的 `.webp`。

若資料夾暫時沒有圖片，前台會先使用網站首頁主圖作為暫定封面；放入 `{project-slug}-hero.png` 或 `{project-slug}-hero.webp` 後會自動改用專案封面。

## 範例路徑

### Warm Apartment Renewal

- `/images/x3/projects/warm-apartment-renewal/warm-apartment-renewal-hero.png`
- `/images/x3/projects/warm-apartment-renewal/warm-apartment-renewal-1.png`
- `/images/x3/projects/warm-apartment-renewal/warm-apartment-renewal-2.png`
- `/images/x3/projects/warm-apartment-renewal/warm-apartment-renewal-3.png`

### Quiet Family Residence

- `/images/x3/projects/quiet-family-residence/quiet-family-residence-hero.png`
- `/images/x3/projects/quiet-family-residence/quiet-family-residence-1.png`
- `/images/x3/projects/quiet-family-residence/quiet-family-residence-2.png`
- `/images/x3/projects/quiet-family-residence/quiet-family-residence-3.png`

### Light Kitchen House

- `/images/x3/projects/light-kitchen-house/light-kitchen-house-hero.png`
- `/images/x3/projects/light-kitchen-house/light-kitchen-house-1.png`
- `/images/x3/projects/light-kitchen-house/light-kitchen-house-2.png`
- `/images/x3/projects/light-kitchen-house/light-kitchen-house-3.png`

### WebP example

- `/images/x3/projects/yangming-residence/yangming-residence-hero.webp`
- `/images/x3/projects/yangming-residence/yangming-residence-1.webp`
