export default {
    template: `<ul>
        <slot>
        <li v-for="(item, i) in images" :key="i">
            <img :src="item" class="tip-image" ref="tip">
            <img :src="index === i ? dotImages[0]:dotImages[1]"
                 @click="current(i)" @mouseenter="enter(i)" @mouseleave="leave(i)"/>
        </li>
        </slot>
    </ul>`,
    props: {
        images: {
            type: Array,
            default: function () {
                return []
            },
            required: true

        },
        currentIndex: {
            type: Number,
            required: true,
            default: 0
        }
    },
    data() {
        return {
            index: this.currentIndex,
            dotImages: ['./img/active.png', './img/normal.png'],
        }

    },
    methods: {
        current(index) {
            this.index = index
            this.$store.commit('change', this.index)
            //eventBus.$emit('changeCurrentIndex', this.index)
        },
        enter(index) {
            this.$refs.tip[index].style.display = 'block'
        },
        leave(index) {
            this.$refs.tip[index].style.display = 'none'
        }
    },
    watch: {
        // currentIndex: function (oldValue, newValue) {
        //     this.$refs.dot[oldValue].src = './img/normal.png'
        //     this.$refs.dot[newValue].src = './img/active.png'
        // },
        // '$store.state.currentIndex'() {
        //     this.index = this.$store.state.currentIndex
        // }
    },
    mounted() {
        // eventBus.$on('changeIndex', function (index) {
        //     console.debug('changeIndex='+index)
        //     this.index = index
        // }.bind(this))
    }
}
