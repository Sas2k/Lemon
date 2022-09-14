from setuptools import setup, find_packages

long_description = open('README.md', "r", encoding="utf-8").read()

setup(
    name="Lemon-Library",
    version="3.2.1-Beta",
    packages=find_packages(),
    install_requires=["parse==1.19.0", "waitress==2.1.2", "WebOb==1.8.7", "whitenoise==6.2.0"],
    author="Sasen Perera",
    author_email="sas8.communications@gmail.com",
    description="An experimental Full-Stack Framework for Python",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/Sas2k/Lemon",
    entry_points={
        'console_scripts': ['create-lemon-app = Lemon.create_lemon_app:main'],
    },
)