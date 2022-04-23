<template>
    <div class="list-user">
        <p>list user component</p>
        <User></User>
        <div class="send">{{titleSome}}</div>
    </div>
</template>

<script>
    import User from '@/components/User.vue'
    export default {
        name: 'list-user',
        data() {
            return {

            }
        },
        props : {
            titleSome: String
        },
        components: {
            User
        },
    }
</script>