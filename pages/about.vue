<template>
    <v-app>
        <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
            <template v-slot:image>
                <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
            </template>
        
            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>
        
            <v-app-bar-title>Vue-X</v-app-bar-title>
        
            <v-spacer></v-spacer>
        
            <nuxt-link to="/" class="ed"><v-btn>Home</v-btn></nuxt-link>
            <nuxt-link to="/about" class="ed"><v-btn>About</v-btn></nuxt-link>
        
        
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
        
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
        <v-main>
     <h2 class="clr text-center mt-10
     
     ">Using Axios Api Increment and decrement of random Number in Vue-X State (Commit) and (Action) Method</h2>
            <div class="counter text-center mt-15 text-h3">
                <h6 class="text-h4">Random Number : </h6>
                {{ $store.state.counter }}
            </div>
            <!-- <h1 class="text-center mt-15 text-h1">0</h1> -->
            <div class="text-center mt-5">
                <v-btn @click="$store.dispatch('decrementCounter')" variant="outlined" class="mx-10 "
                    color="indigo">-</v-btn>
                <v-btn @click="$store.dispatch('incrementCounter')" variant="outlined" class="mx-10"
                    color="indigo">+</v-btn>
            </div>
        </v-main>
    </v-app>

</template>

<script>
export default {


}
</script>

<style>

</style>
