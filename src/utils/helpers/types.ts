export type AnimalProps = {
  id: string;
  name: string;
  type_animal: string;
  race: string;
  dt_born: string;
  photo_profile: string;
  qrCode: {
    animals: string;
    dt_create: string;
    hash: string;
    id: string;
    view: {
      id: string;
      view_Animal: string;
      view_QrCode: string;
      view_Endereco: string;
    };
  };
};

export type ViewProps = {
  id: string;
  hash: string;
  dt_create: string;
  animals: string;
  view: {
    id: string;
    view_Animal: string;
    view_QrCode: string;
    address: string;
    number: string;
    district: string;
    city: string;
    CEP: string;
    state: string;
    complement: string;
    dt_create: string;
    descript: string;
    fk_id_animal: {
      id: string;
      relation_animal: string;
      name: string;
      type_animal: string;
      race: string;
      dt_born: string;
      photo_profile: string;
      created_at: string;
      temperament: string;
      size: string;
      fk_id_entity: {
        cpf: string;
        created_at: string;
        dt_born: string;
        email: string;
        gender: string;
        id: string;
        name: string;
        number: string;
        photo_user: string;
        userGoogle: string;
      };
    };
  };
};
