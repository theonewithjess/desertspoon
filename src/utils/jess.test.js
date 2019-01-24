import reducer, {types, userLoggedIn, userLoggedOut, searchFoods} from '../ducks/reducer'

describe('types', () => {
  it('should log in user', () => {
      const user = "2"
      const expectedAction = {
          type: types.USER_LOGGED_IN,
            payload: user
      }
      expect(userLoggedIn(user)).toEqual(expectedAction)
  })
  it('should log out user', () => {
      const expectedAction = {
          type: types.USER_LOGGED_OUT
      }
      expect(userLoggedOut()).toEqual(expectedAction)
  })
  it('should return searched foods', () => {
      const foods = "cheese"
      const expectedAction = {
          type: types.SEARCH_FOODS,
          payload: foods
      }
      expect(searchFoods(foods)).toEqual(expectedAction)
  })
  it('should update searched foods', () => {
        const foods = "cheese"
        const action = {
            type: types.SEARCH_FOODS,
            payload: foods
        }
        const expectedState = {
            searchFoods: "cheese"
        }
        expect(reducer({}, action)).toEqual(expectedState)
  })
  it('should check if user is logged in', () => {
    const user = "2"
    const action = {
        type: types.USER_LOGGED_IN,
          payload: user
    }
    const expectedState = {
        isAuthenticated: true,
        user: "2"
    }
    expect(reducer({}, action)).toEqual(expectedState)
  }) 
})

