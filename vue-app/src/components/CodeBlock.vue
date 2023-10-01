<template>
  <body data-prismjs-copy-timeout="800">
    <pre><code
      class="line-numbers"
      :class="classObject()"
      data-prismjs-copy="📋COPY"
    >{{ code }}</code></pre>
  </body>
</template>

<script setup>
    import
    {
        highlight,
        languages
    }
    from 'prismjs/components/prism-core'
    import 'prismjs/components/prism-clike'
    import 'prismjs/components/prism-bash'
    import 'prismjs/components/prism-javascript'
    import 'prismjs/components/prism-python'
    import 'prismjs/themes/prism-tomorrow.css'

    import 'prismjs/plugins/toolbar/prism-toolbar'
    import 'prismjs/plugins/toolbar/prism-toolbar.css'
    import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
    import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
    import 'prismjs/plugins/line-numbers/prism-line-numbers'

    import
    {
        reactive
    }
    from "vue";

    const props = defineProps(
    {
        code:
        {
            default: "!CODE HERE!",
        },
        config:
        {
            default:
            {
                'language': 'bash'
            },
        },
    });

    const code = reactive(props.code)
    const config = reactive(props.config)

    function classObject()
    {
        var obj = {}
        obj['language-' + config.language] = true
        console.log(obj)
        return obj
    }
</script>

<style>
</style>
