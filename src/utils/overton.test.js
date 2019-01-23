import reducer, {types} from '../ducks/reducer'

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
  })
  
  