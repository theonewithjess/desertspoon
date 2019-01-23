module.exports = {
    nextPropertyTest: (index, length) => {
        if(index === length-1){
            return true
        } else {
            return false
        }
    },
    prevPropertyTest: (index, num) => {
        if(index === num){
            return true
        } else{
            return false
        }
    }
 }