<template>
<v-app>
    <v-app-bar>
    <h2>ヘッダー</h2>
    </v-app-bar>
</v-app>

<div class="d-flex justify-center">
<nav>
    <v-button-navigation >
        <v-btn>
    <router-link to="/concept">Concept</router-link>
        </v-btn>
        <v-btn>
    <router-link to="/concept">Concept</router-link>
        </v-btn>   
        <v-btn>
    <router-link to="/concept">Concept</router-link>
        </v-btn>
        <v-btn>
    <router-link to="/concept">Concept</router-link>
        </v-btn>
</v-button-navigation>
</nav>
</div>

</template>
<script>
export default {
    name: 'FairComponent'
}
</script>