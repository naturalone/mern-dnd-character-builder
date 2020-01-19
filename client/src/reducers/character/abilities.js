const initialState = {
  abilities: [
    {
      baseScore: 0,
      classBonuses: 0,
      racialBonus: 0,
      proficiency: false,
      score: 0,
      id: 1,
      name: "str",
      label: "Strength"
    },
    {
      baseScore: 0,
      classBonuses: 0,
      racialBonus: 0,
      proficiency: false,
      score: 0,
      id: 2,
      name: "dex",
      label: "Dexterity"
    },
    {
      baseScore: 0,
      classBonuses: 0,
      racialBonus: 0,
      proficiency: false,
      score: 0,
      id: 3,
      name: "con",
      label: "Constitution"
    },
    {
      baseScore: 0,
      classBonuses: 0,
      racialBonus: 0,
      proficiency: false,
      score: 0,
      id: 4,
      name: "int",
      label: "Intelligence"
    },
    {
      baseScore: 0,
      classBonuses: 0,
      racialBonus: 0,
      proficiency: false,
      score: 0,
      id: 5,
      name: "wis",
      label: "Wisdom"
    },
    {
      baseScore: 0,
      classBonuses: 0,
      racialBonus: 0,
      proficiency: false,
      score: 0,
      id: 6,
      name: "cha",
      label: "Charisma"
    }
  ]
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
