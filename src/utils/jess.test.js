import {types, userLoggedIn, userLoggedOut, searchFoods} from '../ducks/reducer'

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
})

