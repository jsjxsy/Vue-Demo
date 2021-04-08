/**
 *
 */
export default {
    template: `<div>
        <h1>带缩略图的图片轮换</h1>
        <div class="image">
            <img id="pre" src="img/pre_arrow.png" class="arrow arrow-left" @click="pre"/>
            <img :src="images[index]" class="content">
            <img id="next" src="img/next_arrow.png" class="arrow arrow-right" @click="next"/>
        </div>
    </div>`,
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
            default: 0,
            required: true
        }
    },
    data() {
        return {
            index:this.currentIndex
        }

    },
    methods: {
        pre() {
            if (this.index === 0) {
                alert('已经到了第一张图片')
                return
            }
            this.index--
            this.$store.commit('change',this.index)
            // eventBus.$emit('changeIndex', this.index)
        },
        next() {
            if (this.index === 4) {
                alert('已经到了最后一张图片')
                return
            }
            this.index++
            this.$store.commit('change',this.index)
            // eventBus.$emit('changeIndex', this.index)
        }
    },
    mounted() {
        // eventBus.$on('changeCurrentIndex', function (index) {
        //     console.debug('changeCurrentIndex')
        //     this.index = index
        // }.bind(this))
    },
    watch:{
        '$store.state.currentIndex'() {
            this.index = this.$store.state.currentIndex
        }
    }
}
