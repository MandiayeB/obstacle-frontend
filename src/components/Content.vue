<template>
    <div>
        <h1>{{ content.content }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Content',
    props: {
        content: Object
    }
}
</script>