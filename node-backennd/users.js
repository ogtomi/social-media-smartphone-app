class Users {
  constructor(
    id,
    name,
    surname,
    email,
    password,
    created_at,
    profile_image,
    date_of_birth,
    sex,
    short_description
  ) {
    (this.id = id),
      (this.name = name),
      (this.surname = surname),
      (this.email = email),
      (this.password = password),
      (this.created_at = created_at),
      (this.profile_image = profile_image),
      (this.date_of_birth = date_of_birth),
      (this.sex = sex),
      (this.short_description = short_description);
  }
}

module.exports = Users;
