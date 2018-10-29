const initialState = {
  language: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ENG":
      return {
        language: "eng"
  };
      case "PL":
      return {

        language: "pl"
      };
    default:
      return state
  }
};
