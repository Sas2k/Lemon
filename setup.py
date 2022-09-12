from setuptools import setup, find_packages

long_description = open('README.md', "r", encoding="utf-8").read()

setup(
    name="Lemon-Library",
    version="2.0.0-Beta",
    packages=find_packages(),
    install_requires=open('requirements.txt').read().splitlines(),
    author="Sasen Perera",
    author_email="sas8.communications@gmail.com",
    description="An experimental Full-Stack Framework for Python",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/Sas2k/Lemon"
)