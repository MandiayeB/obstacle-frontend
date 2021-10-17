<template>
    <div class="achievement_content">
        <h1>{{ content.content }} ({{ content.order_index }}/{{ count }})</h1>
        <img id="achievement_img" :src="content.image">
    </div>
</template>

<script>
export default {
    name: 'Content',
    props: {
        content: Object,
        image: String,
        count: Number,
    }
}
</script>