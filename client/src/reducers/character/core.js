const initialState = {
  characterName: "",
  class: "",
  level: 0,
  race: {
    name: "",
    subrace: ""
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
