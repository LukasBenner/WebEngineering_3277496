---
title: Mermaid Test
description: 'This is a mermaid test'
slug: mermaid-test
---

# Mermaid graphs in Nuxt Content Module

In order to use mermaid.js graphs in the with nuxt content, you have to install mermaid.js.

```bash
npm install mermaid
or
yarn add mermaid
```

Then you have to add a new component named mermaid.

```typescript
<template>
  <div class="mermaid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    import("mermaid/dist/mermaid").then(m => {
      m.initialize({
        startOnLoad: true
      });
      m.init();
    });
  }
};
</script>
```

## How it looks

<mermaid>
graph TD
  A[Silvester] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[Car]
  C -->|Four| F[Mac]
</mermaid>

### This is another heading
