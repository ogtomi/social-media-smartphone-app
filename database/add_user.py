import psycopg2
import argparse
import binascii

USER = "server127285_groupproject"
PASSWORD = "ProjektGrupowy2021"
DBNAME = "server127285_groupproject"
HOST = "pgsql131.server127285.nazwa.pl"


def getHexStringFromImage(path):
    """
    getHexStringFromImage takes path to the image, reads it and converts to hex string
    :param path: path to the image
    :return: hex string
    """
    with open(path, "rb") as f:
        content = f.read()
    return binascii.hexlify(content).decode()


def addUser(
    name,
    surname,
    email,
    password,
    profile_image_path,
    date_of_birth,
    sex,
    short_description,
):
    """
    addCompany connects with database and adds new company
    :param name: new user name
    :param surname: new user surname
    :param email: new user email
    :param password: new user password
    :param profile_image_path: path to the profile image
    :param date_of_birth: user date of birth in format: '1999-09-09'
    :param sex: user sex
    :param short_description: user short description
    :return: 1 when success, -1 when some data are omitted
    """
    if name is None:
        print("User name is required.")
        return -1

    if surname is None:
        print("User surname is required.")
        return -1

    if email is None:
        print("User email is required.")
        return -1

    if password is None:
        print("User password is required.")
        return -1

    if profile_image_path is None:
        print("Profile image path is required.")
        return -1

    if date_of_birth is None:
        print("User date of birth is required.")
        return -1

    if sex is None:
        print("User sex is required.")
        return -1

    if short_description is None:
        print("User short description is required.")
        return -1

    conn = psycopg2.connect(user=USER, password=PASSWORD, dbname=DBNAME, host=HOST)
    cur = conn.cursor()
    profile_image_hex_string = getHexStringFromImage(profile_image_path)
    values = f"('{name}', '{surname}', '{email}', crypt('{password}', gen_salt('bf')), NOW(), decode('{profile_image_hex_string}','hex'), '{date_of_birth}', '{sex}', '{short_description}')"
    cur.execute(
        f"insert into users(name, surname, email, password, created_at, profile_image, date_of_birth, sex, short_description) values {values};"
    )
    conn.commit()
    cur.close()
    conn.close()
    print("User added correctly.")
    return 1


if __name__ == "__main__":
    """
    Example usage:
    python .\add_user.py -n 'Mariusz' -sn 'Pudzianowski' -e 'marius@gmail.com' -p '1234' -pi './m.jpg' -b '1977-02-07' -s 'M' -sd 'Strongest of the strongest'
    """
    ap = argparse.ArgumentParser()
    ap.add_argument("-n", "--user_name", default=None, help="User Name")
    ap.add_argument("-sn", "--user_surname", default=None, help="User Surname")
    ap.add_argument("-e", "--user_email", default=None, help="User Email")
    ap.add_argument("-p", "--user_password", default=None, help="User password")
    ap.add_argument(
        "-pi", "--profile_image", default=None, help="Path to profile image"
    )
    ap.add_argument("-b", "--birth_date", default=None, help="Date of birth")
    ap.add_argument("-s", "--sex", default=None, help="User sex")
    ap.add_argument(
        "-sd", "--short_description", default=None, help="USer short description"
    )

    args = vars(ap.parse_args())

    addUser(
        args["user_name"],
        args["user_surname"],
        args["user_email"],
        args["user_password"],
        args["profile_image"],
        args["birth_date"],
        args["sex"],
        args["short_description"],
    )
