module.exports = {
    getLog : (req, res) => {
        try {
            const db = req.app.get('db')
            let {id: user_id} = req.session.user 
            let date = "2019-01-11"
            db.get_log_by_user({user_id, date}).then(log => res.send(log))
        } catch (error) {
            console.log('Error fetching food log:', error)
            res.status(500).send(error)
        }
    },
    addToLog : (req, res) => {
        try {
            const db = req.app.get('db')
            let {id: user_id} = req.session.user 
            let {date, meal, name, foodURI, measure, measureURI, quantity, calories, fat, carbohydrates, protein} = req.body

            db.add_to_log({user_id, date, meal, name, foodURI, measure, measureURI, quantity, calories, fat, carbohydrates, protein}).then(item => {
                res.sendStatus(200)
            })
            
        } catch (error) {
            console.log('Error adding item to food log:', error)
            res.status(500).send(error)
        }
    },
    getTotals: (req, res)=>{
        try {
            const db = req.app.get('db')
            let {id:user_id}= req.session.user
            let date="2019-01-11"
            db.get_totals({user_id, date}).then(totals=>res.send(totals))
        } catch (error) {
            console.log('Error fetching totals', error)
            res.status(500).send(error)
        }
    },
    // updateLogItem : (req, res) => {

    // },
    deleteLogItem : (req, res) => {
        try {
            const db = req.app.get('db')
            let {id: entry_id} = req.params
            db.delete_log_item(entry_id).then(item => {res.sendStatus(200)})
        } catch (error) {
            console.log('Error deleting item from food log:', error)
            res.status(500).send(error)
        }
    }
}