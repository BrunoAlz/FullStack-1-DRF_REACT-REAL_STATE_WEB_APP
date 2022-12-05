import pytest


def test_user_str(base_user):
    """Testa a representação em string do User model"""
    assert base_user.__str__() == f"{base_user.username}"


def test_user_short_name(base_user):
    """Testa se o metodo get_shor_name Funciona"""
    short_name = f"{base_user.username}"
    assert base_user.get_short_name() == short_name


def test_user_full_name(base_user):
    """Testa se o metodo get_full_name Funciona"""
    full_name = f"{base_user.first_name} {base_user.last_name}"
    assert base_user.get_full_name == full_name


def test_base_user_email_is_normalized(base_user):
    """Testa se o Email do usuário está normalizado"""
    email = "alpha@REALESTATE.COM"
    assert base_user.email == email.lower()


def test_super_user_email_is_normalized(super_user):
    """Testa se o Email do Super-usuário está normalizado"""
    email = "alpha@REALESTATE.COM"
    assert super_user.email == email.lower()


def test_super_user_is_not_staff(user_factory):
    """Testa se uma exceção é levantada quando o
    Superuser não tem status de Staff"""
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=True, is_staff=False)
    assert str(err.value) == "Superusers must have is_staff=True"


def test_super_user_is_not_superuser(user_factory):
    """Testa se uma exceção é levantada quando o
    Superuser não tem status de superuser"""
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=False, is_staff=True)
    assert str(err.value) == "Superusers must have is_superuser=True"


def test_create_user_with_no_email(user_factory):
    """testa se ao criar um usuário sem EMAIL
    é levantada uma exceção"""
    with pytest.raises(ValueError) as err:
        user_factory.create(email=None)
    assert str(err.value) == "An email address is required"


def test_create_use_with_no_username(user_factory):
    """testa se ao criar um usuário sem USERNAME
    é levantada uma exceção"""
    with pytest.raises(ValueError) as err:
        user_factory.create(username=None)
    assert str(err.value) == "User must submit a username"


def test_create_user_with_no_firstname(user_factory):
    """testa se ao criar um usuário sem FIRSTNAME
    é levantada uma exceção"""
    with pytest.raises(ValueError) as err:
        user_factory.create(first_name=None)
    assert str(err.value) == "User must submit a first name"


def test_create_user_with_no_lastname(user_factory):
    """testa se ao criar um usuário sem LASTNAME
    é levantada uma exceção"""
    with pytest.raises(ValueError) as err:
        user_factory.create(last_name=None)
    assert str(err.value) == "User must submit a last name"


def test_create_superuser_with_no_email(user_factory):
    """testa se ao criar um Super-usuário sem EMAIL
    é levantada uma exceção"""
    with pytest.raises(ValueError) as err:
        user_factory.create(email=None, is_superuser=True, is_staff=True)
    assert str(err.value) == "An email address is required"


def test_create_superuser_with_no_password(user_factory):
    """testa se ao criar um Super-usuário sem PASSWORD
    é levantada uma exceção"""
    with pytest.raises(ValueError) as err:
        user_factory.create(is_superuser=True, is_staff=True, password=None)
    assert str(err.value) == "Superusers must have a password"


def test_user_email_incorrect(user_factory):
    """testa se ao criar um usuário com EMAIL
    INVALIDO é levantada uma exceção"""
    with pytest.raises(ValueError) as err:
        user_factory.create(email="testemail.com")
    assert str(err.value) == "You must provide a valid email address"
