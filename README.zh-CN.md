# ShipDesign

**简体中文** | [English](README.md)

**一次触发，完成从参考分析到最终设计 QA 的高质量 AI Design Engineering 工作流。**

ShipDesign 不是再写一套“大而全的设计提示词”。它把经过验证的开源 Design Skills 作为专业知识源，再增加一层轻量编排：什么时候该用哪套设计规则、按什么顺序执行，以及最终什么时候才算真正可以交付。

```text
Frame → Evidence → Direction → Build → Motion → Review → Quality Gate → Ship
```

## 它解决什么问题

AI 很会写前端代码，但默认设计容易回到高概率模板：相似的 Hero、渐变、圆角卡片、Inter 字体、没有目的的动画……ShipDesign 先判断产品和任务，再决定什么样的设计才合适。

例如：

- SCADA / Dashboard：高信息密度、低动效、强状态语义、可读性优先。
- SaaS Landing Page：单一转化目标、强视觉层级、品牌一致性。
- 高端品牌官网：只有在叙事确实需要时，才启用 Awwwards / cinematic scroll 能力。

## 安装

Codex：

```bash
npx skills@latest add janily/shipdesign --skill '*' -a codex --copy -y
```

Claude Code：

```bash
npx skills@latest add janily/shipdesign --skill '*' -a claude-code --copy -y
```

必须安装 `*`。`shipdesign` 是 Orchestrator，运行时会读取同级的专业 Skill 作为 source of truth。

## 使用

使用 ShipDesign 时，优先描述**设计问题、产品上下文、约束和可用证据**。正常情况下不要手工指定要依次调用哪些上游 Skill，让 Orchestrator 自己完成 Routing。

### 1. 从 0 到 1 设计 Landing Page 或新页面

适合还没有明确视觉方向，希望 ShipDesign 从 Frame 一直负责到最终交付的场景。

```text
/shipdesign

为我的 AI 开发者工具设计并实现一个 Landing Page。

主要用户：使用 AI Coding Agent 的开发者
核心动作：安装产品
保持：当前技术栈
设计模式：fresh build

自主选择一个最合适的视觉方向，并完成完整设计流程。
正常设计阶段不要停下来等待我逐步确认。
```

适合：Landing Page、产品发布页、新功能页面、从 0 到 1 的交互原型。

### 2. 重构已有产品，但保留现有业务逻辑

适合已经有成熟页面，不希望破坏信息架构、工作流和业务行为，只想提升设计质量的场景。

```text
/shipdesign

重构这个 SCADA 监控页面。

设计模式：preserve redesign

必须保留：
- 现有信息架构
- 操作流程
- 信息密度
- 真实产品数据和业务事实

重点提升：
- 视觉层级
- 扫读效率
- 可读性
- 状态表达
- 操作效率
- 响应式体验

不要把工业监控页面设计成营销官网。
```

适合：Dashboard、后台系统、SCADA、配置页、表单、成熟 SaaS 产品。

### 3. 根据截图学习风格，但不要临摹

上传截图，把它作为设计 Evidence，让 ShipDesign 提取可迁移的视觉语法，而不是做换皮复制。

```text
/shipdesign

使用我上传的截图作为当前产品的视觉参考。

请分析并提取：
- 构图
- 视觉层级
- Typography
- 间距节奏
- 色彩角色
- 信息密度
- Surface Treatment
- Signature Visual Moves

不要复制：
- 品牌
- 精确布局
- 原始文案
- 插画 / 图片资产
- 原站 Section 顺序

把可迁移的设计原则转译成属于当前产品自己的视觉语言，然后完成实现和 Review。
```

典型 Routing：Reference Analysis / Tastemaker → Design Direction → Implementation → Critique。

### 4. 根据视频 / 录屏实现滚动交互和动效语言

当参考重点是 Motion，而不是静态视觉时，直接上传视频或录屏。

```text
/shipdesign

使用我上传的录屏作为滚动交互和动效参考。

重点分析：
- scroll phases
- pinned sections
- reveal order
- spatial continuity
- transition rhythm
- animation purpose

学习交互原则，不要照搬原视频的完整 choreography。
保留当前品牌系统和视觉方向。
只在确实能帮助用户理解产品的地方使用高级动效。
```

典型 Routing：Video Analysis → Cinematic Scroll Storytelling → Intentional Animation → Accessibility / Review。

### 5. 设计高信息密度 Dashboard / SCADA / 工业软件

