import React, {Component} from 'react'
import axios from 'axios'



class DailyLog extends Component {
    constructor(){
        super()
        this.state = {
            query: '',
            queryResults: [],
            details: [], 
            showDetails: false
        }
    }

    query = () => {
        console.log(this.state.showDetails)

        const APP_ID = `${process.env.REACT_APP_APP_ID}`
        const APP_KEY = `${process.env.REACT_APP_APP_KEY}`
        axios.get(`https://api.edamam.com/api/food-database/parser?ingr=${this.state.query}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(res => {
            console.log(res)
            this.setState({queryResults: res.data.hints})
        })
    }

    handleInputChange = e => {
        this.setState({query: e.target.value})
    }

    // getDetails = () => {
    //     if (this.state.showDetails){
    //         axios.post(`https://api.edamam.com/api/food-database/nutrients`).then(res => {
    //             console.log(res)
    //             // this.setState({
    //             //     details: res
    //             // })
    //             return(
    //                 <div>test div</div>
    //             )
    //         })
    //     }
    // }

    toggleDetails = (id) => {
        console.log(this.state.showDetails)
        this.setState({showDetails: !this.state.showDetails})
        // if (this.state.showDetails){
        //     this.getDetails(id)
        // }
        console.log(this.state.showDetails)

    }

    render(){
        let queryResults = this.state.queryResults.map(e => {
            let name = e.food.label
            let calories = e.food.nutrients.ENERC_KCAL
            let id = e.food.foodId
            return(
                <div style={{width:"500px", height:"25px", border:"1px solid grey", display:"flex", justifyContent:"space-between"}}>
                    {name}
                    <div>
                        {calories.toFixed(0)}
                        <i class="fas fa-caret-down" style={{color:"grey"}} onClick={this.toggleDetails} ></i>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <h1>Daily Log</h1>
                <input type="text" onChange={this.handleInputChange} />
                <button onClick={this.query}>Click</button>
                {queryResults}
            </div>
        )
    }
}

export default DailyLog