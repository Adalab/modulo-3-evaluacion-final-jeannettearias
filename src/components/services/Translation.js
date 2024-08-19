
export const translateSpecie = (specie) => {
    if (specie === 'human') {
        return 'Humano/a';
    }
    else if (specie === 'half-giant') {
        return 'Medio Gigante';
    }
    else if (specie === 'werewolf') {
        return 'Hombre Lobo/Mujer Loba';
    }
    else {
        return 'Otro';
    }
};
export const translateGender = (gender) => {
    if (gender === 'Woman') {
        return 'Mujer';
    }
    else {
        return 'Hombre';
    }
};

export const translateStatus = (alive) => {
    if (alive === true) {
        return 'Vivo/a';
    }
    else {
        return 'Muerto/a';
    }
};




