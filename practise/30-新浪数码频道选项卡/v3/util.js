function movePromise(obj, attr, target, duration) {
    return new Promise((res, rej) => {
        let b = parseInt(getComputedStyle(obj)[attr])
        let c = target - b
        let d = duration
        let temp = new Date().getTime()
        let timer = setInterval(function () {
            let t = new Date().getTime() - temp
            if (t >= d) {
                clearInterval(timer)
                t = d
            }
            let v = c / d * t + b
            obj.style[attr] = v + 'px'
            if (t === d) {
                res('success')
            }
        }, 20)
    })
}

export default movePromise
