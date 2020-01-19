const initialState = {
  currentHP: 0,
  maxHP: 0,
  tempHP: 0,
  armorClass: 0,
  defenses: [],
  conditions: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
