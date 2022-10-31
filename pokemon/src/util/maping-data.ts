export const mapingColor = (data: any) => {
  return data.map(({ name }: any) => name);
};
export const mapingGender = (data: any) => {
  return data.map((pokemon: any) => {
    return pokemon.pokemon_species.name;
  });
};

export const filterData = (gender: any, color: any) => {
  if (gender.length != 0 && color.length != 0) {
    var iguales: any = [];

    for (var i = 0; i < gender.length; i++) {
      for (var j = 0; j < gender.length; j++) {
        if (gender[i] == color[j]) {
          iguales.push(gender[i]);
        }
      }
    }

    return iguales;
  }

  if (gender.length != 0 && color.length == 0) {
    return gender;
  }
  if (gender.length == 0 && color.length != 0) {
    return color;
  }
};
