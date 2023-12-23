<template>
  <div class="grid grid-flow-col gap-4">
    <div v-for="(attr, ai) in hotels[0]" :key="`attr-${ai}`">
      {{ ai }}
    </div>
    <template v-for="(hotel, hi) in hotels" :key="`hotel-${hi}`">
      <div
        v-for="(attr, ai) in hotel"
        :key="`hotel-${hi}-${ai}`"
        :class="`col-start-${hi + 2}`"
      >
        <template v-if="!_.isArray(attr)">{{ attr }}</template>
        <template v-else>
          <img v-for="(img, ii) in attr" :key="`img-${hi}-${ii}`" :src="img" />
        </template>
      </div>
    </template>
  </div>
</template>

<script setup>
import _ from "lodash";
const hotels = [
  {
    Nome: "Nature Puket",
    Stanza: "Camera Deluxe con Vasca Privata",
    mq: 36,
    prezzo: "762 su mobile",
    colazione: "13€",
    spiagge: "kalim: 50m, patong: 1km",
    note: "vicino a bangla road (5 minuti di tuk tuk)",
    foto: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/225701578.jpg?k=cea55321f1a826dd9ae61db54dc49ddcecf949dc41c3ae1074a26cb74897182b&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/312757835.jpg?k=aa0a1b26963d010177b2873c3d402bd62c77605a30fe02aa09a3b96012c6d24e&o=&hp=1",
      "https://cf.bstatic.com/images/hotel/max1024x768/317/317271377.jpg",
      "https://cf.bstatic.com/images/hotel/max1024x768/197/197436989.jpg"
    ]
  },
  {
    Nome: "Peach Blossom",
    Stanza: "Villa con 1 Camera da Letto e Piscina Privata",
    mq: 157,
    prezzo: "934 su pc",
    colazione: "13€",
    spiagge: "Karon: 250m, kata:450m",
    note: "10% di sconto per cibo/bevande incluso + massaggio di 15 min + parcheggio + internet veloce",
    foto: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/445481600.jpg?k=574855fb75a8fb246ed2d349e7e2295f5d10b25046a3d284e08025b7276b087c&o=&hp=1",
      "https://cf.bstatic.com/images/hotel/max1024x768/230/230226444.jpg",
      "https://cf.bstatic.com/images/hotel/max1024x768/262/26203278.jpg",
      "https://cf.bstatic.com/images/hotel/max1024x768/230/230224419.jpg"
    ]
  },
  {
    Nome: "Access",
    Stanza: "Suite con Piscina",
    mq: 65,
    prezzo: "869 su pc",
    colazione: "free",
    spiagge: "Karon: 850m, kata:2.3km",
    note: "Pulizia giornaliera a pagamento",
    foto: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/142140627.jpg?k=6170a598116620f1e8594ddbe6abdd3c514e626f5a8ac995806da54006b1fb3e&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/148359655.jpg?k=bd113571d41aef7ada2a4e13e9a9bc1e2993e6def21cb7e4db5394e217f0b465&o=&hp=1",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/148359320.jpg?k=5e7af3a69d1e237c918e60bcc5dca555c67e55725a1c8582cbeb33b3ab0d8c57&o=&hp=1",
      "https://cf.bstatic.com/images/hotel/max1024x768/107/107781711.jpg"
    ]
  },
  {
    Nome: "Villoft Zen",

    Stanza: "Camera Familiare Deluxe",
    mq: 55,
    prezzo: "848 su mobile",
    colazione: "12€",
    spiagge: "bang tao: 1,4km, layan:2.8km",
    note: "",
    foto: [
      "",
      "https://cf.bstatic.com/images/hotel/max1024x768/391/391973053.jpg",
      "https://cf.bstatic.com/images/hotel/max1024x768/391/391973052.jpg",
      "https://cf.bstatic.com/images/hotel/max1024x768/391/391973055.jpg",
      "https://cf.bstatic.com/images/hotel/max1024x768/391/391973061.jpg"
    ]
  }
];
</script>
