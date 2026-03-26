PS G:\Godivatech\NKC builders\website\nkc_website> npm run dev

> rest-express@1.0.0 dev
> cross-env NODE_ENV=development tsx server/index.ts

11:25:44 AM [express] serving on port 5000
11:25:55 am [vite] Internal server error: Failed to resolve import "@/assets/images/Projects/VKT Commercial Complex/Main.webp" from "client/src/pages/Portfolio.tsx". Does the file exist?
  Plugin: vite:import-analysis
  File: G:/Godivatech/NKC builders/website/nkc_website/client/src/pages/Portfolio.tsx:99:19
  88 |  import imgSrimethila5 from "@/assets/images/Projects/Srimethila Hotel/image 5.webp";
  89 |  import imgSrimethila6 from "@/assets/images/Projects/Srimethila Hotel/image 6.webp";
  90 |  import imgVKT from "@/assets/images/Projects/VKT Commercial Complex/Main.webp";
     |                      ^
  91 |  import imgVKT1 from "@/assets/images/Projects/VKT Commercial Complex/image 1.webp";
  92 |  import imgVKT2 from "@/assets/images/Projects/VKT Commercial Complex/image 2.webp";
      at TransformPluginContext._formatLog (G:\Godivatech\NKC builders\website\nkc_website\node_modules\vite\dist\node\chunks\config.js:28999:43)
      at TransformPluginContext.error (G:\Godivatech\NKC builders\website\nkc_website\node_modules\vite\dist\node\chunks\config.js:28996:14)
      at normalizeUrl (G:\Godivatech\NKC builders\website\nkc_website\node_modules\vite\dist\node\chunks\config.js:27119:18)
      at process.processTicksAndRejections (node:internal/process/task_queues:103:5)
      at async <anonymous> (G:\Godivatech\NKC builders\website\nkc_website\node_modules\vite\dist\node\chunks\config.js:27177:32)
      at async Promise.all (index 88)
      at async TransformPluginContext.transform (G:\Godivatech\NKC builders\website\nkc_website\node_modules\vite\dist\node\chunks\config.js:27145:4)
      at async EnvironmentPluginContainer.transform (G:\Godivatech\NKC builders\website\nkc_website\node_modules\vite\dist\node\chunks\config.js:28797:14)
      at async loadAndTransform (G:\Godivatech\NKC builders\website\nkc_website\node_modules\vite\dist\node\chunks\config.js:22670:26)