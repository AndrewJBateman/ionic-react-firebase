const defaultState = {
  user: {}
}

export default function reducer(
  state = defaultState,
  { type, payload }: { type: string; payload: any }
): any {
  // work with state
  switch(type) {
    case 'SET_USER_STATE':
      return {
        ...state,
        user: {
          username: payload.split('@')[0]
        }
      }
  }

  return state
}