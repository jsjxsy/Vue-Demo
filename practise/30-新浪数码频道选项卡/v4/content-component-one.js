import move from './util.js'

export default {
    template: `<div class="content">
        <img :src="leftImage">
        <div class="right">
            <div class="right-content" ref="rightContent">
                <div class="right-content-item" v-for="(item, index) in rightImage" :key="index" :style="style(index)">
                    <img :src="item">
                </div>
            </div>
            <div class="nav">
                <img :src="pre" class="pre" @click="preDot()"/>
                <ul class="dot">
                    <li  ref="dots" :class="num === 1 ? 'active': ''" v-for="num in rightImage.length" :key="num"></li>
                </ul>
                <img :src="next" class="next" @click="nextDot()">
            </div>
        </div>
    </div>`,
    data() {
        return {
            leftImage: '../img30/img1.gif',
            pre: '../img30/pre.gif',
            next: '../img30/next.gif',
            rightImage: ['../img30/img1_1.gif', '../img30/img1_1.gif', '../img30/img1_1.gif'],
            currentIndex: 0
        }
    },
    methods: {
        style(index) {
            return {
                left: index * 476 + 'px'
            }
        },
        preDot() {
            if (this.currentIndex === 0) {
                return
            }
            this.currentIndex--
            move(this.$refs.rightContent, 'left', -476 * this.currentIndex, 1000)
            this.moveDot()
        },
        nextDot() {
            if (this.currentIndex === this.$refs.dots.length - 1) {
                return
            }
            this.currentIndex++
            move(this.$refs.rightContent, 'left', -476 * this.currentIndex, 1000)
            this.moveDot()
        },
        moveDot() {
            this.$refs.dots.forEach((item, index) => {
                if (index === this.currentIndex) {
                    item.className = 'active'
                } else {
                    item.className = ''
                }
            })
        }
    }

}
