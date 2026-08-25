# ShipDesign

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

```text
/shipdesign 为我的 AI SaaS 做一个高质量 Landing Page
```

或者：

```text
/shipdesign 重构这个 SCADA 监控页面，保持高信息密度，但提升层级和可操作性
```

用户只触发一次。ShipDesign 内部自动完成：

1. Frame：产品、用户、核心任务、设计模式与页面类型。
2. Evidence：代码、Design System、品牌资产、截图、视频、参考。
3. Direction：Design Read + 视觉方向 + 设计系统锁定。
4. Build：结构、组件、状态、响应式、真实内容。
5. Motion：微交互、反馈；只有合适的页面才启用滚动叙事。
6. Review：布局、排版、颜色、组件、动效、Accessibility、Responsive、认知与原创度。
7. Quality Gate：低于 90 分或存在 Critical 问题就继续修，最多 3 轮。

## 上游 Skills

当前验证并集成的来源包括：

- `codeswithroh/tastemaker`
- `ConardLi/garden-skills`
- `elayadesign/ai-design-skills`
- `emilkowalski/skills`
- `MengTo/Skills`
- `jakubkrehel/skills`
- `vivaldi007/ux-psychology-skill`

需要特别说明：视频中的 **Perception Laws** 暂时没有找到可验证的同名原始仓库，因此当前使用 `ux-psychology-skill` 作为明确标注的认知/感知层替代，不冒充原作者。详细来源见 `CREDITS.md`。

## 设计原则

> 上游 Skills 负责专业设计方法；ShipDesign 负责选择、编排，以及统一的 Definition of Done。
