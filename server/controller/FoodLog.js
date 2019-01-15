module.exports = {
    getLog : (req, res) => {

    },
    addToLog : (req, res) => {
        try {
            const db = req.app.get('db')
            let user_id = 2
            // let {id: user_id} = req.session.user 
            let {date, meal, name, foodURI, measure, measureURI, quantity, calories, fat, carbohydrates, protein} = req.body

            db.add_to_log({user_id, date, meal, name, foodURI, measure, measureURI, quantity, calories, fat, carbohydrates, protein}).then(res => {
                console.log(res)
            })
            
        } catch (error) {
            console.log('Error adding to food log:', error)
            res.status(500).send(error)
        }
    },
    updateLogItem : (req, res) => {

    },
    deleteLogItem : (req, res) => {

    }
}