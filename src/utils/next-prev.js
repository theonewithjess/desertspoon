module.exports = {
    nextPropertyTest: (index, length) => {
        if(index === length-1){
            return true
        } else {
            return false
        }
    },
    prevPropertyTest: (index, length) => {
        if(index === length+1){
            return true
        } else{
            return false
        }
    }
 }