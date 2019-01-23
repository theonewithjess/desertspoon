import reducer, {types} from '../ducks/reducer'
import  {nextPropertyTest, prevPropertyTest} from './next-prev'


describe('types', () => {

    it('should check if user is logged out', () => {
        const action = {
            type: types.USER_LOGGED_OUT
            
        }
        const expectedState = {
            isAuthenticated: false,
            user: {}
        }
        expect(reducer({}, action)).toEqual(expectedState)
      }) 
      it('Check if property is true',()=>{
          expect(nextPropertyTest(7,8)).toEqual(true)
      })
      it('Check if property is false',()=>{
        expect(nextPropertyTest(7,6)).toEqual(false)
        
    })
  })
  
  