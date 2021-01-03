const imageThumbnail = Vue.component('image-thumbnail', {
    props: {
        path: {
            type: String,
            default: ''
        }
    },
    template: `
    <div class="img-box" :style="{backgroundImage: 'url(' + path + ')' }"
    @click="$emit('clickimage')"
    ></div>
    `
});

const app = new Vue({
    el: '#app',
    components: {
        'image-thumbnail': imageThumbnail
    },
    data() {
        return {
            images: [{
                path: './img/kosaka.jpg',
            },{
                path: './img/nibu_akari.jpeg',
            },{
                path: './img/saitou_kyoko.jpeg',
            },{
                path: './img/yamazaki_ten.jpeg',
            },{
                path: './img/img5.jpg',
            },{
                path: './img/img6.jpg',
            },{
                path: './img/img7.jpg',
            },{
                path: './img/img8.jpg',
            },{
                path: './img/img9.jpg',
            }]
        };
    }
})