const fadein = (dir , delay) => {
    return {
        hidden: {
            y: dir === 'up' ? 40 : dir === 'down' ? -40 : 0,
            opacity: 0,
            x: dir === 'left' ? 40 : dir === 'right' ? -40 : 0,
            transition: {
                type: 'tween',
                delay: delay,
                duration: 1.4,
                ease : [0.25 , .6 ,.3 , .8]
            },
        },
        show: {
            y: 0,
            X : 0,
            opacity: 1,
            transition: {
                type: 'tween',
                delay: delay,
                duration: 1.4,
                ease : [0.25 , .25 ,.25 , .75]
            },
        }
    }
}

export default fadein