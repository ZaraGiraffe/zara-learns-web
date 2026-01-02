from zara_learns_web.config import Config

TEST_CONFIG_STRING = """
[storage]
user = "zara"
password = "zara"
host = "localhost"
port = 5432
database = "zara_db"
"""

def test_config():
    config = Config.from_file("config.toml")
    assert config.storage.user == "zara"
    assert config.storage.password == "zara"
    assert config.storage.host == "localhost"
    assert config.storage.port == 5432
    assert config.storage.database == "zara_db"
