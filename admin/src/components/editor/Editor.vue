<template>
    <div style="border: 1px solid #ccc;">
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" />
        <Editor style="height: 500px; width: 100%; overflow-y: hidden; " :defaultConfig="editorConfig"
            @onCreated="handleCreated" @onChange="handleChange" v-model="setHtml" />
    </div>
</template>
<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { shallowRef, onBeforeUnmount, defineEmits, defineProps, onMounted, ref } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
const emit = defineEmits(['event'])
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
const setHtml = ref(props.content)
const props = defineProps({
    content: String,
    required: true
})
const toolbarConfig = {}
const editorConfig = {
    placeholder: '请输入内容...',
    MENU_CONF: {
        uploadImage: {
            server: 'http://localhost:3000/adminapi/editor/upload',
            fieldName:'file',
            customInsert(res, insertFn) {// JS 语法
                // res 即服务端的返回结果
                console.log(res);
                // 从 res 中找到 url alt href ，然后插入图片
                // insertFn(url, alt, href)
            },
        }
    }
}
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})
const handleCreated = (editor) => {
    editorRef.value = editor // 记录 editor 实例，重要！
}
const handleChange = (editor) => {
    const html = editor.getHtml()
    // console.log('editor content', html);
    emit("event", html)
}
</script>