<template>
    <v-app>
      <v-navigation-drawer color="yellow">
        <div class="pa-5">
          <h2>結婚式場のコンセプト</h2>
          <div class="pt-2">
            <p>ありがとうの気持ちがわかる結婚式場
              <!-- この部分は画面サイズが1280pxより大きい時のみ表示される設定です。 -->
            </p>
          </div>
        </div>
      </v-navigation-drawer>
  
      <!-- ↓ヘッダー ロゴの設定 -->
      <v-app-bar color="accent" absolute="true" :elevation="0">
        <!-- vue ↓パディングの設定 -->
        <div class="pa-15">
              <img src="../src/assets/images/logo.png">
      <!-- <h2>ヘッダー</h2> -->
          <!-- <p>この部分は「headerタグ」に変換されます。</p> -->
        </div>
      </v-app-bar>
  
  
      <!-- style属性で通常のcssも利用できる -->
      <v-main style="height: 200vh">
        <v-container fluid>
          <v-card class="mx-auto my-10">
  
            <!-- ナビゲーション -->
    <div>
  
  
      <v-card 
        class="d-flex justify-center  mb-6"
      
  
        flat
        tile
       
      >
        <v-card 
          v-for="n in 4"
          :key="n"
          class="pa-6"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'lime lighten-5'"
          outlined
          tile
          title="結婚式場のコンセプト"
             >
  
          <!-- justify-space-between -->
        </v-card>
      </v-card>
  
    </div>
  <!-- </template> -->
            
            <p>
              「v-app-bar」と「v-footer」はデフォルトでは画面上下に固定されます(CSSのpositon="fixed"の状態)。
            </p>
            <p>「absolute="true"」属性を付けると、スクロールに従い移動します。</p>
          </v-card>
  
          <v-card class="mx-auto my-10">
            <p>
              「v-app-bar」と「v-footer」はデフォルトでは画面上下に固定されます(CSSのpositon="fixed"の状態)。
            </p>
            <p>「absolute="true"」属性を付けると、スクロールに従い移動します。</p>
          </v-card>
  
          <h3>公式から完コピのカルーセルパネルの例</h3>
          <v-carousel>
  
          <!-- <img src=" require('@/assets/images/slide1.jpg')"> -->
          <v-carousel-item
           src="../src/assets/images/slide1.jpg" alt="HOTEL IMPERIAL RESORT HOTEL" 
           cover
           > </v-carousel-item>
           <v-carousel-item
           src="../src/assets/images/slide2.jpg" alt="HOTEL IMPERIAL RESORT HOTEL" 
           cover
           > </v-carousel-item>
           <v-carousel-item
           src="../src/assets/images/slide3.jpg" alt="HOTEL IMPERIAL RESORT HOTEL" 
           cover
           > </v-carousel-item>
  
            <!-- <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            ></v-carousel-item> -->
  
            <!-- <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
              cover
            ></v-carousel-item> -->
  
            <!-- <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-carousel-item> -->
          </v-carousel>
        </v-container>
      </v-main>
  
      <v-footer app absolute="true" class="bg-teal">
        <div class="pa-5">
          <h2>フッター</h2>
          <p>この部分は「footerタグ」に変換されます。</p>
        </div>
      </v-footer>
    </v-app>
  </template>
  <script>
  export default {
    name: "App",
  };
  </script>