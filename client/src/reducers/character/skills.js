const initialState = {
  acrobatics: {
    key: "Acrobatics",
    isProficient: false,
    expertise: false,
    ability: "dex",
    bonus: ""
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