这类页面要明确告诉 ShipDesign：效率和状态清晰度高于营销表现力。

```text
/shipdesign

为专家用户设计这个高信息密度的运维 Dashboard。

优先保证：
- scan speed
- 信息分组
- 稳定布局
- 表格 / 表单易用性
- 状态语义
- 错误预防
- Keyboard / Accessibility

动效保持克制，只用于反馈和状态连续性。
不要为了让页面“更干净”而删除有价值的信息密度。
```

适合：工业软件、监控系统、内部工具、Analytics、企业级工作流。

### 6. 方向已经正确，只做局部 Refinement

第一轮设计方向已经成立时，不建议不断说“再优化一下”，而应该给一个明确、窄范围的 Refinement 目标。

```text
/shipdesign

保留当前视觉方向和整体布局。
不要重新设计页面。

执行一次 Typography Readability Audit，重点优化：
- 正文
- Secondary Text
- 导航
- 表格文字
- Code / Terminal 内容

保留当前 Display Typography 和紧凑的 Technical Metadata 风格。
完成后重新执行 Desktop / Tablet / Mobile Review + Quality Gate。
```

这种方式通常比每轮都重新打开整个 Design Direction 更稳定。

### 最佳实践

- **先给产品事实，再给灵感。** 优先提供真实文案、业务流程、约束、现有代码、Design Tokens 和产品行为。
- **Evidence 逐步增加。** 推荐顺序：先无参考自主设计 → 再加截图参考 → 最后在需要时加视频 / Motion Reference，而不是第一轮就堆很多参考。
- **参考是 Translation，不是 Clone。** 让 ShipDesign 学构图、层级、节奏和 Motion Grammar，不要直接复制别人的品牌和结构。
- **让 Orchestrator 自己 Routing。** 正常使用时描述“问题是什么”，不要手工要求 Tastemaker → Emil → Meng To → Jakub 逐个执行。
- **已有产品一定明确 Preserve。** 把不能改的内容写清楚，例如信息架构、工作流、信息密度、品牌、Design Tokens、技术栈。
- **方向确定后做窄范围 Refinement。** Typography、Motion、Hierarchy、Responsive 或某一个弱 Section 单独优化，不要每次重新设计整站。
- **必须 Render 后再 Review。** 最好检查 Desktop、Tablet、Mobile 和 Full-page 状态；先输出 Findings，再进入 Quality Gate 打分。
- **不要强行动画。** Marketing 页面可以使用 Scroll Storytelling；Dashboard、Settings、Forms、高频操作界面通常应该保持安静和高效。

用户只触发一次。ShipDesign 内部自动完成：

1. Frame：产品、用户、核心任务、设计模式与页面类型。
2. Evidence：代码、Design System、品牌资产、截图、视频、参考。
3. Direction：Design Read + 视觉方向 + 设计系统锁定。
4. Build：结构、组件、状态、响应式、真实内容。
5. Motion：微交互、反馈；只有合适的页面才启用滚动叙事。
6. Review：布局、排版、颜色、组件、动效、Accessibility、Responsive、感知层级与原创度。
7. Quality Gate：低于 90 分或存在 Critical 问题就继续修，最多 3 轮。

## 上游 Skills

ShipDesign 当前只认这 7 个经过确认的上游仓库：

- `codeswithroh/tastemaker`
- `ConardLi/garden-skills`
- `elayadesign/ai-design-skills`
- `emilkowalski/skills`
- `MengTo/Skills`
- `jakubkrehel/skills`
- `Owl-Listener/designer-skills`

对应能力关系：

```text
参考 / 品味提取       → Tastemaker
设计方向 / 系统       → Garden Web Design Engineer
Landing / 转化        → Elaya Landing Page Design
组件 / 微交互         → Emil Kowalski
电影感 / 滚动叙事     → Meng To
UI 精修 / QA          → Jakub Krehel
感知法则 / 视觉审查   → Owl-Listener Designer Skills
```

`Owl-Listener/designer-skills` 提供视觉层级、Gestalt 分组法则、Von Restorff 效应以及视觉层级/构图审查。之前临时使用的 `vivaldi007/ux-psychology-skill` 已从 ShipDesign 上游集合中移除。

详细来源和 License 见 `CREDITS.md`，每次同步后的精确 commit 见 `UPSTREAM_LOCK.json`。

## 设计原则

> 上游 Skills 负责专业设计方法；ShipDesign 负责选择、编排，以及统一的 Definition of Done。
