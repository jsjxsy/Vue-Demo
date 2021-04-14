export default {
    template: `<div>
            <img :src="img">
            <ul>
                <li v-for="(tab, index) in tabs" :key="index" 
                 @mouseenter="tabHandle(index)" ref="tabs" >{{tab}}</li>
            </ul>
        </div>`,
    data() {
        return {
            img: '../img30/logo.png',
            tabs: ['新品', '极客']
        }
    },
    methods: {
        tabHandle(index) {
            this.$emit('change',index)
            this.$refs.tabs.forEach((item,i) => {
                if (i === index) {
                    item.style.backgroundColor = 'white'
                    item.style.color = 'green'
                    item.style.borderBottom = '1px solid white'
                } else {
                    item.style.background = 'none'
                    item.style.color = '#5683EA'
                    item.style.border = '1px solid #5683EA'
                    item.style.borderBottom = '1px solid white'
                }
            })
        }
    },
    mounted(){
        this.tabHandle(0)
    }

}
