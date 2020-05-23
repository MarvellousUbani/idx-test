import {UserActionTypes} from './user.types'

const INITIAL_STATE = {
    currentUser: {"userAccountInfo":{"id":9999999997,"email":"super@admin.com","fullName":"super admin","enabled":true,"authorities":["ROLE_SUPER_ADMIN"],"teams":[{"id":1,"name":"Sample team","description":"","type":"PRIVATE","members":null,"submittedAt":null,"addedAt":1586285107325},{"id":2,"name":"Sample team 2","description":"","type":"PRIVATE","members":null,"submittedAt":null,"addedAt":1586285212113},{"id":3,"name":"Sample team 3","description":"","type":"PRIVATE","members":null,"submittedAt":null,"addedAt":1586773744688},{"id":4,"name":"wqwqwqqwqw2121","description":"","type":"PRIVATE","members":null,"submittedAt":null,"addedAt":1586774028099},{"id":5,"name":"test team 1","description":"","type":"PRIVATE","members":null,"submittedAt":null,"addedAt":1586774140381},{"id":9999999997,"name":"General","description":null,"type":"PUBLIC","members":null,"submittedAt":null,"addedAt":1586281839672}],"profilePictureURL":"https://secure.gravatar.com/avatar/7063e4e3d83ca275f016542320d08abc?s=400&d=identicon&r=g","notificationSettings":{"ideaUpdate":"IMMEDIATE","ideaLike":"IMMEDIATE","ideaComment":"IMMEDIATE","commentReply":"IMMEDIATE"}},"recentlyLikedIdeas":[],"notificationOptions":["IMMEDIATE","DAILY","WEEKLY","NEVER"],"verified":true}
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UserActionTypes.SET_CURRENT_USER:
        return {
          ...state,
          currentUser: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;