<template>
    <div class="user" :titleSome="titleUser">user gi do</div>
</template>
<script>
    export default {
        name: 'user',
        data() {
            return {
                titleUser: 'Tieu de user prop'
            }
        },
    }
</script>