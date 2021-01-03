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

const modal = Vue.component('modal', {
    props: {
        isShown: {
            type: Boolean,
            default: false
        },
        imagePath: {
            type: String,
            default: ''
        }
    },
    template: `
    <div v-if="isShown" class="modal" @click="$emit('close')">
    <img class="modal-img" :src="imagePath" alt="selectedImage"/>
    </div>`
});

const app = new Vue({
    el: '#app',
    components: {
        'image-thumbnail': imageThumbnail,
        'modal' : modal
    },
    data() {
        return {
            // isShown
            isShown: false,
            selectedImage: '',
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
    },
    methods: {
        onSelectImage(path) {
            this.setImage(path);
            this.openModal();
        },
        openModal() {
            this.isShown = true;
        },
        closeModal() {
            this.isShown = false;
        },
        setImage(path) {
            this.selectedImage = path;
        }
    }
})